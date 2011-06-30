Breaking change from express 1.0 to 2.0, where partials don't return a
string, and cause res.send() to be called more than once.


    $ sh test.sh
    DOING PUT
    ---------
    { '0.17779993172734976': 'Thu, 30 Jun 2011 02:12:10 GMT' }
    <!DOCTYPE html>
    <html lang="en-US">
    <body>
    <h1>PUTted a message</h1>
    
    </body>
    </html>
    ---------
    DOING GET
    ---------
    Error: Can't use mutable header APIs after sent.
        at ServerResponse.getHeader (http.js:544:11)
        at ServerResponse.header (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/response.js:278:17)
        at ServerResponse.send (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/response.js:66:17)
        at ServerResponse._render (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/view.js:442:10)
        at ServerResponse.render (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/view.js:316:17)
        at ServerResponse._render (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/view.js:432:10)
        at ServerResponse.render (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/view.js:316:17)
        at Router.<anonymous> (/Users/isaacs/dev-src/js/express-partial-break/server.js:19:7)
        at done (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:250:22)
        at middleware (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:244:9)
    <p>Messages:
    
    Error: Can't set headers after they are sent.
        at ServerResponse.<anonymous> (http.js:527:11)
        at ServerResponse.setHeader (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/patch.js:47:22)
        at IncomingMessage.next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:168:13)
        at ServerResponse.render (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/view.js:327:16)
        at Router.<anonymous> (/Users/isaacs/dev-src/js/express-partial-break/server.js:19:7)
        at done (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:250:22)
        at middleware (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:244:9)
        at param (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:227:11)
        at pass (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index<pre>{
      &quot;0.17779993172734976&quot;: &quot;Thu, 30 Jun 2011 02:12:10 GMT&quot;
    }</pre>
    
    
    .js:232:6)
        at Router._dispatch (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:255:4)
    Error: Can't set headers after they are sent.
        at ServerResponse.<anonymous> (http.js:527:11)
        at ServerResponse.setHeader (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/patch.js:47:22)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:168:13)
        at param (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:230:9)
        at pass (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:232:6)
        at Router._dispatch (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:255:4)
        at Object.handle (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/router/index.js:45:10)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:204:15)
        at Object.handle (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/http.js:85:5)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:204:15)
    Error: Can't set headers after they are sent.
        at ServerResponse.<anonymous> (http.js:527:11)
        at ServerResponse.setHeader (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/patch.js:47:22)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:168:13)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:213:9)
        at Object.handle (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/lib/http.js:85:5)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:204:15)
        at HTTPServer.handle (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:217:3)
        at HTTPServer.emit (events.js:67:17)
        at HTTPParser.onIncoming (http.js:1124:12)
        at HTTPParser.onHeadersComplete (http.js:108:31)
    
    http.js:527
        throw new Error("Can't set headers after they are sent.");
              ^
             
    Error: Can't set headers after they are sent.
        at ServerResponse.<anonymous> (http.js:527:11)
        at ServerResponse.setHeader (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/patch.js:47:22)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:168:13)
        at next (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:213:9)
        at HTTPServer.handle (/Users/isaacs/dev-src/js/express-partial-break/node_modules/express/node_modules/connect/lib/http.js:217:3)
        at HTTPServer.emit (events.js:67:17)
        at HTTPParser.onIncoming (http.js:1124:12)
        at HTTPParser.onHeadersComplete (http.js:108:31)
        at Socket.ondata (http.js:1019:22)
        at Socket._onReadable (net.js:683:27)
