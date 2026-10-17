import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { PAGE_METADATA, pageUrl } from '../src/data/site.js';

const restoreSource = await readFile(new URL('../src/restore-path.js', import.meta.url), 'utf8');
const redirectSource = await readFile(new URL('../public/redirect-path.js', import.meta.url), 'utf8');
function restore(search, hash = '') {
  let destination = null;
  vm.runInNewContext(restoreSource, {
    URL,
    window: {
      location: { search, hash, pathname: '/dr-himani/', origin: 'https://panbhav.github.io' },
      history: { replaceState(_state, _unused, path) { destination = path; } },
    },
  });
  return destination;
}

test('legacy deep links retain their route, query and section without leaving the site', () => {
  assert.equal(restore('?/specialties&ref=clinic~and~source=web', '#endoscopy'), '/dr-himani/specialties?ref=clinic&source=web#endoscopy');
  assert.equal(restore('?ordinary=query'), null);
  assert.equal(restore('?/%2e%2e/outside'), null);
  assert.equal(restore('?//other.example/path'), '/dr-himani//other.example/path');
});

test('GitHub 404 fallback round-trips deep links and keeps navigation on the project origin', () => {
  let destination;
  vm.runInNewContext(redirectSource, {
    window: { location: {
      pathname: '/dr-himani/specialties', search: '?ref=clinic&from=web', hash: '#endoscopy',
      replace(value) { destination = value; },
    } },
  });
  assert.equal(destination, '/dr-himani/?/specialties&ref=clinic~and~from=web#endoscopy');
  const query = destination.slice('/dr-himani/'.length).split('#')[0];
  assert.equal(restore(query, '#endoscopy'), '/dr-himani/specialties?ref=clinic&from=web#endoscopy');
});

test('sitemap lists exactly the current canonical public pages and robots advertises it', async () => {
  const xml = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(urls, Object.keys(PAGE_METADATA).map(pageUrl));
  assert.equal(new Set(urls).size, 4);
  const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8');
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Sitemap: https:\/\/panbhav.github.io\/dr-himani\/sitemap.xml/);
});
