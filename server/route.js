const express = require('express');
const tmi = require('tmi.js');
const route = express.Router();

require('dotenv').config();

const twitchClient = new tmi.Client({
    options: {
        debug: true,
    },
    connection: {
        reconnect: true,
        secure: true,
    },
    channels: [process.env.TWITCH_CHANNEL],
});

twitchClient.on('chat', (channel, user, message, self) => {
	if(self) return;
	
	//console.info(user['display-name'], message);

	// command
	if (message.startsWith("!")) {
		const [command, param1, param2, param3] = message.split(" ").filter((i) => i !== "");
		
		return;
	}
	// check bad words
	// ToDo: check for bad words

});

twitchClient.connect();

module.exports = route;