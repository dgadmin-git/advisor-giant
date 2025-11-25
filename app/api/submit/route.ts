import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const apiToken = process.env.GHL_API_TOKEN;
    const locationId = process.env.GHL_LOCATION_ID;

    console.log('Environment check:', {
      hasToken: !!apiToken,
      tokenPrefix: apiToken?.substring(0, 10),
      hasLocationId: !!locationId,
      locationId: locationId
    });

    if (!apiToken || !locationId) {
      return NextResponse.json(
        { error: 'GHL credentials not configured' },
        { status: 500 }
      );
    }

    // Prepare contact data for GHL
    const contactData: Record<string, any> = {
      locationId: locationId,
      firstName: body.firstName || body.name?.split(' ')[0] || '',
      lastName: body.lastName || body.name?.split(' ').slice(1).join(' ') || '',
      email: body.email || '',
      phone: body.phone || '',
      source: body.source || 'Advertorial Website',
      tags: [body.formType || 'general']
    };

    // Build custom fields array
    const customFields: Array<{ key: string; field_value: any }> = [];

    // Add custom fields based on form type
    if (body.firmName) {
      customFields.push({
        key: 'firm_name',
        field_value: body.firmName
      });
    }

    if (body.aum) {
      customFields.push({
        key: 'assets_under_management',
        field_value: body.aum
      });
    }

    if (body.assets) {
      customFields.push({
        key: 'investable_assets',
        field_value: body.assets
      });
    }

    if (body.message) {
      customFields.push({
        key: 'message',
        field_value: body.message
      });
    }

    // Add quiz data if present
    if (body.quizData) {
      Object.entries(body.quizData).forEach(([key, value]) => {
        customFields.push({
          key: key,
          field_value: value
        });
      });
    }

    // Only add customFields array if it has data
    if (customFields.length > 0) {
      contactData.customFields = customFields;
    }

    // Log the payload being sent (for debugging)
    console.log('Submitting to GHL:', JSON.stringify(contactData, null, 2));

    // Submit to GoHighLevel
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify(contactData)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('GHL API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorData
      });
      return NextResponse.json(
        { error: 'Failed to submit to GHL', details: errorData, status: response.status },
        { status: response.status }
      );
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Contact submitted successfully',
      contactId: result.contact?.id
    });

  } catch (error) {
    console.error('Error submitting to GHL:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
