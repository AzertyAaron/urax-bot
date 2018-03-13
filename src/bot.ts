import { Client } from 'discord.js'
const config = require('../config/config.json')

const bot = new Client

let chance: number = config.chance

bot.on('message', message => {
  if (!message.author.bot) {
    if (message.author.id === config.owner) {
      if (message.content.startsWith('!setChance ')) {
        const parsedChance = message.content.split(' ').pop()
        chance = Number.parseFloat(parsedChance)

        message.reply('Chance set to ' + chance.toString())
        bot.user.setPresence({ game: { name: `Chance set to ${chance}` } })
      }
    }

    if (Math.random() <= chance) {
      message.channel.send('u r a ' + message.content.split(' ').pop().toLowerCase())
      console.log(`[TRIGGERED] ${message.guild.name} > ${message.channel.id} > by ${message.author.username}`)
    }
  }
})

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: `Chance set to ${chance}` } })
})

bot.login(config.token)