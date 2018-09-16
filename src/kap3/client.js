'use strict';
const netClient = require('net').connect({port: 60300, host: "test-server"});
const ldjClient = require('./lib.js').connect(netClient);

ldjClient.on('message', message => {
    console.log(`Data received: ${message}`);
    if (message.type === 'watching') {
        console.log(`Now watching: ${message.file}`);
    } else if (message.type === 'changed') {
        const date = new Date(message.timestamp);
        console.log(`File changed ${date}`);
    } else {
        console.log(`Unrecognized message type ${message.type}`);
    }
});