/**
 * websockets.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var ws = require('websocket-stream');

var stream = ws('ws://localhost:8000');
stream.write('hello\n');
stream.end();
