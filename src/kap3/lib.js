'use strict';
const EventEmitter = require('events').EventEmitter;

class LDJClient extends EventEmitter {

    constructor(stream) {
        super();

        let buffer = '';
        stream.on('data', data => {
            console.log(`Data received: ${data}`);
            buffer += data;
            let boundary = buffer.indexOf('\n');
            console.log(`Buffer: ${buffer} and boundary: ${boundary}`);
            while (boundary !== -1) {
                const input = buffer.substring(0, boundary);
                buffer = buffer.substring(boundary + 1);
                this.emit('message', JSON.parse(input));
                boundary = buffer.indexOf('\n');
            }
        });
    }


    static connect(stream) {
        return new LDJClient(stream);
    }

}

module.exports = LDJClient;