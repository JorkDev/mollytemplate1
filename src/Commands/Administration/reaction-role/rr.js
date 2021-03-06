const Command = require("../../../Build/Command.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const {
  Client,
  Message,
  MessageEmbed,
  Util,
  ReactionEmoji,

} = require("discord.js");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "rr",
      aliases: ["rr"],
      category: "Administration",
      userPerms: ["MANAGE_GUILD"],
    });
  }

  async run(message, args) {
    const embed = new MessageEmbed()
      .setTitle("Reaction Role")
      .setColor("GREEN")
      .setDescription("Click on the button below to get the 'x' role");

    const add = new MessageButton()
      .setStyle("green")
      .setLabel("Add")
      .setID("AddXRole");

    const remove = new MessageButton()
      .setStyle("grey")
      .setLabel("remove")
      .setID("RevXRole");

    const row = new MessageActionRow().addComponent([add, remove]);

    message.channel.send({ component: row, embed: embed });
  }
};
