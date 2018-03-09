import * as DiscordJS from 'discord.js'
const config = require('../config/conifg')

const bot = new DiscordJS.Client

bot.on('message', msg => {
  if (Math.random() >= 0.1) {
    msg.channel.send('u r a ' + msg.content.split(' ').pop())
  }
})

bot.login(config.token)