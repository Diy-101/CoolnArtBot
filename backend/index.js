const TelegramBot = require('node-telegram-bot-api');

const token = '7944476088:AAGWibVSB31iq7iG01L3UcDGXP3g3rornP4'

const bot = new TelegramBot(token, { polling: true });
const webAppUrl = "https://ya.ru"

const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Начальное приветствие!' },
        { command: '/info', description: 'Информация о методах' },
    ])
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;

        try {
            const bot_info = await bot.getMe();
            console.log(bot_info)
        } catch (error) {
            console.error("Ошибка", error)
        }

        if (msg.text === '/info') {
            return bot.sendMessage(chatId, 'Привет, вы попали в ловушку!');
        }

        let text = msg.text
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://cdn2.combot.org/pack_1_17179869189_1414669945_by_sticker_bot/webp/25xf09f9388.webp', {
                reply_markup: {
                    keyboard: [
                        [{ text: 'Заполни форму ниэе', web_app: { url: webAppUrl } }]
                    ]
                }
            })
            return bot.sendMessage(chatId, 'Привет, вы попали в ловушку!');
        }
    }
    )
}

start()