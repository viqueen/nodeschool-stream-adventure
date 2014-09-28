/**
 * http-server.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var through = require('through');
var http    = require('http');

var server = http.createServer(
      function (request, response) {
        if (request.method == 'POST') {
          request
            .pipe(
              through(
                function upperCase(buffer) {
                  this.queue(buffer.toString().toUpperCase());
                }
              )
             )
            .pipe(response);
        }
      }
    );

server.listen(process.argv[2]);
