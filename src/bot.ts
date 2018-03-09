import * as DiscordJS from 'discord.js'
const config = require('../config/config.json')

const bot = new DiscordJS.Client

let chance: number = config.chance

bot.on('message', msg => {
  if (!msg.author.bot) {
    if (msg.author.id === config.owner) {
      if (msg.content.includes('!setChance ')) {
        const parsedChance = msg.content.split(' ').pop()
        chance = Number.parseFloat(parsedChance)

        msg.reply('Chance set to ' + chance.toString())
      }
    }

    if (Math.random() <= chance) {
      msg.channel.send('u r a ' + msg.content.split(' ').pop().toLowerCase())
      console.log(`[TRIGGERED] ${msg.guild.name} > ${msg.channel.id} > by ${msg.author.username}`)
    }
  }
})

bot.login(config.token)