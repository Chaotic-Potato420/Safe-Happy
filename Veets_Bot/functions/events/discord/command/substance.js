// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.channel_id == 949721753972801566){
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `I'm glad you want help. Please call (800) 662-4357 for help.`
  });
}