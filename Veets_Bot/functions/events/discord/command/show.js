const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.2'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: ' ',
  tts: false,
  embed: {
    title: 'These are the commands' /** you can change the embed title here **/,
    description: [
      `\`/suicide\`: Get help if you are feeling suicidal`,
      `\`/s_a\`: Get help if you have been sexualy assaulted`,
      `\`/cookies\`: Get help if you are experiencing domestic violence`,
      `\`/child_abuse\`: Get help if you are experiencing child abuse`,
      `\`/substance\`: Get help if you are addicited to using substances`
    ].join('\n'),
    color: 0x00aaaa /** you can change the embed color here **/,
  },
});
