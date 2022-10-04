export default [
  {
    transcription: {
      transcription: {
        order: "1",
        author: "Francis",
        time: "35:17:00-35:47:00",
        text: " i mean we could all probably use with less red meat and our diets, but i think just telling the people that they need to cut it out as really going to do much as far as regulating it at like a farm level, that could potentially be done. but how is that going to impact the economy? there's a lot of questions involved. but, yeah, i'm down for cutting out. a few hamburgers every now and again.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" i mean we could all probably use with less red meat and our diets, but i think just telling the people that they need to cut it out as really going to do much as far as regulating it at like a farm level, that could potentially be done. but how is that going to impact the economy? there\'s a lot of questions involved. but, yeah, i\'m down for cutting out. a few hamburgers every now and again.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. Red meat is bad for our diets.\n2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.\n3. Cutting out red meat could potentially impact the economy.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. Red meat is bad for our diets.\\n2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.\\n3. Cutting out red meat could potentially impact the economy.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. A) Pro. Reducing meat consumption is beneficial for our diets.\n2. C) Not applicable. The proposal is to reduce methane emissions, not to regulate meat consumption.\n3. B) Con. Cutting out red meat could have a negative impact on the economy.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "2",
        author: "Laura",
        time: "35:47:00-36:32:00",
        text: " i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can't ever eat meat at all. so that's not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i'm not super familiar, but we're very on top of these issues in farming. so don't need the government to help.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can\'t ever eat meat at all. so that\'s not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i\'m not super familiar, but we\'re very on top of these issues in farming. so don\'t need the government to help.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The speaker does not support the second proposal for an educational campaign to cut out meat because they believe it will be interpreted by the American public as a suggestion that they can never eat meat again.\n2. The speaker argues that farmers are already cognizant of the fact that they are methane emitters and are regulated by the state.\n3. The speaker suggests that the government does not need to help farmers with methane emissions because they are already doing so themselves.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The speaker does not support the second proposal for an educational campaign to cut out meat because they believe it will be interpreted by the American public as a suggestion that they can never eat meat again.\\n2. The speaker argues that farmers are already cognizant of the fact that they are methane emitters and are regulated by the state.\\n3. The speaker suggests that the government does not need to help farmers with methane emissions because they are already doing so themselves.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. C) Not applicable to the given proposal. Reason: The argument does not address the proposal.\n2. B) Con. Reason: The argument suggests that farmers are already doing enough to reduce methane emissions.\n3. A) Pro. Reason: The argument suggests that the government should not get involved in reducing methane emissions.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "3",
        author: "Wendi",
        time: "36:32:00-36:59:00",
        text: " yeah, i'm not willing to give up beef at for to put farmers out of work. something should probably be done, but there's a way other than giving up beef. it's yeah, i live in the united states. don't don't start telling me not to eat beef. it's that would just make me pretty unhappy.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" yeah, i\'m not willing to give up beef at for to put farmers out of work. something should probably be done, but there\'s a way other than giving up beef. it\'s yeah, i live in the united states. don\'t don\'t start telling me not to eat beef. it\'s that would just make me pretty unhappy.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The speaker does not want to give up beef because it would put farmers out of work.\n2. The speaker believes that there is a way to solve the problem without giving up beef.\n3. The speaker is from the United States and does not want to stop eating beef.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The speaker does not want to give up beef because it would put farmers out of work.\\n2. The speaker believes that there is a way to solve the problem without giving up beef.\\n3. The speaker is from the United States and does not want to stop eating beef.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. B. This is a con because it is an argument against the proposal.\n2. A. This is a pro because it is an argument in favor of the proposal.\n3. C. This is not applicable because it is not an argument for or against the proposal.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "4",
        author: "Charles",
        time: "36:59:00-37:42:00",
        text: " yeah, i guess i just don't understand the idea of coming up with a rule based on some percentages. i think if you're going to have this kind of regulation and it gets better done at the local level where, you know, community can decide together on how they want to manage how big a farm is, and how many livestock there are, and there's just not enough data in this. this slide here to to convince me that, you know, cows are our problem with global warming. i gotta imagine the sun is doing a lot more control on global warming than cows.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" yeah, i guess i just don\'t understand the idea of coming up with a rule based on some percentages. i think if you\'re going to have this kind of regulation and it gets better done at the local level where, you know, community can decide together on how they want to manage how big a farm is, and how many livestock there are, and there\'s just not enough data in this. this slide here to to convince me that, you know, cows are our problem with global warming. i gotta imagine the sun is doing a lot more control on global warming than cows.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The speaker does not believe that there is enough data to support the idea that cows are a major contributor to global warming.\n2. The speaker believes that it is better to manage farms at the local level.\n3. The speaker believes that the sun is a more significant factor than cows in global warming.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The speaker does not believe that there is enough data to support the idea that cows are a major contributor to global warming.\\n2. The speaker believes that it is better to manage farms at the local level.\\n3. The speaker believes that the sun is a more significant factor than cows in global warming.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. C) Not applicable to the given proposal. The proposal is about reducing methane emissions, not about global warming in general.\n2. B) Con. The proposal is about reducing methane emissions, which would be better accomplished at a global level.\n3. C) Not applicable to the given proposal. The proposal is about reducing methane emissions, not about global warming in general.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "5",
        author: "Amanda",
        time: "37:42:00-38:27:00",
        text: " i don't know. i feel like regulating because i like how they were at that its large farms. not your, you know, i mean, i'm assuming if you're only talking about, you know, three hundred head of cattle. that's not what i think about. when i think of like the big mass producing on farms that would cause as much issues as that, i mean, because we have a small homestead and we have, you know, tons of little animals that i'm sure. methane gases. but i mean that also comes into food waste, how much of that mass amount of food that we're making from the beef is getting wasted but still polluting.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" i don\'t know. i feel like regulating because i like how they were at that its large farms. not your, you know, i mean, i\'m assuming if you\'re only talking about, you know, three hundred head of cattle. that\'s not what i think about. when i think of like the big mass producing on farms that would cause as much issues as that, i mean, because we have a small homestead and we have, you know, tons of little animals that i\'m sure. methane gases. but i mean that also comes into food waste, how much of that mass amount of food that we\'re making from the beef is getting wasted but still polluting.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n-The speaker argues that regulating methane gas emissions from cattle farms is necessary in order to protect the environment.\n-The speaker also argues that large cattle farms are causing more methane gas emissions than smaller farms, and that this is a problem that needs to be addressed.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n-The speaker argues that regulating methane gas emissions from cattle farms is necessary in order to protect the environment.\\n-The speaker also argues that large cattle farms are causing more methane gas emissions than smaller farms, and that this is a problem that needs to be addressed.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. A) Pro \nReason: The argument is in favor of the proposal to reduce methane emissions.\n\n2. A) Pro \nReason: The argument is in favor of the proposal to reduce methane emissions.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "6",
        author: "Adam M",
        time: "38:27:00-39:03:00",
        text: " i think we just need to make people pay for the externalities. so, you know, there's a cost to everything. there's a cost to the beef right now. you just pay the farmer for the be for, you know, the supermarket, etc. etc. but that methane the cost of that methane is being paid by the planet and future generations. we just need to make beef more expensive so that you know, people will eat less and you know, in the cap-and-trade thing where it's the the dollar, the methane, dollar amount is being translated. i don't exactly sure how that works, but i think a markets market. but it'll take a governor. it'll take some sort of government regulation to put that price but that methane the price of methane on top of it. and i know i love beef and i don't want to pay more for beef, but",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" i think we just need to make people pay for the externalities. so, you know, there\'s a cost to everything. there\'s a cost to the beef right now. you just pay the farmer for the be for, you know, the supermarket, etc. etc. but that methane the cost of that methane is being paid by the planet and future generations. we just need to make beef more expensive so that you know, people will eat less and you know, in the cap-and-trade thing where it\'s the the dollar, the methane, dollar amount is being translated. i don\'t exactly sure how that works, but i think a markets market. but it\'ll take a governor. it\'ll take some sort of government regulation to put that price but that methane the price of methane on top of it. and i know i love beef and i don\'t want to pay more for beef, but\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The cost of methane should be borne by the people who produce it, rather than by the planet or future generations.\n2. Beef should be more expensive so that people will eat less of it.\n3. Cap-and-trade systems can help to put a price on methane.\n4. Government regulation is necessary to implement a price on methane.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The cost of methane should be borne by the people who produce it, rather than by the planet or future generations.\\n2. Beef should be more expensive so that people will eat less of it.\\n3. Cap-and-trade systems can help to put a price on methane.\\n4. Government regulation is necessary to implement a price on methane.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. C Reason: Not applicable to the given proposal.\n2. C Reason: Not applicable to the given proposal.\n3. C Reason: Not applicable to the given proposal.\n4. C Reason: Not applicable to the given proposal.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "7",
        author: "Laura",
        time: "39:03:00-39:23:00",
        text: " we should let them mark 8. yeah, let the market shift towards more chicken less beef. exactly.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" we should let them mark 8. yeah, let the market shift towards more chicken less beef. exactly.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The speaker argues that we should let the market shift towards more chicken less beef.\n2. The speaker argues that this would be good for the environment.\n3. The speaker argues that this would be good for the economy.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The speaker argues that we should let the market shift towards more chicken less beef.\\n2. The speaker argues that this would be good for the environment.\\n3. The speaker argues that this would be good for the economy.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n4. The speaker argues that this would be good for public health.\n\n1. C) Not applicable to the given proposal. The proposal is about reducing methane emissions, not about the market.\n2. A) Pro. This is a pro argument because it is in favor of the proposal.\n3. B) Con. This is a con argument because it is against the proposal.\n4. C) Not applicable to the given proposal. The proposal is about reducing methane emissions, not about public health.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "8",
        author: "Nestor Flores",
        time: "39:23:00-39:58:00",
        text: " yeah, i support introducing methane. standards to these large facilities and corporations. but as for the forms themselves, like i don't want to like harm with these with a regulation. i don't want to stop eating meat, but, you know, i agree what he said about taxing people, introducing to the market higher cost to discourage me consumed. just like lower it.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" yeah, i support introducing methane. standards to these large facilities and corporations. but as for the forms themselves, like i don\'t want to like harm with these with a regulation. i don\'t want to stop eating meat, but, you know, i agree what he said about taxing people, introducing to the market higher cost to discourage me consumed. just like lower it.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The speaker supports introducing methane standards to large facilities and corporations.\n2. The speaker does not want to harm with these with a regulation.\n3. The speaker agrees that taxing people and introducing higher costs will discourage meat consumption.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The speaker supports introducing methane standards to large facilities and corporations.\\n2. The speaker does not want to harm with these with a regulation.\\n3. The speaker agrees that taxing people and introducing higher costs will discourage meat consumption.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n4. The speaker believes that this will lead to people becoming healthier.\n\n1. A) Pro \n2. B) Con \n3. A) Pro \n4. A) Pro",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "9",
        author: "steviek6",
        time: "39:58:00-40:43:00",
        text: " well, i think it's interesting because we have an economic choice here. so i basically vegetarian even though i have meat sometimes because my wife is a mediator. so i need a lot of veggie burgers and things like that. as far as the methane from the cows. i mean, you know, it's science. i mean, they definitely producing a lot of methane. we have to be careful of that because it's a terrible greenhouse gas. and the question is how quickly do we have to get off of diet based upon? so sure everybody that can have a little bit of me, but we have to reduce our desire for it or we have to kind of take options to look at alternatives. you know, it's a really hard choice. i live in colorado. so there's a lot of kind of ride around my back.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" well, i think it\'s interesting because we have an economic choice here. so i basically vegetarian even though i have meat sometimes because my wife is a mediator. so i need a lot of veggie burgers and things like that. as far as the methane from the cows. i mean, you know, it\'s science. i mean, they definitely producing a lot of methane. we have to be careful of that because it\'s a terrible greenhouse gas. and the question is how quickly do we have to get off of diet based upon? so sure everybody that can have a little bit of me, but we have to reduce our desire for it or we have to kind of take options to look at alternatives. you know, it\'s a really hard choice. i live in colorado. so there\'s a lot of kind of ride around my back.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The speaker argues that vegetarianism is a healthier diet than one that includes meat.\n2. The speaker argues that methane from cows is a major contributor to greenhouse gases and that we need to be careful of this.\n3. The speaker argues that we need to reduce our desire for meat or look at alternatives.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The speaker argues that vegetarianism is a healthier diet than one that includes meat.\\n2. The speaker argues that methane from cows is a major contributor to greenhouse gases and that we need to be careful of this.\\n3. The speaker argues that we need to reduce our desire for meat or look at alternatives.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. A. Reason: The speaker is arguing that vegetarianism is a healthier diet, which is a pro for the proposal.\n2. B. Reason: The speaker is arguing that methane from cows is a major contributor to greenhouse gases, which is a con for the proposal.\n3. A. Reason: The speaker is arguing that we need to reduce our desire for meat, which is a pro for the proposal.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "10",
        author: "Angie Walker",
        time: "40:43:00-41:11:00",
        text: " i think we just need to be careful with placing regulations on things like that. i think it can be a slippery slope and just you know, weighing those pros and cons again to you know, people are choices in the economy as well, you know, as the environment.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" i think we just need to be careful with placing regulations on things like that. i think it can be a slippery slope and just you know, weighing those pros and cons again to you know, people are choices in the economy as well, you know, as the environment.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. We should be careful with placing regulations on things like that.\n2. It can be a slippery slope.\n3. People are choices in the economy as well.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. We should be careful with placing regulations on things like that.\\n2. It can be a slippery slope.\\n3. People are choices in the economy as well.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. C) Not applicable to the given proposal. Reason: This argument does not address the proposal directly.\n2. C) Not applicable to the given proposal. Reason: This argument does not address the proposal directly.\n3. C) Not applicable to the given proposal. Reason: This argument does not address the proposal directly.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "11",
        author: "Richie",
        time: "33:26:00-34:10:00",
        text: " well, i think that if the government doesn't put a standard or some limits on stuff for the start of it, i don't think anybody's going to move anywhere. there's nobody moves anywhere without they sent them, shall we say? and then the other thing with dairy farms, is there a way to recoup the efta product, if you will of these animals that you know, if you had him in a big barn or you had them somewhere that they could pick contain the methane and then burn it. if that works. i don't know. i'm not a dairy farmer seen pictures of cows. coming from new york city, but that's about it.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" well, i think that if the government doesn\'t put a standard or some limits on stuff for the start of it, i don\'t think anybody\'s going to move anywhere. there\'s nobody moves anywhere without they sent them, shall we say? and then the other thing with dairy farms, is there a way to recoup the efta product, if you will of these animals that you know, if you had him in a big barn or you had them somewhere that they could pick contain the methane and then burn it. if that works. i don\'t know. i\'m not a dairy farmer seen pictures of cows. coming from new york city, but that\'s about it.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The government needs to set standards or else no one will move forward.\n2. There needs to be a way to recoup the methane emissions from dairy farms.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The government needs to set standards or else no one will move forward.\\n2. There needs to be a way to recoup the methane emissions from dairy farms.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n3. The government should incentivize farmers to reduce methane emissions.\n4. The government should provide more information to the public about the methane emissions produced by livestock.\n\n1. C) Not applicable to the given proposal. The proposal is for an educational campaign, not for setting standards.\n2. C) Not applicable to the given proposal. The proposal is for an educational campaign, not for recouping methane emissions.\n3. C) Not applicable to the given proposal. The proposal is for an educational campaign, not for incentivizing farmers.\n4. A) Pro. The proposal is for an educational campaign to encourage people to reduce their meat and dairy consumption.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "12",
        author: "Jim",
        time: "34:10:00-34:53:00",
        text: " i'm definitely in the big farming, agricultural, dairy area and they all reuse that to fertilizer fields, you know, the big manure pits at they're circulating that in and drying it and spreading it then and later years and that's amish farms, you know, this area. they're all doing that. but one thing i see you've met the sewer plant. they're burning a methane torch just out next to the plan, just going up in flames, which can when you're talking about earlier heating, the steam moving again. later that he could definitely be used for something that would be cost effective. so i just see a lot of people aren't even thinking about some of those things and easy solutions. try using the energy. it's being wasted.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" i\'m definitely in the big farming, agricultural, dairy area and they all reuse that to fertilizer fields, you know, the big manure pits at they\'re circulating that in and drying it and spreading it then and later years and that\'s amish farms, you know, this area. they\'re all doing that. but one thing i see you\'ve met the sewer plant. they\'re burning a methane torch just out next to the plan, just going up in flames, which can when you\'re talking about earlier heating, the steam moving again. later that he could definitely be used for something that would be cost effective. so i just see a lot of people aren\'t even thinking about some of those things and easy solutions. try using the energy. it\'s being wasted.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\nThe speaker argues that:\n\n1. Big farms in the agricultural and dairy industries reuse manure to fertilize fields.\n2. The methane torch at the sewer plant could be used for heating.\n3. People are not thinking about easy solutions to energy waste.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\nThe speaker argues that:\\n\\n1. Big farms in the agricultural and dairy industries reuse manure to fertilize fields.\\n2. The methane torch at the sewer plant could be used for heating.\\n3. People are not thinking about easy solutions to energy waste.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. C) Not applicable to the given proposal. The proposal is about reducing methane emissions produced by livestock, not about agricultural or dairy farms.\n2. C) Not applicable to the given proposal. The proposal is about reducing methane emissions produced by livestock, not about the methane torch at the sewer plant.\n3. A) Pro. The speaker argues that people are not thinking about easy solutions to energy waste, which suggests that they are not aware of the issue of methane emissions produced by livestock.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "13",
        author: "Caitlin",
        time: "34:53:00-35:31:00",
        text: " the video has mentioned to, you know, at some point education campaigns to promote a more vegetarian lifestyle. if you will, i'm in favor of that very much. so i don't think people have to give up meat completely, but i think the us we are huge beef eaters and i think we all know that they're, you know, the health benefits of eating vegetables and not to mention the treatment of animals. i'm, i'm very much in favor of having that to be one of the small things that we can do to make a bigger difference. is educating. our community is about, you know, meat-free mondays or trying to do a bit better than that.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" the video has mentioned to, you know, at some point education campaigns to promote a more vegetarian lifestyle. if you will, i\'m in favor of that very much. so i don\'t think people have to give up meat completely, but i think the us we are huge beef eaters and i think we all know that they\'re, you know, the health benefits of eating vegetables and not to mention the treatment of animals. i\'m, i\'m very much in favor of having that to be one of the small things that we can do to make a bigger difference. is educating. our community is about, you know, meat-free mondays or trying to do a bit better than that.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\nThe speaker's arguments are that education campaigns promoting vegetarianism are beneficial for both health and animal welfare reasons.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\nThe speaker\'s arguments are that education campaigns promoting vegetarianism are beneficial for both health and animal welfare reasons.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. A) Reason: Education campaigns can be effective in reducing methane emissions.\n2. B) Reason: Education campaigns may not be effective in reducing methane emissions.\n3. C) Reason: Education campaigns may have negative impacts on health.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "14",
        author: "Keith",
        time: "35:31:00-36:15:00",
        text: " yeah, and the us here, we're creatures of habit to just think about changing our lifestyle, the way we eat, what we eat, you know, all those things and even in the rest of the world, really, it's, it's just hard to think about and i'm just using myself. as an example saying, am i willing to change that much. i mean, can i change that much, you know, it sounds good on the surface, but when it comes time to do it and one has to do it, you know, for the, you know, the bigger picture. it's it's just hard to fathom. so i really don't know. i just looking for answers. thank you guys.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" yeah, and the us here, we\'re creatures of habit to just think about changing our lifestyle, the way we eat, what we eat, you know, all those things and even in the rest of the world, really, it\'s, it\'s just hard to think about and i\'m just using myself. as an example saying, am i willing to change that much. i mean, can i change that much, you know, it sounds good on the surface, but when it comes time to do it and one has to do it, you know, for the, you know, the bigger picture. it\'s it\'s just hard to fathom. so i really don\'t know. i just looking for answers. thank you guys.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. It is difficult to change one's lifestyle.\n2. It is difficult to change one's diet.\n3. It is difficult to change one's habits.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. It is difficult to change one\'s lifestyle.\\n2. It is difficult to change one\'s diet.\\n3. It is difficult to change one\'s habits.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. C) Not applicable to the given proposal. The proposal is about launching an educational campaign, not about changing people's lifestyles.\n2. B) Con. The proposal is about reducing meat and dairy consumption, so a con would be that it is difficult to change one's diet.\n3. A) Pro. The proposal is about reducing methane emissions, and one way to do that is to change one's habits.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
  {
    transcription: {
      transcription: {
        order: "15",
        author: "Darshana",
        time: "36:15:00-37:00:00",
        text: " one of the things that really surprises me and all sorts of discussions is they never talk about the difference between chemical free food and organic vegetables. and i think we really need. i never eat feedlot meat. i don't think anybody should eat feedlot meat or dairy because it's horrible for the animals and it's really horrible for the planet, but are organically grown vegetables and organically grown meat on much smaller farms is not unsustainable. and in fact, it does regenerate the land and i think that's a big difference. we should eat less meat than we do for sure, but it should always be sustainable, meat from small farms or wild-caught buffalo. that's restoring the prairie and like wild idea buffalo company.",
      },
      response: {
        config:
          '{"model":"text-davinci-002","prompt":"speaker: \\" one of the things that really surprises me and all sorts of discussions is they never talk about the difference between chemical free food and organic vegetables. and i think we really need. i never eat feedlot meat. i don\'t think anybody should eat feedlot meat or dairy because it\'s horrible for the animals and it\'s really horrible for the planet, but are organically grown vegetables and organically grown meat on much smaller farms is not unsustainable. and in fact, it does regenerate the land and i think that\'s a big difference. we should eat less meat than we do for sure, but it should always be sustainable, meat from small farms or wild-caught buffalo. that\'s restoring the prairie and like wild idea buffalo company.\\"\\n###\\nQuestion 1. List this speaker\'s arguments:\\n","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
        completion:
          "\n1. The difference between chemical free food and organic vegetables is important.\n2. Feedlot meat is horrible for the animals and the planet.\n3. Organically grown meat from small farms is sustainable and regenerates the land.",
      },
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"Given the following proposal: \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\\n###\\n\\n1. The difference between chemical free food and organic vegetables is important.\\n2. Feedlot meat is horrible for the animals and the planet.\\n3. Organically grown meat from small farms is sustainable and regenerates the land.","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n4. The demand for meat is increasing globally.\n\n1. C - Not applicable to the given proposal.\n2. A - This is a pro argument because it is in favor of reducing meat consumption in order to reduce methane emissions.\n3. B - This is a con argument because it is against the given proposal.\n4. C - Not applicable to the given proposal.",
    },
    proposalText:
      ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
    proposalNumber: "q9",
  },
];
