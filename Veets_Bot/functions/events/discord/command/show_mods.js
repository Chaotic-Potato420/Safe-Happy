const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.channel_id == 949744636040183839){
  await lib.discord.channels['@0.1.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ' ',
    tts: false,
    embed: {
      title: 'These are the commands' /** you can change the embed title here **/,
      description: [
        `\`!warn\`: Warn a user about a word, phrase, or action that was unacceptable`,
        `\`/welcome\`: Create the welcome message`,
        `\`/acticities\`: Show the activities message`
      ].join('\n'),
      color: 0x00aaaa /** you can change the embed color here **/,
    },
  });
  2
}