// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.channel_id == 949547159806672909){
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `Welcome to Safe Happy!! I would love to learn more about you!! What are your preferred pronouns? React with 🦔 for "She/Her", 🐌 for "He/Him", 🦦 for "She/They", 🦥 for "He/They, 🐇 for "They/Them", 🐟 for "Just my Name"`
  });
}