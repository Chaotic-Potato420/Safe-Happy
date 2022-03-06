// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.channel_id == 949721753972801566){
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `You are loved and I'm glad you're here. Please call (800) 273-8255 for help.`
  });
}