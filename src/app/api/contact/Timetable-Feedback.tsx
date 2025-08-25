// /app/api/timetable-feedback/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'kimbaerlyyo@web.de'; // <- Iris' echte Adresse
const FROM_EMAIL = 'Kontakt <kontakt@deinedomain.de>'; // <- verifizierte Domain bei Resend

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { website?: string; name?: string; email?: string; wish?: string };

    // Honeypot
    if (body.website && body.website.trim() !== '') return new NextResponse('Bot detected', { status: 400 });

    if (!body.name || !body.wish)
      return new NextResponse('Bitte Name und Wunschzeit angeben.', { status: 400 });

    const subject = `Neuer Kurswunsch von ${body.name}`;
    const text = [
      `Name: ${body.name}`,
      body.email ? `E-Mail: ${body.email}` : 'E-Mail: (nicht angegeben)',
      `Wunsch: ${body.wish}`,
    ].join('\n');

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: body.email || undefined,
      subject,
      text,
      html: text.replace(/\n/g, '<br/>'),
    });

    if (error) {
      console.error(error);
      return new NextResponse('E-Mail-Versand fehlgeschlagen.', { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return new NextResponse('Serverfehler.', { status: 500 });
  }
}