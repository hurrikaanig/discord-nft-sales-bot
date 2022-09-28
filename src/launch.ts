import nftSalesBot from "./index";
const dotenv = require("dotenv")

dotenv.config()

nftSalesBot({
    websocketURI: "wss://api.avax.network/ext/bc/C/ws",
    contractAddress: "0xf1B5317b459f53F596457Ad0A3ae8054b60ab93f",
    discordBotToken: process.env.BOT_TOKEN as string,
    discordChannelId: process.env.CHANNEL_ID as string,

})