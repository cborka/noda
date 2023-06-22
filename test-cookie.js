var cookie = require('cookie');
var cookiess = require('cookie-signature');

var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');

function onRequest(req, res) {
  // Parse the query string
  var query = url.parse(req.url, true, true).query;

  console.log(req.url);
  // console.log('headers='+JSON.stringify(req.headers, null, 2));
  // console.log(JSON.stringify(query));

  var val = cookiess.sign('hello', 'xxx');
 //val.should.equal('hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7ch8tOBGslZ5QI');
  console.log('val=' + JSON.stringify(val));
  console.log('val=' + JSON.stringify(cookiess.unsign(val, 'xxx')));
  console.log('val=' + JSON.stringify(cookiess.unsign(val, 'zzz')));


  if (query && query.name) {
    // Set a new cookie with the name
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    // Redirect back after setting cookie
    res.statusCode = 302;
    console.log('referer='+req.headers.referer);
    res.setHeader('Location', req.headers.referer || '/');
    res.end();
    return;
  }

  // Parse the cookies on the request
  var cookies = cookie.parse(req.headers.cookie || '');

  // Get the visitor name set in the cookie
  var name = cookies.name;

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');

  //console.log('headers2='+JSON.stringify(res, null, 2));

  if (name) {
    res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>');
  } else {
    res.write('<p>Hello, new visitor!</p>');
  }

  res.write('<form method="GET">');
  res.write('<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name"> ');
  res.end('</form>');
}



const srv = http.createServer(onRequest).listen(3000);

