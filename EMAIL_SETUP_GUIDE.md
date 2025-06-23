# Contact Form Setup Guide

## Overview
I've implemented a contact form that opens the user's default email client with a pre-filled email to your address (anikadhikari1999@gmail.com) when they submit the form. This approach uses the device's native email functionality, so no external services are required.

## How It Works

### **User Experience:**
1. User fills out the contact form (Name, Email, Message)
2. User clicks "Send Message" button
3. Form validates all fields and email format
4. User's default email client opens automatically
5. Email is pre-filled with:
   - **To:** anikadhikari1999@gmail.com
   - **Subject:** "New Contact Form Message from [Name]"
   - **Body:** Professional message with all form details
6. User just needs to click "Send" in their email client

### **Email Template:**
```
Hello Steve,

I'm reaching out through your website contact form.

Name: [User's Name]
Email: [User's Email]

Message:
[User's Message]

Best regards,
[User's Name]
```

## Features Implemented

✅ **Form Validation**
- All fields are required
- Email format validation
- Real-time error messages

✅ **User Experience**
- Loading state ("Opening Email...")
- Success/error notifications
- Form reset after submission
- Professional email formatting

✅ **Cross-Platform Compatibility**
- Works on desktop (Outlook, Apple Mail, etc.)
- Works on mobile (Gmail app, Mail app, etc.)
- Works on all browsers

✅ **No External Dependencies**
- No EmailJS account needed
- No API keys required
- No monthly limits
- Works offline

## Testing

1. Fill out the contact form on any page
2. Click "Send Message"
3. Your default email client should open
4. Check that the email is pre-filled correctly
5. Send the email to test the complete flow

## Benefits of This Approach

- **Simple Setup** - No accounts or configuration needed
- **Reliable** - Uses native email functionality
- **Secure** - No data sent to third-party services
- **Free** - No monthly costs or limits
- **Universal** - Works on all devices and email clients

## Troubleshooting

**If email client doesn't open:**
1. Check that you have a default email client set up
2. Try on a different browser
3. Check browser settings for popup blockers

**If email is not pre-filled correctly:**
1. Check that all form fields have the correct `name` attributes
2. Verify the JavaScript is loading properly
3. Check browser console for errors

## Alternative Solutions

If you prefer a different approach, you could also use:
- **Formspree** - Form submission service
- **Netlify Forms** - If hosting on Netlify
- **Google Forms** - Embed Google Form
- **Custom backend** - Server-side email handling

## Files Updated

- ✅ **js/contact-form.js** - Complete mailto: functionality
- ✅ **index.html** - Form with proper name attributes
- ✅ **about.html** - Form with proper name attributes
- ✅ **projects.html** - Form with proper name attributes
- ✅ **photo.html** - Form with proper name attributes

The contact form is now ready to use! Users will be able to contact you through their default email client with all the form information pre-filled. 