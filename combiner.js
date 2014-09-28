/**
 * combiner.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */

var combine = require('stream-combiner');
var split   = require('split');
var through = require('through');
var zlib    = require('zlib');

var current = undefined;
var old = undefined;

var grouping = function (record) {
  if (record['type'] == 'genre') {
    old = current;
    current = {
      name : record['name'],
      books : []
    };
    return old;   
  }
  else if (record['type'] == 'book'){
    current['books'].push(record['name']);
  }
}

var group_by_genre = through(
      function selectGenre(json) {
        var record = grouping(json);
        if (record) {
          this.queue(JSON.stringify(record));
          this.queue('\n');
        }
      },
      function end() {
        this.queue(JSON.stringify(grouping({ type : 'genre', name : undefined })));
        this.queue('\n');
        this.queue(null);
      }
    );

module.exports = function () {
  return combine(
      split(),
      through(
        function (data) {
          if (data.length > 0) {
            this.queue(JSON.parse(data));
          }
        }),
      group_by_genre,
      zlib.createGzip()
    );
}
