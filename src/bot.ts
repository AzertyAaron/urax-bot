import * as DiscordJS from 'discord.js'
const config = require('../config/config.json')

const bot = new DiscordJS.Client

bot.on('message', msg => {
  if (msg.author.bot) {
    if (Math.random() <= 0.1) {
      msg.channel.send('u r a ' + msg.content.split(' ').pop())
    }
  }
})

bot.login(config.token)