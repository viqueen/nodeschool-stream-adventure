/**
 * lines.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var through = require('through');
var split   = require('split');

var odd = true;
process.stdin
  .pipe(split())
  .pipe(
    through(
      function process(buffer) {
        var line = buffer.toString() + '\n';
        this.queue(odd?line.toLowerCase():line.toUpperCase());
        odd = !odd;
      }
    )
  )
  .pipe(process.stdout);
