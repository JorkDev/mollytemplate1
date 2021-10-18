const Command = require('../Build/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['test'],
			disabled: true
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('This is a test!');
	}
};
