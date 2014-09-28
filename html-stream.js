/**
 * html-stream.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
var loudClass = tr.select('.loud').createStream();
loudClass
  .pipe(
    through (
      function upperCase(buffer) {
        this.queue(buffer.toString().toUpperCase());
      }, 
      function end() {
        this.queue(null);
      }
    )
   )
  .pipe(loudClass);

process.stdin.pipe(tr).pipe(process.stdout);
