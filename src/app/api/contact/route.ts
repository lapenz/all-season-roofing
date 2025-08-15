import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, type ContactFormData } from '@/services/contact'

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<ContactFormData>

    if (!data || !data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      service: data.service || '',
      message: data.message,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}


