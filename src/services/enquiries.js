import { DOCTOR } from '../data/doctor.js';

export const ENQUIRY_ENDPOINT = `https://formsubmit.co/ajax/${DOCTOR.contact.email}`;
export const ENQUIRY_TOPICS = [
  'General enquiry', 'Pregnancy & maternity', 'Gynaecological Endoscopy',
  'Fertility & reproductive care', 'Pain & Palliative Care', 'Academic collaboration',
];

export class EnquiryError extends Error {
  constructor(code) {
    super(code);
    this.name = 'EnquiryError';
    this.code = code;
  }
}

// Accept only an explicit provider acknowledgement. HTTP 200 alone is insufficient.
export async function submitEnquiry(draft, { signal, fetchImpl = fetch } = {}) {
  const fields = Object.fromEntries(['name', 'email', 'phone', 'subject', 'message', 'website']
    .map(key => [key, String(draft[key] || '').trim()]));
  const unsafeControlCharacters = /[\u0000-\u001f\u007f]/;
  if (!fields.name || fields.name.length > 100 || unsafeControlCharacters.test(fields.name)
      || unsafeControlCharacters.test(fields.phone) || unsafeControlCharacters.test(fields.email)
      || /[\u0000\u007f]/.test(fields.message)
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
      || fields.email.length > 150 || fields.phone.length > 25 || !fields.message
      || fields.message.length > 1200 || !ENQUIRY_TOPICS.includes(fields.subject) || fields.website) {
    throw new EnquiryError('validation');
  }

  let response;
  try {
    response = await fetchImpl(ENQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      credentials: 'omit',
      referrerPolicy: 'strict-origin-when-cross-origin',
      signal,
      body: JSON.stringify({
        name: fields.name, email: fields.email, phone: fields.phone || 'Not provided',
        subject: fields.subject, message: fields.message,
        _subject: `Website enquiry: ${fields.subject}`,
        _template: 'table', _honey: fields.website,
      }),
    });
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    throw new EnquiryError('network');
  }
  if (!response.ok) throw new EnquiryError(response.status === 429 ? 'rate-limit' : 'service');
  let result;
  try { result = await response.json(); } catch { throw new EnquiryError('service'); }
  if (!result || typeof result !== 'object' || Array.isArray(result)) throw new EnquiryError('service');
  if (/activat|confirm.*email|verify.*email/i.test(String(result.message || ''))) {
    throw new EnquiryError('activation');
  }
  if (result.success !== true && result.success !== 'true') throw new EnquiryError('service');
  return { accepted: true };
}
