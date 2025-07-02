// EmailJS Configuration
import emailjs from '@emailjs/browser'

// EmailJS Configuration - FULLY ACTIVATED
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_s005689',  // ✅ Provided by user
  TEMPLATE_ID: 'template_ivhdwii', // ✅ Provided by user
  PUBLIC_KEY: 'AFxQ-t50O0gwJe_1l' // ✅ Provided by user - SYSTEM ACTIVATED!
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY)
    console.log('EmailJS initialized successfully for AI Hospital System')
  } else {
    console.log('EmailJS not initialized - Public Key needed')
  }
}

// Send email function with real EmailJS
export const sendEmail = async (templateParams) => {
  try {
    // Check if EmailJS is properly configured
    if (EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
      console.log('EmailJS not configured - using fallback')
      throw new Error('EmailJS not configured')
    }
    
    // Initialize EmailJS
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY)
    
    // Add timestamp and format parameters
    const emailParams = {
      ...templateParams,
      timestamp: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      to_email: 'helio@nowgo.com.br'
    }
    
    console.log('Sending email with EmailJS:', emailParams)
    
    // Send email using EmailJS
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      emailParams
    )
    
    console.log('Email sent successfully via EmailJS:', response)
    return { status: 200, text: 'Email sent successfully via EmailJS' }
    
  } catch (error) {
    console.error('EmailJS sending failed:', error)
    
    // Fallback to formatted email content for manual sending
    const emailContent = formatEmailContent(templateParams)
    console.log('Fallback email content:', emailContent)
    
    // Re-throw error to trigger fallback in forms
    throw error
  }
}

// Format email content for fallback or manual sending
const formatEmailContent = (params) => {
  const timestamp = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  })
  
  return {
    to: 'helio@nowgo.com.br',
    subject: params.subject || 'AI Hospital System Contact',
    body: `
${params.form_type || 'Contact Form'} - AI Hospital System
Recebido em: ${timestamp}

Nome: ${params.from_name || 'Não informado'}
Email: ${params.from_email || 'Não informado'}
${params.company ? `Empresa: ${params.company}` : ''}
${params.phone ? `Telefone: ${params.phone}` : ''}
${params.interest_area ? `Área de Interesse: ${params.interest_area}` : ''}
${params.consultation_topic ? `Tópico da Consulta: ${params.consultation_topic}` : ''}
${params.preferred_date ? `Data Preferida: ${params.preferred_date}` : ''}
${params.preferred_time ? `Horário Preferido: ${params.preferred_time}` : ''}

Mensagem:
${params.message || 'Nenhuma mensagem fornecida'}

---
Enviado do AI Hospital System
Website: https://www.nowgomedai.com
Tipo de Formulário: ${params.form_type || 'Contato'}
    `.trim()
  }
}

// Get missing configuration info
export const getMissingConfig = () => {
  const missing = []
  
  if (EMAIL_CONFIG.SERVICE_ID === 'service_hospital_ai') {
    missing.push('Service ID')
  }
  
  if (EMAIL_CONFIG.TEMPLATE_ID === 'template_contact') {
    missing.push('Template ID')
  }
  
  if (EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
    missing.push('Public Key')
  }
  
  return missing
}

// Configuration status
export const getConfigStatus = () => {
  const missing = getMissingConfig()
  
  return {
    isConfigured: missing.length === 0,
    missing: missing,
    serviceId: EMAIL_CONFIG.SERVICE_ID,
    templateId: EMAIL_CONFIG.TEMPLATE_ID,
    hasPublicKey: EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE'
  }
}

