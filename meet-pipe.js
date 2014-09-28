/**
 * meet-pipe.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var fs  = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);
