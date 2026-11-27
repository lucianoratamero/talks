import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ageOn, build } from './build-talk.mjs';

test('fills front matter, marks headings outside code, keeps slide markdown intact', () => {
  const template = '<title>{{title}}</title><!-- slides:start -->sample<!-- slides:end -->';
  const md = '---\ntitle: A & "B": c\n---\n## Hi\n```py\n# comment {{x}} $1 </textarea>\n```\n';
  const html = build(template, md);
  assert.match(html, /<title>A &#38; &#34;B&#34;: c<\/title>/);
  assert.match(html, /## &lt;mark>Hi&lt;\/mark>/);
  assert.match(html, /\n# comment \{\{x\}\} \$1 &lt;\/textarea>\n/);
  assert.doesNotMatch(html, /sample/);
  assert.throws(() => build('{{about}}', md), /missing "about"/);
  assert.throws(() => build(template, '## no front matter'), /front matter/);
});

test('theme defaults to light, accepts dark, rejects typos', () => {
  assert.equal(build('{{theme}}', '---\ntitle: t\n---\n'), 'light');
  assert.equal(build('{{theme}}', '---\ntheme: dark\n---\n'), 'dark');
  assert.throws(() => build('{{theme}}', '---\ntheme: drak\n---\n'), /"light" or "dark"/);
});

test('bullets and paragraphs default to all, accept step, reject typos', () => {
  for (const key of ['bullets', 'paragraphs']) {
    assert.equal(build(`{{${key}}}`, '---\ntitle: t\n---\n'), 'all');
    assert.equal(build(`{{${key}}}`, `---\n${key}: step\n---\n`), 'step');
    assert.throws(() => build(`{{${key}}}`, `---\n${key}: steps\n---\n`), new RegExp(`${key} must be "all" or "step"`));
  }
});

test('age turns over on June 15 and can be pinned in front matter', () => {
  assert.equal(ageOn(new Date(2026, 5, 14, 23, 59)), 36);
  assert.equal(ageOn(new Date(2026, 5, 15)), 37);
  assert.equal(ageOn(new Date(2027, 0, 1)), 37);
  assert.equal(build('{{age}}', '---\ntitle: t\n---\n'), String(ageOn(new Date())));
  assert.equal(build('{{age}}', '---\nage: 31\n---\n'), '31');
});
