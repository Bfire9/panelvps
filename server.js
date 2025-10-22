const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir le frontend
app.use(express.static('vps-panel'));

// Démarrer le serveur
const server = app.listen(PORT, () => console.log(`Panel running on port ${PORT}`));

// Configurer PeerJS
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});
app.use('/peerjs', peerServer);
