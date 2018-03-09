import * as DiscordJS from 'discord.js'
const config = require('../config/conifg')

const bot = new DiscordJS.Client

bot.on('message', msg => {

})

bot.login(config.token)