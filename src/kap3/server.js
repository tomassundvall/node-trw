'use strict';
const fs = require( 'fs' );
const net = require( 'net' );

const filename = process.argv[2];
if (!filename) {
    throw new Error(`ERROR: No filename specified.`);
}

const server = net.createServer(connection => {
    // Reporting
    console.log('Subscriber connected.');
    connection.write(JSON.stringify({ type: 'watching', file: filename }));

    // Watcher setup
    const watcher = fs.watch(filename, () => {
        connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n');
    });

    // Cleanup
    connection.on('close', () => {
        console.log('Subscriber disconnected.');
        watcher.close();
    });
});

server.listen(60300, () => console.log('Listening for subscribers...'));