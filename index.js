const { Client, GatewayIntentBits } = require("discord.js");

const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error("ERRO: a variável de ambiente DISCORD_TOKEN não foi configurada.");
    process.exit(1);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content.trim() === "!oi") {
        message.reply("Oi!");
    }
});

client.login(token).catch((error) => {
    console.error("Não foi possível conectar ao Discord:", error.message);
    process.exit(1);
});
