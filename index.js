const express = require('express');
const app = express();
function handleRedirect(req, res) {
  const targetUrl = 'http://originsite.azurewebsites.net/readcookies/';
  res.redirect(targetUrl);
}
app.post('/redirect', handleRedirect);
app.get('/page', function(req, res) {
  res.sendFile('page.html' , { root : __dirname});
});
const port = process.env.port || 3000;
app.listen(port);
