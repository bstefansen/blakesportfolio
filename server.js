const express = require('express')
const server = express()

/* route requests for static files to appropriate directory */
server.use('/public', express.static(__dirname + '/static-files-dir'))


/* final catch-all route to index.html defined last */
server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})