export default [
  {
    transcription: {
      order: "1",
      author: "Francis",
      time: "35:17:00-35:47:00",
      text: " i mean we could all probably use with less red meat and our diets, but i think just telling the people that they need to cut it out as really going to do much as far as regulating it at like a farm level, that could potentially be done. but how is that going to impact the economy? there's a lot of questions involved. but, yeah, i'm down for cutting out. a few hamburgers every now and again.",
    },
    response: {
      config:
        '{"model":"text-davinci-002","prompt":"what is the person talking about? keep that in mind while answering the following:\\n\\n1. are they for, against or undecided on it?\\n2. is their sentiment positive, negative or neutral?\\n3. can you summarize their points?\\n4. do they support their points with facts or anecdotes?\\n5. if they support their point with facts, what are the facts?\\n6. if they support their point with anecdotes, what are the anecdotes?\\n7. can you quote the anecdote?\\n8.  what are the claims they make?\\n9. what are the premises they rely on?\\n10. what topic are they talking about?\\n\\nanswer these questions with the following transcript:\\n\\" i mean we could all probably use with less red meat and our diets, but i think just telling the people that they need to cut it out as really going to do much as far as regulating it at like a farm level, that could potentially be done. but how is that going to impact the economy? there\'s a lot of questions involved. but, yeah, i\'m down for cutting out. a few hamburgers every now and again.\\"","temperature":0.08,"max_tokens":256,"top_p":0.06,"frequency_penalty":0,"presence_penalty":0}',
      completion:
        "\n\n1. They are undecided on the idea of cutting out red meat.\n2. Their sentiment is neutral.\n3. They think that regulating red meat at the farm level could potentially work, but are unsure of how it would impact the economy.\n4. They support their points with questions.\n5. They do not support their points with facts or anecdotes.\n6. N/A\n7. N/A\n8. The claims they make are that regulating red meat at the farm level could potentially work, but are unsure of how it would impact the economy.\n9. The premises they rely on are questions.\n10. The topic they are talking about is the idea of cutting out red meat.",
    },
    formatted: {
      topic:
        "The topic they are talking about is the idea of cutting out red meat.",
      "summary of points":
        "They think that regulating red meat at the farm level could potentially work, but are unsure of how it would impact the economy.",
      "what facts, if any?":
        "They do not support their points with facts or anecdotes.",
      "what anecdotes, if any?": "N/A",
      "anecdote quote": "N/A",
      "for/against/undecided":
        "They are undecided on the idea of cutting out red meat.",
      "sentiment positive/negative/neutral": "Their sentiment is neutral.",
      "facts or anecdotes": "They support their points with questions.",
      claims:
        "The claims they make are that regulating red meat at the farm level could potentially work, but are unsure of how it would impact the economy.",
      premises: "The premises they rely on are questions.",
    },
  },
];
