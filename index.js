const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';

/*/
const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
/*/
const imagebubble = ['https://media.discordapp.net/attachments/1064994470124331109/1077797728295342120/3028CFC1-3CF8-4847-8F09-8CB76C4C0A56.gif',
    'https://media.discordapp.net/attachments/774808254546313221/1012815198190571520/74D2FBD7-D16B-42E3-8AE3-E995842F419D.gif',
    'https://media.discordapp.net/attachments/911044292892565545/1018303057295065138/IMG_7030.gif',
    'https://media.discordapp.net/attachments/1050141588472475749/1060284386085445642/IMG_4499.gif',
    'https://media.discordapp.net/attachments/969254827907514419/1048309453675561030/catmaid.gif',
    'https://media.discordapp.net/attachments/935989994735169546/1054034518358626416/attachment-1.png.gif',
    'https://tenor.com/view/speech-bubble-chicken-gif-26197609',
    'https://media.discordapp.net/attachments/812393660485992466/992229657502036029/ahahahhahahah.gif',
    'https://tenor.com/view/nerding-speech-bubble-pepe-nerd-gif-26077806',
    'https://media.discordapp.net/attachments/960641157359083581/988795491586281502/E388238C-6083-4BC7-8D5A-0FD1FB8B7A4F.gif',
    'https://media.discordapp.net/attachments/995066549255819407/995067640055869590/attachment.gif',
    'https://media.discordapp.net/attachments/1029484316469755904/1029486287595507853/bog_honor_ojczyzna.gif',]

const imagereact = ['https://tenor.com/view/honest-reaction-my-honest-reaction-groovy-server-groovy-npc-smol-groovy-gif-24853010',
    'https://tenor.com/view/my-honest-reaction-my-honest-reaction-my-honest-reaction-meme-gif-25909810',
    'https://tenor.com/view/kumala-la-kumala-mrtti-gif-25688572',
    'https://tenor.com/view/indian-my-reaction-to-that-information-gif-25662492',
];
const keywordList = ['woman', 'niggas', 'nigger', 'nigga', 'chad', 'kids', 'penis', 'gigachad', 'lilgirls', 'lilboys'];
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    //commands without prifix

    const content = message.content.toLowerCase();
    const containsKeyword = keywordList.some(keyword => content.includes(keyword.toLowerCase()));
    if (containsKeyword) {
        message.channel.send('https://cdn.discordapp.com/attachments/1009878025971712065/1083128017515184260/IMG_1067.png');
    }
    //commands with prifix
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    /*/if (command === 'hello') {
            message.channel.send(':wave:');}
    /*/
    if(client.commands.get(command)){
        client.commands.get(command).execute(message,args);
    }
    const randomIndex = Math.floor(Math.random() * imagereact.length);
    const randomImage = imagereact[randomIndex];
    if (command === 'myreact') {
        message.channel.send(randomImage);
    }
    const randomImage2 = imagebubble[randomIndex];
    if (command === 'speechb')
        message.channel.send(randomImage2)
    if (command === 'help') {
        message.channel.send('commands: ;hello waves back ;myreact sends my reaction picture ;speechb bubble reaction');
    }

});

client.login('MTA4MzQ4Njg3NTUzODQ0NDQzOQ.Gja_kq.A5KwbRvbYF8uTzCp5d2ASutd7nPlR3-DXHrbm4');
