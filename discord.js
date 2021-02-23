const Discord = require('discord.js');
const MessageAttachment = require('discord.js');
const receivedMessage = require('discord.js');
const emojis = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('conneted as', client.user.tag);

    client.user.setActivity("Youtube", {type: "WATCHING"});

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} - ${channel.type} - ${channel.id}`);
        });
        //813192939164925986
    });

    let genralChannel = client.channels.cache.get("813192939164925986");
    const attachment = new Discord.MessageAttachment("https://cdn.discordapp.com/icons/812781856478724136/d48b1ac8ed3d27f8df40965a76e2f3c8.png?size=128");
    genralChannel.send(attachment);
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    //receivedMessage.channel.send("Message Received, " + receivedMessage.author.toString() + ": " + receivedMessage.content);

    //receivedMessage.react("👍");
    //let customEmoji = receivedMessage.guild.emojis.cache.get("813229086008541245");
    //receivedMessage.react(customEmoji);

    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage);
    }

});

function processCommand(receivedMessage) {
    let fullComand = receivedMessage.content.substr(1);
    let splitCommand = fullComand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if (primaryCommand == "meme") {
        MemeCommand(arguments, receivedMessage);
    }
}

function MemeCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("Ok...");
        let genralChannel = client.channels.cache.get("813192939164925986");
        const attachment = new Discord.MessageAttachment("https://cdn.discordapp.com/icons/812781856478724136/d48b1ac8ed3d27f8df40965a76e2f3c8.png?size=128");
        genralChannel.send(attachment);
}

client.login("ODEzMTkzMzI5MzEwNTY0NDIx.YDLvTg.8j-TNoSs9HbRJDxolflTTC7ao50");
