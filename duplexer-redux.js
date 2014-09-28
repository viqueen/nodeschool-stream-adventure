/**
 * duplexer-redux.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var duplex  = require('duplexer');
var through = require('through');

function val (value, defaultValue) {
  return (value == null || value == undefined)? defaultValue : value;
}

module.exports = function (counter) {
  var counts = {};
  var readable = through(
        function (record) {
          var code = record['country'];
          counts[code] = val (counts[code], 0) + 1;
        },
        function end() {
          counter.setCounts(counts);
          counts = {};
        }
      );
  return duplex(readable, counter);
}
