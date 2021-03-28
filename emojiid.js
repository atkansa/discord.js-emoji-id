   try {
        message.channel.send(`Sunucuda Bulunan Emojiler (${message.guild.emojis.cache.size} adet) \n\n${message.guild.emojis.cache.map(emoji => emoji.id + " | " + emoji.toString()).join('\n')}`, {code: 'xl', split: true})
      } catch (err) { };
      return
