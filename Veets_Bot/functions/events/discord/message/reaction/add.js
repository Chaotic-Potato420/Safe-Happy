// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.channel_id == 949547159806672909){
  if (context.params.event.emoji.name == '🦔'){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949555978037248031`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if(context.params.event.emoji.name == '🐌'){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949556100909391892`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if(context.params.event.emoji.name == '🦦'){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949556201446846484`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if (context.params.event.emoji.name == "🦥") {
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949556339791790141`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if (context.params.event.emoji.name == "🐇"){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949556440337633281`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if(context.params.event.emoji.name == '🐟'){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949557005947899934`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
}
//for the activities channel
if (context.params.event.channel_id == 949759660322353222){
  if (context.params.event.emoji.name == "🐶"){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949762331859091517`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if (context.params.event.emoji.name == "🦐"){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949762410573598780`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if(context.params.event.emoji.name == "🐉"){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949762486578589816`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
  if(context.params.event.emoji.name == '🌈'){
    await lib.discord.guilds['@0.2.3'].members.roles.update({
      role_id: `949849077921747044`,
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
}