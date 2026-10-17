import test from 'node:test';
import assert from 'node:assert/strict';
import { submitEnquiry, ENQUIRY_ENDPOINT } from '../src/services/enquiries.js';

const draft = {
  name: '  Preview visitor  ', email: 'preview@example.com', phone: '',
  subject: 'General enquiry', message: 'Please confirm appointment availability.', website: '',
};
const response = (body, status = 200) => ({ ok: status < 400, status, json: async () => body });

test('sends trimmed fields to the clinic endpoint and accepts explicit acknowledgement', async () => {
  let call;
  const result = await submitEnquiry(draft, { fetchImpl: async (...args) => {
    call = args;
    return response({ success: 'true', message: 'Form submitted successfully' });
  } });
  assert.equal(result.accepted, true);
  assert.equal(call[0], ENQUIRY_ENDPOINT);
  assert.equal(ENQUIRY_ENDPOINT, 'https://formsubmit.co/ajax/drhimanigynae@gmail.com');
  assert.equal(call[1].method, 'POST');
  assert.equal(call[1].credentials, 'omit');
  const body = JSON.parse(call[1].body);
  assert.equal(body.name, 'Preview visitor');
  assert.equal(body.phone, 'Not provided');
  assert.equal(body.email, draft.email);
  assert.equal(body._subject, 'Website enquiry: General enquiry');
  assert.equal(body._honey, '');
  assert.equal('_cc' in body, false);
  assert.equal('_captcha' in body, false);
});

test('invalid entries and honeypot submissions never contact the provider', async () => {
  for (const change of [
    { name: ' ' }, { email: 'invalid' }, { message: ' ' },
    { message: 'x'.repeat(1201) }, { subject: 'unlisted topic' }, { website: 'spam.example' },
    { name: 'Visitor\r\nBcc:someone@example.com' }, { phone: '+91\n123' }, { message: 'Invalid\u0000message' },
    { email: 'preview\u007f@example.com' },
  ]) {
    await assert.rejects(submitEnquiry({ ...draft, ...change }, {
      fetchImpl: () => assert.fail('Invalid data must not leave the browser'),
    }), { code: 'validation' });
  }
});

test('HTTP errors, missing acknowledgement and activation requests cannot show success', async () => {
  const cases = [
    [response({}, 429), 'rate-limit'], [response({}, 503), 'service'],
    [response({ success: false }), 'service'], [response({}), 'service'],
    [response(null), 'service'], [response([]), 'service'], [response('Unexpected response'), 'service'],
    [response({ success: true, message: 'Please activate your form by confirming your email' }), 'activation'],
    [{ ok: true, json: async () => { throw new SyntaxError(); } }, 'service'],
  ];
  for (const [result, code] of cases) {
    await assert.rejects(submitEnquiry(draft, { fetchImpl: async () => result }), { code });
  }
});

test('network failures are actionable and cancellations remain cancellations', async () => {
  await assert.rejects(submitEnquiry(draft, { fetchImpl: async () => { throw new TypeError('offline'); } }), { code: 'network' });
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(submitEnquiry(draft, {
    signal: controller.signal,
    fetchImpl: async (_url, options) => {
      assert.equal(options.signal.aborted, true);
      throw new DOMException('Aborted', 'AbortError');
    },
  }), { name: 'AbortError' });
});
