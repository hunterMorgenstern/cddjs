export default [
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. Red meat is bad for our health and we should eat less of it.\n2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.\n3. Cutting out red meat could potentially have a negative impact on the economy.",
      "pro/con/undecided":
        "1. Red meat is bad for our health and we should eat less of it.",
      reason:
        "2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.",
      order: "1",
      author: "Francis",
      time: "35:17:00-35:47:00",
      text: " i mean we could all probably use with less red meat and our diets, but i think just telling the people that they need to cut it out as really going to do much as far as regulating it at like a farm level, that could potentially be done. but how is that going to impact the economy? there's a lot of questions involved. but, yeah, i'm down for cutting out. a few hamburgers every now and again.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  i mean we could all probably use with less red meat and our diets, but i think just telling the people that they need to cut it out as really going to do much as far as regulating it at like a farm level, that could potentially be done. but how is that going to impact the economy? there's a lot of questions involved. but, yeah, i'm down for cutting out. a few hamburgers every now and again.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. Red meat is bad for our health and we should eat less of it.\\n2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.\\n3. Cutting out red meat could potentially have a negative impact on the economy.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. A\n2. C\n3. B",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The speaker does not support the second proposal for an educational campaign to cut out meat.\n2. The speaker believes that the American public will interpret the campaign as a ban on meat consumption.\n3. The speaker argues that farmers are already regulated on methane emissions.\n4. The speaker believes that the government does not need to help farmers on these issues.",
      "pro/con/undecided":
        "1. The speaker does not support the second proposal for an educational campaign to cut out meat.",
      reason:
        "2. The speaker believes that the American public will interpret the campaign as a ban on meat consumption.",
      order: "2",
      author: "Laura",
      time: "35:47:00-36:32:00",
      text: " i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can't ever eat meat at all. so that's not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i'm not super familiar, but we're very on top of these issues in farming. so don't need the government to help.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can't ever eat meat at all. so that's not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i'm not super familiar, but we're very on top of these issues in farming. so don't need the government to help.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The speaker does not support the second proposal for an educational campaign to cut out meat.\\n2. The speaker believes that the American public will interpret the campaign as a ban on meat consumption.\\n3. The speaker argues that farmers are already regulated on methane emissions.\\n4. The speaker believes that the government does not need to help farmers on these issues.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. Con\n2. Con\n3. Pro\n4. Con",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The speaker does not want to give up beef because it would put farmers out of work.\n2. The speaker believes that there is a way to solve the problem without giving up beef.\n3. The speaker is from the United States and does not want to stop eating beef.",
      "pro/con/undecided":
        "1. The speaker does not want to give up beef because it would put farmers out of work.",
      reason:
        "2. The speaker believes that there is a way to solve the problem without giving up beef.",
      order: "3",
      author: "Wendi",
      time: "36:32:00-36:59:00",
      text: " yeah, i'm not willing to give up beef at for to put farmers out of work. something should probably be done, but there's a way other than giving up beef. it's yeah, i live in the united states. don't don't start telling me not to eat beef. it's that would just make me pretty unhappy.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  yeah, i'm not willing to give up beef at for to put farmers out of work. something should probably be done, but there's a way other than giving up beef. it's yeah, i live in the united states. don't don't start telling me not to eat beef. it's that would just make me pretty unhappy.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The speaker does not want to give up beef because it would put farmers out of work.\\n2. The speaker believes that there is a way to solve the problem without giving up beef.\\n3. The speaker is from the United States and does not want to stop eating beef.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. Con\n2. Pro\n3. Con",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The idea of coming up with a rule based on some percentages does not make sense.\n2. Community should be able to decide together on how to manage farms.\n3. There is not enough data to convince the speaker that cows are the problem with global warming.",
      "pro/con/undecided":
        "1. The idea of coming up with a rule based on some percentages does not make sense.",
      reason:
        "2. Community should be able to decide together on how to manage farms.",
      order: "4",
      author: "Charles",
      time: "36:59:00-37:42:00",
      text: " yeah, i guess i just don't understand the idea of coming up with a rule based on some percentages. i think if you're going to have this kind of regulation and it gets better done at the local level where, you know, community can decide together on how they want to manage how big a farm is, and how many livestock there are, and there's just not enough data in this. this slide here to to convince me that, you know, cows are our problem with global warming. i gotta imagine the sun is doing a lot more control on global warming than cows.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  yeah, i guess i just don't understand the idea of coming up with a rule based on some percentages. i think if you're going to have this kind of regulation and it gets better done at the local level where, you know, community can decide together on how they want to manage how big a farm is, and how many livestock there are, and there's just not enough data in this. this slide here to to convince me that, you know, cows are our problem with global warming. i gotta imagine the sun is doing a lot more control on global warming than cows.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The idea of coming up with a rule based on some percentages does not make sense.\\n2. Community should be able to decide together on how to manage farms.\\n3. There is not enough data to convince the speaker that cows are the problem with global warming.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\nA) pro\nB) con\nC) not applicable",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The speaker believes that regulating large farms would be beneficial because they produce a lot of methane gas.\n2. The speaker argues that food waste from large farms is a problem because it contributes to pollution.",
      "pro/con/undecided":
        "1. The speaker believes that regulating large farms would be beneficial because they produce a lot of methane gas.",
      reason:
        "2. The speaker argues that food waste from large farms is a problem because it contributes to pollution.",
      order: "5",
      author: "Amanda",
      time: "37:42:00-38:27:00",
      text: " i don't know. i feel like regulating because i like how they were at that its large farms. not your, you know, i mean, i'm assuming if you're only talking about, you know, three hundred head of cattle. that's not what i think about. when i think of like the big mass producing on farms that would cause as much issues as that, i mean, because we have a small homestead and we have, you know, tons of little animals that i'm sure. methane gases. but i mean that also comes into food waste, how much of that mass amount of food that we're making from the beef is getting wasted but still polluting.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  i don't know. i feel like regulating because i like how they were at that its large farms. not your, you know, i mean, i'm assuming if you're only talking about, you know, three hundred head of cattle. that's not what i think about. when i think of like the big mass producing on farms that would cause as much issues as that, i mean, because we have a small homestead and we have, you know, tons of little animals that i'm sure. methane gases. but i mean that also comes into food waste, how much of that mass amount of food that we're making from the beef is getting wasted but still polluting.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The speaker believes that regulating large farms would be beneficial because they produce a lot of methane gas.\\n2. The speaker argues that food waste from large farms is a problem because it contributes to pollution.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n3. The speaker suggests that the government should provide incentives for farmers to reduce methane emissions.\n\n1. A\n2. C\n3. B",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The cost of methane should be borne by the people who produce it, rather than by the planet or future generations.\n2. Beef should be more expensive so that people will eat less of it.\n3. Government regulation is necessary to put a price on methane.",
      "pro/con/undecided":
        "1. The cost of methane should be borne by the people who produce it, rather than by the planet or future generations.",
      reason:
        "2. Beef should be more expensive so that people will eat less of it.",
      order: "6",
      author: "Adam M",
      time: "38:27:00-39:03:00",
      text: " i think we just need to make people pay for the externalities. so, you know, there's a cost to everything. there's a cost to the beef right now. you just pay the farmer for the be for, you know, the supermarket, etc. etc. but that methane the cost of that methane is being paid by the planet and future generations. we just need to make beef more expensive so that you know, people will eat less and you know, in the cap-and-trade thing where it's the the dollar, the methane, dollar amount is being translated. i don't exactly sure how that works, but i think a markets market. but it'll take a governor. it'll take some sort of government regulation to put that price but that methane the price of methane on top of it. and i know i love beef and i don't want to pay more for beef, but",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  i think we just need to make people pay for the externalities. so, you know, there's a cost to everything. there's a cost to the beef right now. you just pay the farmer for the be for, you know, the supermarket, etc. etc. but that methane the cost of that methane is being paid by the planet and future generations. we just need to make beef more expensive so that you know, people will eat less and you know, in the cap-and-trade thing where it's the the dollar, the methane, dollar amount is being translated. i don't exactly sure how that works, but i think a markets market. but it'll take a governor. it'll take some sort of government regulation to put that price but that methane the price of methane on top of it. and i know i love beef and i don't want to pay more for beef, but\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The cost of methane should be borne by the people who produce it, rather than by the planet or future generations.\\n2. Beef should be more expensive so that people will eat less of it.\\n3. Government regulation is necessary to put a price on methane.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n4. The US should not launch an educational campaign to encourage people to reduce their meat and dairy consumption.\n\n1. Con\n2. Pro\n3. Pro\n4. Con",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The speaker believes that the market should shift towards more chicken and less beef.\n2. The speaker believes that this shift will happen naturally, without intervention.",
      "pro/con/undecided":
        "1. The speaker believes that the market should shift towards more chicken and less beef.",
      reason:
        "2. The speaker believes that this shift will happen naturally, without intervention.",
      order: "7",
      author: "Laura",
      time: "39:03:00-39:23:00",
      text: " we should let them mark 8. yeah, let the market shift towards more chicken less beef. exactly.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  we should let them mark 8. yeah, let the market shift towards more chicken less beef. exactly.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The speaker believes that the market should shift towards more chicken and less beef.\\n2. The speaker believes that this shift will happen naturally, without intervention.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n3. The speaker believes that the government should not intervene in the market.\n\n1. B\n2. C\n3. C",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. Introducing methane standards to large facilities and corporations would help reduce methane emissions.\n2. However, the speaker does not want these standards to be so strict that they harm businesses or discourage people from eating meat.\n3. Instead, the speaker suggests taxing people to discourage them from consuming methane-producing products.",
      "pro/con/undecided":
        "1. Introducing methane standards to large facilities and corporations would help reduce methane emissions.",
      reason:
        "2. However, the speaker does not want these standards to be so strict that they harm businesses or discourage people from eating meat.",
      order: "8",
      author: "Nestor Flores",
      time: "39:23:00-39:58:00",
      text: " yeah, i support introducing methane. standards to these large facilities and corporations. but as for the forms themselves, like i don't want to like harm with these with a regulation. i don't want to stop eating meat, but, you know, i agree what he said about taxing people, introducing to the market higher cost to discourage me consumed. just like lower it.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  yeah, i support introducing methane. standards to these large facilities and corporations. but as for the forms themselves, like i don't want to like harm with these with a regulation. i don't want to stop eating meat, but, you know, i agree what he said about taxing people, introducing to the market higher cost to discourage me consumed. just like lower it.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. Introducing methane standards to large facilities and corporations would help reduce methane emissions.\\n2. However, the speaker does not want these standards to be so strict that they harm businesses or discourage people from eating meat.\\n3. Instead, the speaker suggests taxing people to discourage them from consuming methane-producing products.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. A\n2. B\n3. C",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The economic choice to be vegetarian is an interesting one.\n2. Cows produce a lot of methane, which is a terrible greenhouse gas.\n3. We have to be careful of our methane production because it contributes to climate change.\n4. It's a hard choice to make, but we need to look at alternatives.",
      "pro/con/undecided":
        "1. The economic choice to be vegetarian is an interesting one.",
      reason:
        "2. Cows produce a lot of methane, which is a terrible greenhouse gas.",
      order: "9",
      author: "steviek6",
      time: "39:58:00-40:43:00",
      text: " well, i think it's interesting because we have an economic choice here. so i basically vegetarian even though i have meat sometimes because my wife is a mediator. so i need a lot of veggie burgers and things like that. as far as the methane from the cows. i mean, you know, it's science. i mean, they definitely producing a lot of methane. we have to be careful of that because it's a terrible greenhouse gas. and the question is how quickly do we have to get off of diet based upon? so sure everybody that can have a little bit of me, but we have to reduce our desire for it or we have to kind of take options to look at alternatives. you know, it's a really hard choice. i live in colorado. so there's a lot of kind of ride around my back.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  well, i think it's interesting because we have an economic choice here. so i basically vegetarian even though i have meat sometimes because my wife is a mediator. so i need a lot of veggie burgers and things like that. as far as the methane from the cows. i mean, you know, it's science. i mean, they definitely producing a lot of methane. we have to be careful of that because it's a terrible greenhouse gas. and the question is how quickly do we have to get off of diet based upon? so sure everybody that can have a little bit of me, but we have to reduce our desire for it or we have to kind of take options to look at alternatives. you know, it's a really hard choice. i live in colorado. so there's a lot of kind of ride around my back.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The economic choice to be vegetarian is an interesting one.\\n2. Cows produce a lot of methane, which is a terrible greenhouse gas.\\n3. We have to be careful of our methane production because it contributes to climate change.\\n4. It\'s a hard choice to make, but we need to look at alternatives.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. C\n2. A\n3. A\n4. B",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. We need to be careful with placing regulations on things like that.\n2. It can be a slippery slope.\n3. Weighing the pros and cons of regulations against people's choices in the economy.",
      "pro/con/undecided":
        "1. We need to be careful with placing regulations on things like that.",
      reason: "2. It can be a slippery slope.",
      order: "10",
      author: "Angie Walker",
      time: "40:43:00-41:11:00",
      text: " i think we just need to be careful with placing regulations on things like that. i think it can be a slippery slope and just you know, weighing those pros and cons again to you know, people are choices in the economy as well, you know, as the environment.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  i think we just need to be careful with placing regulations on things like that. i think it can be a slippery slope and just you know, weighing those pros and cons again to you know, people are choices in the economy as well, you know, as the environment.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. We need to be careful with placing regulations on things like that.\\n2. It can be a slippery slope.\\n3. Weighing the pros and cons of regulations against people\'s choices in the economy.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\nA) con\nB) con\nC) not applicable",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The government needs to set standards or else nothing will change.\n2. There needs to be a way to contain and use methane from dairy farms.",
      "pro/con/undecided":
        "1. The government needs to set standards or else nothing will change.",
      reason:
        "2. There needs to be a way to contain and use methane from dairy farms.",
      order: "11",
      author: "Richie",
      time: "33:26:00-34:10:00",
      text: " well, i think that if the government doesn't put a standard or some limits on stuff for the start of it, i don't think anybody's going to move anywhere. there's nobody moves anywhere without they sent them, shall we say? and then the other thing with dairy farms, is there a way to recoup the efta product, if you will of these animals that you know, if you had him in a big barn or you had them somewhere that they could pick contain the methane and then burn it. if that works. i don't know. i'm not a dairy farmer seen pictures of cows. coming from new york city, but that's about it.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  well, i think that if the government doesn't put a standard or some limits on stuff for the start of it, i don't think anybody's going to move anywhere. there's nobody moves anywhere without they sent them, shall we say? and then the other thing with dairy farms, is there a way to recoup the efta product, if you will of these animals that you know, if you had him in a big barn or you had them somewhere that they could pick contain the methane and then burn it. if that works. i don't know. i'm not a dairy farmer seen pictures of cows. coming from new york city, but that's about it.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The government needs to set standards or else nothing will change.\\n2. There needs to be a way to contain and use methane from dairy farms.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n3. The US should not be the only country to take this action.\n4. Reducing meat and dairy consumption will improve people's health.\n\n1. Con\n2. Pro\n3. Con\n4. Pro",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The big farms in the area reuse manure to fertilize fields.\n2. The sewer plant burns methane, which could be used for heating.\n3. People are not thinking about easy solutions to energy waste.",
      "pro/con/undecided":
        "1. The big farms in the area reuse manure to fertilize fields.",
      reason:
        "2. The sewer plant burns methane, which could be used for heating.",
      order: "12",
      author: "Jim",
      time: "34:10:00-34:53:00",
      text: " i'm definitely in the big farming, agricultural, dairy area and they all reuse that to fertilizer fields, you know, the big manure pits at they're circulating that in and drying it and spreading it then and later years and that's amish farms, you know, this area. they're all doing that. but one thing i see you've met the sewer plant. they're burning a methane torch just out next to the plan, just going up in flames, which can when you're talking about earlier heating, the steam moving again. later that he could definitely be used for something that would be cost effective. so i just see a lot of people aren't even thinking about some of those things and easy solutions. try using the energy. it's being wasted.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  i'm definitely in the big farming, agricultural, dairy area and they all reuse that to fertilizer fields, you know, the big manure pits at they're circulating that in and drying it and spreading it then and later years and that's amish farms, you know, this area. they're all doing that. but one thing i see you've met the sewer plant. they're burning a methane torch just out next to the plan, just going up in flames, which can when you're talking about earlier heating, the steam moving again. later that he could definitely be used for something that would be cost effective. so i just see a lot of people aren't even thinking about some of those things and easy solutions. try using the energy. it's being wasted.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The big farms in the area reuse manure to fertilize fields.\\n2. The sewer plant burns methane, which could be used for heating.\\n3. People are not thinking about easy solutions to energy waste.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. C\n2. C\n3. B",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. Education campaigns to promote a more vegetarian lifestyle are necessary.\n2. People don't need to give up meat completely, but should eat less of it.\n3. The health benefits of eating vegetables are well-known.\n4. The treatment of animals is another reason to eat less meat.",
      "pro/con/undecided":
        "1. Education campaigns to promote a more vegetarian lifestyle are necessary.",
      reason:
        "2. People don't need to give up meat completely, but should eat less of it.",
      order: "13",
      author: "Caitlin",
      time: "34:53:00-35:31:00",
      text: " the video has mentioned to, you know, at some point education campaigns to promote a more vegetarian lifestyle. if you will, i'm in favor of that very much. so i don't think people have to give up meat completely, but i think the us we are huge beef eaters and i think we all know that they're, you know, the health benefits of eating vegetables and not to mention the treatment of animals. i'm, i'm very much in favor of having that to be one of the small things that we can do to make a bigger difference. is educating. our community is about, you know, meat-free mondays or trying to do a bit better than that.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  the video has mentioned to, you know, at some point education campaigns to promote a more vegetarian lifestyle. if you will, i'm in favor of that very much. so i don't think people have to give up meat completely, but i think the us we are huge beef eaters and i think we all know that they're, you know, the health benefits of eating vegetables and not to mention the treatment of animals. i'm, i'm very much in favor of having that to be one of the small things that we can do to make a bigger difference. is educating. our community is about, you know, meat-free mondays or trying to do a bit better than that.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. Education campaigns to promote a more vegetarian lifestyle are necessary.\\n2. People don\'t need to give up meat completely, but should eat less of it.\\n3. The health benefits of eating vegetables are well-known.\\n4. The treatment of animals is another reason to eat less meat.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. A\n2. A\n3. C\n4. C",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. It is difficult for people to change their lifestyles.\n2. It is difficult for people to change their diets.\n3. It is difficult for people to change their eating habits.",
      "pro/con/undecided":
        "1. It is difficult for people to change their lifestyles.",
      reason: "2. It is difficult for people to change their diets.",
      order: "14",
      author: "Keith",
      time: "35:31:00-36:15:00",
      text: " yeah, and the us here, we're creatures of habit to just think about changing our lifestyle, the way we eat, what we eat, you know, all those things and even in the rest of the world, really, it's, it's just hard to think about and i'm just using myself. as an example saying, am i willing to change that much. i mean, can i change that much, you know, it sounds good on the surface, but when it comes time to do it and one has to do it, you know, for the, you know, the bigger picture. it's it's just hard to fathom. so i really don't know. i just looking for answers. thank you guys.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  yeah, and the us here, we're creatures of habit to just think about changing our lifestyle, the way we eat, what we eat, you know, all those things and even in the rest of the world, really, it's, it's just hard to think about and i'm just using myself. as an example saying, am i willing to change that much. i mean, can i change that much, you know, it sounds good on the surface, but when it comes time to do it and one has to do it, you know, for the, you know, the bigger picture. it's it's just hard to fathom. so i really don't know. i just looking for answers. thank you guys.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. It is difficult for people to change their lifestyles.\\n2. It is difficult for people to change their diets.\\n3. It is difficult for people to change their eating habits.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n4. It is difficult for people to change their food preferences.\n\n1. B\n2. B\n3. B\n4. B",
    },
  },
  {
    transcription: {
      proposal:
        "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.",
      rawCompletion:
        "\n1. The difference between chemical free food and organic vegetables is important and often overlooked.\n2. Feedlot meat is bad for the animals and the planet, and organic meat from small farms is a more sustainable option.\n3. We should eat less meat overall, but it should always be sustainable.",
      "pro/con/undecided":
        "1. The difference between chemical free food and organic vegetables is important and often overlooked.",
      reason:
        "2. Feedlot meat is bad for the animals and the planet, and organic meat from small farms is a more sustainable option.",
      order: "15",
      author: "Darshana",
      time: "36:15:00-37:00:00",
      text: " one of the things that really surprises me and all sorts of discussions is they never talk about the difference between chemical free food and organic vegetables. and i think we really need. i never eat feedlot meat. i don't think anybody should eat feedlot meat or dairy because it's horrible for the animals and it's really horrible for the planet, but are organically grown vegetables and organically grown meat on much smaller farms is not unsustainable. and in fact, it does regenerate the land and i think that's a big difference. we should eat less meat than we do for sure, but it should always be sustainable, meat from small farms or wild-caught buffalo. that's restoring the prairie and like wild idea buffalo company.",
      rawPrompt:
        "###\nDirections: Read the Proposal and  Speaker's statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.speaker:  one of the things that really surprises me and all sorts of discussions is they never talk about the difference between chemical free food and organic vegetables. and i think we really need. i never eat feedlot meat. i don't think anybody should eat feedlot meat or dairy because it's horrible for the animals and it's really horrible for the planet, but are organically grown vegetables and organically grown meat on much smaller farms is not unsustainable. and in fact, it does regenerate the land and i think that's a big difference. we should eat less meat than we do for sure, but it should always be sustainable, meat from small farms or wild-caught buffalo. that's restoring the prairie and like wild idea buffalo company.\n###\nList this speaker's arguments:\n",
      settings: { temperature: 0.08, max_tokens: 772, top_p: 0.06 },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The difference between chemical free food and organic vegetables is important and often overlooked.\\n2. Feedlot meat is bad for the animals and the planet, and organic meat from small farms is a more sustainable option.\\n3. We should eat less meat overall, but it should always be sustainable.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion: "\n\n1. C\n2. A\n3. A",
    },
  },
];
