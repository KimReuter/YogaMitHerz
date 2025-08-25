// /app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 👉 Passe diese Werte an:
const TO_EMAIL = 'kimbaerlyyo@web.de';          // ← Ziel: Iris' E-Mail
const FROM_EMAIL = 'Kontakt <kontakt@deinedomain.de>'; // ← Absender (Domain bei Resend verifizieren)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      website?: string; // Honeypot
      name?: string;
      email?: string;
      mood?: string;
      message?: string;
    };

    // 1) Honeypot
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      return new NextResponse('Bot detected', { status: 400 });
    }

    // 2) Minimal-Validierung
    if (!body.name || !body.email || !body.message) {
      return new NextResponse('Bitte fülle alle Pflichtfelder aus.', { status: 400 });
    }

    // 3) E-Mail versenden
    const subject = `Neue Kontaktanfrage von ${body.name}`;
    const html = renderHtmlEmail(body);
    const text = renderTextEmail(body);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: body.email, // Iris kann direkt der Absenderin antworten
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return new NextResponse('E-Mail-Versand fehlgeschlagen.', { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return new NextResponse('Serverfehler. Bitte versuche es später erneut.', { status: 500 });
  }
}

function renderHtmlEmail(b: { name?: string; email?: string; mood?: string; message?: string }) {
  const mood = b.mood ? `<p><strong>Stimmung:</strong> ${escapeHtml(b.mood)}</p>` : '';
  return `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.5; color:#222">
      <h2 style="margin:0 0 12px 0;">Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(b.name || '')}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(b.email || '')}</p>
      ${mood}
      <p><strong>Nachricht:</strong></p>
      <div style="white-space:pre-wrap; border:1px solid #eee; padding:12px; border-radius:8px;">
        ${escapeHtml(b.message || '')}
      </div>
    </div>
  `;
}

function renderTextEmail(b: { name?: string; email?: string; mood?: string; message?: string }) {
  return [
    'Neue Kontaktanfrage',
    `Name: ${b.name ?? ''}`,
    `E-Mail: ${b.email ?? ''}`,
    b.mood ? `Stimmung: ${b.mood}` : '',
    '',
    'Nachricht:',
    b.message ?? '',
  ].filter(Boolean).join('\n');
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}