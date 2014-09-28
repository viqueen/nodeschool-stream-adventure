/**
 * crypt.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var crypto = require('crypto');

var stream = crypto.createDecipher('aes256', process.argv[2]);
process.stdin.pipe(stream).pipe(process.stdout);
