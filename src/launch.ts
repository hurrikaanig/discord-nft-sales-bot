import nftSalesBot from "./index";

nftSalesBot({
    websocketURI: "wss://api.avax.network/ext/bc/C/ws",
    contractAddress: "0xf1B5317b459f53F596457Ad0A3ae8054b60ab93f",
    discordBotToken: "MTAyNDMyMzQxNjQzOTkzNTA1Nw.Gqhx3M.Atg07MqQI6MMkUkhK6IWw7syU56XXntW13xosE",
    discordChannelId: "1009742683679490048",

})