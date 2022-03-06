// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.channel_id == 949759660322353222){
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: 'Welcome to Activities!! Here you can choose what channel you would like to engage in. React with an emoji to open the channel. 🐶 for the Support channel, 🦐 for the Vent channel, 🐉 for the Make a Friend channel, and 🌈 for the LGBTQIA+ Support channel. '
  });
}