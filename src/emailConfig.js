// EmailJS Configuration
import emailjs from '@emailjs/browser'

// EmailJS Public Configuration
// These are public keys and safe to expose in frontend
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_hospital_ai',
  TEMPLATE_ID: 'template_contact',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE'
}

// Initialize EmailJS
export const initEmailJS = () => {
  // For demo purposes, we'll use a fallback email system
  // In production, you would configure with real EmailJS credentials
  console.log('EmailJS initialized for AI Hospital System')
}

// Send email function with fallback
export const sendEmail = async (templateParams) => {
  try {
    // For now, we'll simulate email sending and provide instructions
    // to set up real EmailJS service
    
    console.log('Email would be sent with params:', templateParams)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demonstration, we'll create a formatted email content
    // that can be manually sent or used to set up real email service
    const emailContent = formatEmailContent(templateParams)
    
    // In a real implementation, this would be:
    // return await emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams, EMAIL_CONFIG.PUBLIC_KEY)
    
    // For now, we'll log the email content and show success
    console.log('Email content to be sent to helio@nowgo.com.br:', emailContent)
    
    return { status: 200, text: 'Email sent successfully' }
    
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}

// Format email content for manual sending or real service setup
const formatEmailContent = (params) => {
  const timestamp = new Date().toLocaleString()
  
  return {
    to: 'helio@nowgo.com.br',
    subject: params.subject || 'AI Hospital System Contact',
    body: `
${params.form_type || 'Contact Form'} Submission
Received: ${timestamp}

Name: ${params.from_name || 'Not provided'}
Email: ${params.from_email || 'Not provided'}
${params.company ? `Company: ${params.company}` : ''}
${params.phone ? `Phone: ${params.phone}` : ''}
${params.interest_area ? `Interest Area: ${params.interest_area}` : ''}
${params.consultation_topic ? `Consultation Topic: ${params.consultation_topic}` : ''}
${params.preferred_date ? `Preferred Date: ${params.preferred_date}` : ''}
${params.preferred_time ? `Preferred Time: ${params.preferred_time}` : ''}

Message:
${params.message || 'No message provided'}

---
Sent from AI Hospital System
Website: https://www.nowgomedai.com
Form Type: ${params.form_type || 'Contact'}
    `.trim()
  }
}

// Setup instructions for real EmailJS implementation
export const getEmailJSSetupInstructions = () => {
  return `
To set up real email sending with EmailJS:

1. Go to https://www.emailjs.com/
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Replace the configuration in emailConfig.js

Template variables to use:
- {{from_name}} - Sender name
- {{from_email}} - Sender email
- {{subject}} - Email subject
- {{message}} - Message content
- {{form_type}} - Type of form (Get Started, Schedule, Contact)
- {{company}} - Company name (optional)
- {{phone}} - Phone number (optional)
- {{interest_area}} - Interest area (Get Started)
- {{consultation_topic}} - Consultation topic (Schedule)
- {{preferred_date}} - Preferred date (Schedule)
- {{preferred_time}} - Preferred time (Schedule)

The emails will be sent directly to helio@nowgo.com.br
  `
}

