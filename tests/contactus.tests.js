const assert = require('assert');
const fetch = require('node-fetch');

suite('Contact Us page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/contactus");
    let body = await res.text();
    assert.ok(body.includes("<title>Contact Us</title>"));
    assert.ok(body.includes("<h1>Contact Us</h1>"));
  });
});
