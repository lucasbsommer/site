// Cloudflare Pages Function: POST /api/subscribe
//
// Wiring:
// - In the Cloudflare Pages dashboard → Settings → Environment variables, set:
//     RESEND_API_KEY      Resend API key (https://resend.com)
//     RESEND_AUDIENCE_ID  Target audience ID
//
// Without those vars, the function accepts + validates the email but does not
// forward anywhere. That lets the UI work before a provider is chosen.

interface Env {
  RESEND_API_KEY?: string;
  RESEND_AUDIENCE_ID?: string;
}

interface Payload {
  email?: unknown;
  source?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'invalid_body' }, 400);
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  if (!email || email.length > 320 || !EMAIL_RE.test(email)) {
    return json({ error: 'invalid_email' }, 400);
  }
  const source = typeof payload.source === 'string' ? payload.source.slice(0, 200) : '';

  if (env.RESEND_API_KEY && env.RESEND_AUDIENCE_ID) {
    const res = await fetch(
      `https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      },
    );
    if (!res.ok && res.status !== 409) {
      console.error('resend_error', res.status, await res.text().catch(() => ''));
      return json({ error: 'provider_error' }, 502);
    }
  } else {
    console.log('subscribe (no provider configured)', { email, source });
  }

  return json({ ok: true });
};

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204 });
  return new Response('method_not_allowed', { status: 405 });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
