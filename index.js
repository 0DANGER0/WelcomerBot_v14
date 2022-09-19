const { token, Welcome_Channel_ID, Welcome_Text, Welcome_Embed_Color } = require('./config.json')
const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require('discord.js');
const BOT = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    partials: [Partials.Message, Partials.Channel, , Partials.Reaction, Partials.GuildMember]
})


BOT.on("ready", () => {
    console.log(`\x1b[47m\x1b[30m(${BOT.user.tag} Running !\x1b[0m`)
    console.log(`\x1b[36mCreated By \x1b[31mDANGER#1516\x1b[0m`)
    console.log(`\x1b[36mJoin Discord : \x1b[33mhttps://discord.gg/5A7ZbMvmZM\x1b[0m`)
})


BOT.on('guildMemberAdd', (guildmember) => {
    const Embed = new EmbedBuilder()
    Embed.setColor(Welcome_Embed_Color)
    Embed.setAuthor({ name: 'Welcomer Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://github.com/0DANGER0' })
    Embed.setTitle('Welcome To Server')
    Embed.setDescription(`${guildmember}, ${Welcome_Text}`)
    Embed.setThumbnail(guildmember.user.displayAvatarURL({ size: 1024 }))
    Embed.setFooter({ text: 'Created By DANGER#1516' });
    Embed.setTimestamp()

    const Channel = guildmember.guild.channels.cache.get(Welcome_Channel_ID)
    Channel.send({ content: `${guildmember}`, embeds: [Embed] })
})


BOT.login(token)