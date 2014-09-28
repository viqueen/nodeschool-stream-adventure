/**
 * transform.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var through = require('through');
process.stdin
  .pipe(
    through(
      function upperCase(buffer) {
        this.queue(buffer.toString().toUpperCase());
      },
      function end() {
        this.queue(null);
      }
    )
  )
  .pipe(process.stdout);
