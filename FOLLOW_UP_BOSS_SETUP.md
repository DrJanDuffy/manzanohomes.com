# Follow Up Boss API Integration Setup

## Required Vercel Environment Variables

Add these environment variables to your Vercel project:

### Follow Up Boss API Configuration
```
FOLLOW_UP_BOSS_API_KEY=your_follow_up_boss_api_key_here
FOLLOW_UP_BOSS_BASE_URL=https://api.followupboss.com/v1
FOLLOW_UP_BOSS_AGENT_ID=your_agent_id_here
```

### SMS Configuration
```
SMS_PHONE_NUMBER=+17025001942
SMS_AUTO_REPLY_ENABLED=true
SMS_AUTO_REPLY_MESSAGE=Thanks for texting Manzano Homes! We'll get back to you within 15 minutes. Reply STOP to opt out.
```

### Twilio Configuration (Optional - for SMS webhooks)
```
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+17025001942
```

### Webhook URLs
```
SMS_WEBHOOK_URL=https://your-domain.vercel.app/api/sms/webhook
```

## Setup Instructions

### 1. Follow Up Boss API Setup
1. Log into your Follow Up Boss account
2. Go to Settings > Integrations > API
3. Generate an API key
4. Note your Agent ID from your profile
5. Add these to Vercel environment variables

### 2. SMS Webhook Setup
1. Set up Twilio or your SMS provider
2. Configure webhook URL: `https://your-domain.vercel.app/api/sms/webhook`
3. Test the webhook with a sample SMS

### 3. Testing
1. Send a test SMS to your business number
2. Check Follow Up Boss for new lead creation
3. Submit the contact form and verify lead creation
4. Test SMS auto-replies

## API Endpoints Created

### SMS Webhook
- **URL**: `/api/sms/webhook`
- **Method**: POST
- **Purpose**: Receives incoming SMS and creates/updates leads

### Contact Form Submission
- **URL**: `/api/contact/submit`
- **Method**: POST
- **Purpose**: Processes contact form submissions and creates leads

## Features Implemented

### Lead Management
- ✅ Automatic lead creation from SMS
- ✅ Automatic lead creation from contact forms
- ✅ Duplicate lead prevention
- ✅ Lead status updates
- ✅ Note addition for conversations

### SMS Integration
- ✅ Auto-reply to incoming SMS
- ✅ SMS sending through Follow Up Boss
- ✅ Conversation tracking
- ✅ Opt-out handling

### Contact Form Integration
- ✅ Preferred contact method tracking
- ✅ Property interest capture
- ✅ Budget and timeframe tracking
- ✅ Automatic SMS follow-up for SMS preference

## Custom Fields Added

The integration adds these custom fields to leads:
- `preferredContact`: Email, Phone, or SMS
- `propertyInterest`: Property type interest
- `timeframe`: Buying/selling timeframe
- `budget`: Budget range
- `subject`: Form subject
- `formMessage`: Original form message
- `smsMessage`: SMS content
- `smsTimestamp`: SMS timestamp
- `smsNumber`: SMS number used

## Tags Applied

All leads are tagged with:
- `SMS` (for SMS leads)
- `Website` (for form leads)
- `Form Submission` (for form leads)
- `Manzano Homes` (brand tag)
