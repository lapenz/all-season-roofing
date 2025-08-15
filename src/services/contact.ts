import nodemailer from 'nodemailer'

export type ContactFormData = {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export async function sendContactEmail(form: ContactFormData): Promise<void> {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@asrfl.com'

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    throw new Error('Email transport is not configured. Please set SMTP_* env vars.')
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const subject = `New Contact Request from ${form.name}`
  const textBody = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    form.phone ? `Phone: ${form.phone}` : undefined,
    form.service ? `Service: ${form.service}` : undefined,
    '---',
    form.message,
  ]
    .filter(Boolean)
    .join('\n')

  const htmlBody = `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${form.name}</p>
    <p><strong>Email:</strong> ${form.email}</p>
    ${form.phone ? `<p><strong>Phone:</strong> ${form.phone}</p>` : ''}
    ${form.service ? `<p><strong>Service:</strong> ${form.service}</p>` : ''}
    <hr />
    <p style="white-space: pre-wrap;">${escapeHtml(form.message)}</p>
  `

  await transporter.sendMail({
    from: `Website Contact <${smtpUser}>`,
    to: toEmail,
    replyTo: form.email,
    subject,
    text: textBody,
    html: htmlBody,
  })
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}


