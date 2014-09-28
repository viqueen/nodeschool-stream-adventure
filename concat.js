/**
 * concat.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var concat = require('concat-stream');

process.stdin
  .pipe(
    concat(
      function (data) {
        var rev = data.toString().split('').reverse().join('');
        console.log(rev);
      }
    )
   );
