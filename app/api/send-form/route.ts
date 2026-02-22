import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.RESEND_FROM ?? 'KIRH Website <onboarding@resend.dev>'

const FORM_RECIPIENTS: Record<string, string> = {
  contact: 'info@kirh.co.ke',
  'get-support': 'support@kirh.co.ke',
  partner: 'partner@kirh.co.ke',
}

function buildEmailBody(formType: string, data: Record<string, unknown>): string {
  const lines: string[] = []
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim()
    const display = Array.isArray(value) ? value.join(', ') : String(value)
    if (display) lines.push(`${label}: ${display}`)
  }
  return lines.join('\n')
}

function getSubject(formType: string): string {
  switch (formType) {
    case 'contact':
      return 'Contact form – KIRH Website'
    case 'get-support':
      return 'Get Support request – KIRH Website'
    case 'partner':
      return 'Partnership application – KIRH Website'
    default:
      return 'Form submission – KIRH Website'
  }
}

export async function POST(request: NextRequest) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email not configured', fallback: 'mailto' },
      { status: 503 }
    )
  }

  let body: { formType?: string; data?: Record<string, unknown> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { formType, data } = body
  const to = formType && FORM_RECIPIENTS[formType]
  if (!to || !data || typeof data !== 'object') {
    return NextResponse.json(
      { error: 'Missing formType or data' },
      { status: 400 }
    )
  }

  const subject = getSubject(formType)
  const textBody = buildEmailBody(formType, data as Record<string, unknown>)
  const htmlBody = textBody
    .split('\n')
    .map((line) => `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`)
    .join('')

  const resend = new Resend(RESEND_API_KEY)
  const { data: sendData, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [to],
    subject,
    text: textBody,
    html: `<div style="font-family: sans-serif;">${htmlBody}</div>`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true, id: sendData?.id })
}
