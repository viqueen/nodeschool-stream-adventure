/**
 * secretz.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var crypto  = require('crypto');
var zlib    = require('zlib');
var tar     = require('tar');
var through = require('through');
var util    = require('util');

var cipher = process.argv[2];
var passphrase = process.argv[3];

var tarParser = tar.Parse();
tarParser.on(
    'entry',
    function (entry) {
      if (entry.type == 'File') {
        var name = entry.path;
        entry
          .pipe(crypto.createHash('md5'))
          .pipe(
            through(
              function (hash) { 
                console.log(util.format('%s %s', hash.toString('hex'), name)); 
              }
            )
          );
      }
    }
  );

process.stdin
  .pipe(crypto.createDecipher(cipher, passphrase))
  .pipe(zlib.createGunzip())
  .pipe(tarParser);
