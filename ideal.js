import {encode, decode} from 'gpt-3-encoder'
const deb = [
  {
    order: 1,
    author: "Angela (Moderator)",
    text: " everybody ready to get started? so we have a couple new comers today that weren't here yesterday. for both of them, i think i'll just go over everything i said yesterday and just so they're aware and then i think we might do intros again, just so everybody's caught up.",
  },
  {
    order: 2,
    author: "Will",
    text: " today i,aod be sad to see my name. i,aom back to be will from bosoco isles (not sure about the name),ap",
  },
  { order: 3, author: "Angela", text: " and can you also say,ap" },
  {
    order: 4,
    author: "Will",
    text: " oh, why you came or what you thought when you were invited? like i said yesterday. this could be a father daughter situation where she says, this is all a scam and they are out to take your money and you never give away your information. i,aod be very pleased to go back home and say, told you so. dad could do that kind of stuff. i think it's great opportunity to get together at this critical time in our nation's history where we have a lot of issues you could see by this book. i'm sure some of you have read it all or at least glanced at it. there's a lot of issues that need to be discussed. many of them might have a significant and we need for the presidential candidates that are, gives us an opportunity as well to talk to some of them on a one basis and see where they stand. so it should be exciting. i really am looking forward to the weekend",
  },
  {
    order: 5,
    author: "Emily",
    text: " i'm emily from salt lake city, utah. as i said last night, i'm excited to be able to have conversation and not to have, as we discussed, something spoke past me. so that's what i'm excited about.",
  },
  {
    order: 6,
    author: "Nancy",
    text: " hi my name's nancy and i'm from northern california and i really am excited about this. i think that you need, as i said last night, people from every state and even with different points of view you could talk to instead of just throw jargons at us or hear on the television. this is one way to do it. the other point of view, that's it. i think this is exciting.",
  },
  {
    order: 7,
    author: "Ken",
    text: " i'm ken, i'm from indiana. <inaudible> and our conversations are beginning in our community and with my family and with my partner's family. pretty much i want to be able to speak some sort of opinions <inaudible>. that,aos pretty much the same as many others have said. we want to know what's going on because i think these issues are very important.",
  },
  {
    order: 8,
    author: "Mike",
    text: " my name is mike. i,aom from penns (? could not be sure what he said), out of the state of michigan. and i,aom here because it looks like a very unbiased or objective way of looking at the issues. watching today's news, it,aos like that network you listen to. i'm very interested in the future for my kids.",
  },
  {
    order: 9,
    author: "Sam",
    text: " i,aom sam. i,aom happy to be here, and like everybody else, i'm glad i followed up on it and went through with it, and be here and learn.",
  },
  {
    order: 10,
    author: "Jackie",
    text: " i am jackie. i'm also excited just to become more informed about all of these issues. issues that might become more important in the upcoming years. or to just learn from different view points, different people, very intelligent people",
  },
  {
    order: 11,
    author: "Angela (Moderator)",
    text: " 00:06:07 where are you from, jackie?",
  },
  {
    order: 12,
    author: "Jackie",
    text: " oh i,aom from nashville. sorry forgot that.",
  },
  {
    order: 13,
    author: "John (Very inaudible so the transcription is not accurate)",
    text: " hey i,aom john. i,aom from a small town in vermont. i was interested in school in seeing what,aos going on, what has happened to us. i got out of school eight years ago, and probably two years ago, i,aove been a bit part of politics online, watching it at least anyway.",
  },
  {
    order: 14,
    author: "Nori",
    text: " i'm nori from northern california. i'm here to hear what the other side has to say. again our nation is at a crossroad i think. like half the nation wants to go socialist. i'd like to hear why they want to go that way and share why i think we shouldn,aot.",
  },
  {
    order: 15,
    author: "Erick",
    text: " my name is erick. i'm from dana point, southern california. i was also skeptical when i got the thing and i looked at it. it checked out and i thought it would be an opportunity to, see maybe a return to civility the old days when people from both sides of the hall could discuss issues, go to lunch together and not see things as a personal upfront when someone disagrees with you. so i'm looking forward to that.",
  },
  {
    order: 16,
    author: "Chanel",
    text: " i'm chanel from long beach. i'm happy to hear what everyone has to say. well, you will state my viewpoints on certain things that we'll be discussing.",
  },
  { order: 17, author: "Erick", text: " which long beach?" },
  {
    order: 18,
    author: "Chanel",
    text: " long beach in california. there is one like in new york, i think",
  },
  { order: 19, author: "Erick", text: " it doesn't count." },
  { order: 20, author: "Chanel", text: " i,aom very glad you're here today!" },
  {
    order: 21,
    author: "Charles",
    text: " i,aom charles originally from san francisco, living in new orleans. like i said yesterday, just here to listen to viewpoints from actual citizens, i guess normal folk, not politicians or pendants or journalist or what happened.",
  },
  {
    order: 22,
    author: "Gary",
    text: " good morning. i'm sorry i wasn't here last night. blame it on houston. my name is gary. i'm from walz, mississippi, which is about five miles south of memphis, tennessee. i'm a small business owner and when i got the invitation i thought, wow, this would be a chance to hear somebody else's opinion and to give mine, so that's why i'm here.",
  },
  {
    order: 23,
    author: "Angela",
    text: " great. like you all said, we're here to just have a discussion, not like or anything. i'm really here just to facilitate the conversation, but you are here to talk to each other so you don't need to look at me. if i'm like looking at my phone or like ruffling through my papers and comments, i'm still listening. i just need to make sure we're on time and that i am keeping track of you all. yeah,ap so let's get started.",
  },
  {
    order: 24,
    author: "Gary",
    text: " can i say one more thing? yeah. everybody would talk up a little bit. i'm a little hard to hear.",
  },
  {
    order: 25,
    author: "Angela",
    text: " that'll be good for the recorders too so it's being recorded for research purposes. so yes, if you could speak up so then the researchers could hear what you were saying, that'd be great. okay, today we're going to start on the economy and taxes, so you can flip your manuals to page eight. that's like the beginning of this section. so originally i was going to show you a video, but it doesn't seem to want me to show it to you today, so we'll just dive right in. does anybody have any thoughts about the economy or taxes or anything in this section?",
  },
  {
    order: 26,
    author: "Gary",
    text: " i'll start off. should the us impose a wealth tax on the rest of your tax-payers? they already do, but where the situation comes in at is these wealthy taxpayers have all these accountants that can manipulate the books so that they don't have to pay any taxes. so they are in fact not paying their fair share in most instances. i think there needs to be something done about the various loopholes and things like that the tax people have open out there. i don't know the exact words for it, but are they accountants? yeah. cause being in a small business, i filed my taxes every year and i sit in that office in there and i listened to him saying, well, if we did this, you could get this and do that. it's kind of manipulated how everything goes and all of that needs to stop. if the, if the wealthy people paid their share of taxes appropriately, right, that would help considerably. but in a statement that it says here, the tax would affect a limited number of people, well yet it would, but my concern about this is social welfare programs and things like that. i see a lot of people come into my shop riding brand new motorcycles and say, oh yeah, i'm disabled. well you're disabled, then what are you doing riding a motorcycle? right? and they don't work. i would rather see where the taxes get this deficit down. that's where i think our main issue is if we get that deficit down right, then other things are going to fall into place.",
  },
  {
    order: 27,
    author: "Will",
    text: " would a revised tax form, a simplified tax form, right. i wasn't, i do income taxes part time, so i know exactly what you're saying. we should have an one-page form on which is the amount of money you made, times your tax rate equals what you own, and period. get rid of everything else. you had to see some of the provisions in the tax code. i mean, some forms are saying as of july 23rd, 2003 from this point forward, you're going to have to start paying taxes on this item. you know, it's crazy. i'm not saying you don't need the particular type of paper. i just thought they may not be necessarily what we need, but,ap the idea is to prevent some of these loopholes. get ride of them, and perhaps and the richest people would pay their fair share.",
  },
  {
    order: 28,
    author: "Gary",
    text: " that's a good possibility. if they would be able to put down accurately what they actually did make that year, you know,ap",
  },
  {
    order: 29,
    author: "Will",
    text: " that should be easy enough. doesn't everybody receive a w2 at the end of the year, including, these wealthy people?",
  },
  { order: 30, author: "Gary", text: " if you got wages,ap" },
  {
    order: 31,
    author: "Will",
    text: " yeah, well they had wages or a ceo of a company. they are be to paid several hundred thousand dollars or millions of dollars a year,ap",
  },
  {
    order: 32,
    author: "Nancy",
    text: " their wealth is much greater than their salary is in many cases.",
  },
  {
    order: 33,
    author: "Will",
    text: " well true. we're not totally, are we imposing a text? oh, they're talking about a wealth tax",
  },
  {
    order: 34,
    author: "Nancy",
    text: " well it was. but even on income tax, what you make is not just ,ai if you're wealthy ,ai it's not just the wages, it's also income off other things ,ai injust things, you know.",
  },
  {
    order: 35,
    author: "Will",
    text: " well that should be, again, easy enough to, track,ap",
  },
  {
    order: 36,
    author: "Nancy",
    text: " when you're talking about the 1%, that's the wealthiest, the complexity of their income is amazing. i mean, they have all types of incomes that are taxed separately. in some cases, for example, the capital gains tax that people want it just to add to your income. if you're a retired person and you have an income that in part is from your capital gains, that's much more important to you than it is to john rockefeller. i mean to tax that income on a retired person, it's a penalty. to tax it on a wealthy person that is not the same. it's not as simple as just what's your earnings and for that reason, the wealthier you are, the harder it is to accurately tax income.",
  },
  {
    order: 37,
    author: "Will",
    text: " yeah. it's very difficult to tax wealth. dry (?) a dollar amount that says this is what i made last year.",
  },
  {
    order: 38,
    author: "Nancy",
    text: " which part of it is what kind of income, which is another, and they're taxed differently for a reason.",
  },
  {
    order: 39,
    author: "Erick",
    text: " you're also looking at net profit and of course you want to be able to offset the losses. it's only fair, i think that the trickery comes in when people can write up all sorts of things as being losses that you or i might not see as being a legitimate loss. on the other hand, you don't want to stifle the incentive to have risk and be able to write off that loss. but there's some point i think where you should be able to discern what's a true loss and what is a fictitious loss that we're just using the offset income.",
  },
  {
    order: 40,
    author: "Nancy",
    text: " what,aos does everyone think about the 2 cents on the dollar over 2 million that elizabeth warren has proposed? rather than talk about taxes per se, you simply say if your income is, and she said too many ways, you could say it's 20 million. if there's a point over which you pay that 2% on every dollar, the amount of money that would be garnered from the top pay your income in the world in the country would be enormous. and that doesn't affect people like retired people. so it's an interesting approach.",
  },
  {
    order: 41,
    author: "Gary",
    text: " but the farmer who owns a 300 acre farm and is out there farming it every single day and that farm is worth so many millions of dollars, but yet he's struggling to pay off his tractor and things like that. you put an additional tax on him, he'll have to sell off part of his farm to be able to pay those additional taxes or that additional 2%.",
  },
  {
    order: 42,
    author: "Nancy",
    text: " she's talking that income profit. in other words, not the money that he has offset ,ai the net ,ai not the gross. it's not wealth but income. so some million whatever you decide, then you're not doing to him what you're saying. you're just saying you have an awful lot of money. you pay 2 cents on the dollar because you have an incredible amount of money. for most of us, and that doesn't affect the rest as far as texas go, i don't know,ap i think she has an interesting idea.",
  },
  {
    order: 43,
    author: "Angela",
    text: " it seems easy to say but less easy to get around.",
  },
  {
    order: 44,
    author: "Nori",
    text: " i think one weakness in our tech system is that there are a large percentage of our citizens pay no taxes. they have no skin in the game at all. i think, even if it's, if you have a very little income, if you're in the poverty category, you should still pay something. if it's only seven dollars a year, you'd have something in the game. otherwise you're just on the take and then you're not contributing to the country at all.",
  },
  {
    order: 45,
    author: "Nancy (?)",
    text: " we'll take a person who's in poverty situation. it's on the taken, they're on the bear surviving it. i think the whole, all of these issues that we have are dependent on what we as a country think human beings, how human beings should be and exist in this country. if you say what you said about socialist, if you take some of the countries like scandinavia or under square, it's considered wrong for someone to be starving or to be unable to get their meds or to do this or that. yeah maybe socialists, but the taxes that are, those who are wealthier are paying are making it possible for people to live. most of those people were the poor people that i know work two jobs or more. if you say they don't have any skin in the game, they have their license, the game, they're barely making it to say, okay, well you're takers. they're not takers. there a few people who are just takers. very few if you just take the whole population. anyway,ap",
  },
  {
    order: 46,
    author: "Nori",
    text: " maybe in your part of the country. in my part of the country, there's a lot of poor people that are living on the ebc cards, right, and all of the other stuff. now the wic program is a wonderful program for the children. i know i have stood in line and watched people buy up enormous stakes and things like that, using ebt cards or the debit cards. i've seen them go into the gas station and buy the gasoline with those things right there. they're driving a new vehicle, nice gold chains. all kinds of things going on. i see it on a daily basis because i'm in a lower income area. there are a lot of people out there that are taking as much as they can and not giving anything in return.",
  },
  {
    order: 47,
    author: "Will",
    text: " i'm sure that's true. like would have bought a, there are, i know steer that my daughter works in. if there are people violating the, statutes or regulations of that particular program, why can't they be, reporting perhaps is the word i'm thinking about, and say, hey, you can't drive around in numerous cities and buy these big fancy steaks and stuff like that. if they're doing that, they're, maybe i don't see him,ap there's a way to tighten up the laws, to, prevent that thing from happening.",
  },
  {
    order: 48,
    author: "Jackie",
    text: " honestly, that was one of the things that was interesting to me about just that thousand dollars for everyone just to be, ubi or whatever because they want to get rid of some of those things where people are getting more than they should have or aren't using it responsively. and then just say, everyone gets this. i thought that was an interesting thing because i do think there are people out there that do work the system. and just, unfortunately, and i try to just think, i tried to not let that bother me because i know i wouldn't do that myself, and if they're okay with living that way, then i'm like, that's fine. i'm not going to love what they do color how i feel about that. you know, those services are out there. if they, if they get approved for it, if they get that money, then that's ok. yeah, i never would have even considered ubi. it was interesting that there are countries that do that as well. you don't have people going hungry or people that aren't able to afford the basic needs. because as a teacher, i do see a lot of that as well. you know, i do see kids that don't have their basic needs met so. perhaps i towards a socialist, i don't know. i've never really liked to turn myself towards things, but it's, you're all human being, when you just, it hurts to think that there are people out there that don't have what they need or have to choose food versus medication and things like that.",
  },
  {
    order: 49,
    author: "Nancy",
    text: " well you are saying working the system, but someone is working the system that gets them 10 million. when you're working the system, that's your mistake.",
  },
  {
    order: 50,
    author: "Ken",
    text: " see i don't think the government should really pay that much attention to like individual lives cause that's only more taxes, money getting spent on trying to stop these loopholes and other things. when you also think about taxes, you got to think about, the national deficit ,ai how bad is a country is going into debt. i feel like it's, we might be in time as a country what we might have to sacrifice certain things, include him or tests to help everybody all as a whole country.",
  },
  {
    order: 51,
    author: "Nori",
    text: " you're a former pastor i understand that.",
  },
  { order: 52, author: "Someone", text: " correct" },
  {
    order: 53,
    author: "Will",
    text: " has the united states lost their moral compass?",
  },
  {
    order: 54,
    author: "Nori",
    text: " that's a big question. i think in relation to what we're talking here, a fundamental question would be, is the feeding the population legitimately a duty of the government? and a long time back in our history, that was the job of the church, not the job of the government and especially not the job of the federal government. in relation to taxes, from the politicians, we hear that we need more money to do more things, but income is not the problem. outgo is a problem. as trayvon said, we have a huge deficit in if you're, i read something from the heritage foundation the other day that if you take the government finances and bring it down to a family level, it's like this family owes over $300,000 in debt and yet they're spending $10,000 more a year than they take in. you're not going to last very long financially. if as a family, that's the way you operate, but that's the way our government is operating. it's a spending problem. it's not an income problem. we're spending money on things that we shouldn't be spending money on. well as i've said before, all of these welfare programs, should they really be a function of our federal government",
  },
  {
    order: 55,
    author: "Chanel",
    text: " sorry to cut you off, but i'm someone that was on the county after working for the post office and getting laid off. and a lot of people, if i don't want to be emotional about this, it's funny too to me when people say people abuse the system. i'm someone who has a college degree. i grew up middle class. i now live in low-income housing. i didn't choose that. i was married but it didn't work out. i had to, when i got laid off, i looked for work. i didn't get it. i got on the account when i got on the county. i didn't abuse the system. yes there were times i bought steaks, but there was also times they have programs that can put you into counseling and therapy and i went to that and it helped me cause i was on the brink of having like a mental breakdown. when you see these people standing in front of liquor stores talking to themselves, acting crazy, a lot of it has to do with, they had some kind of emotional symptom. something tragic happened in their life and they didn't have help. if you grow up and your grandmother lived in the projects and your great grandmother lived in the projects, if you don't have these programs in school like we used to have there when i was younger, if they don't have that anymore, now they have the school to prison pipeline. i'm 41 years old. i can name more people that i know that have been incarcerated on small things starting at like 13. people look at it like what's their fault? if you don't have these programs to make their life better and you don't know any better, how are you supposed to do better? someone that i got on the county and it worked out for me because i grew up in middle-class. my mother is a teacher, she has a master's degree. my father worked for aerospace, so i didn't grow up in poverty. i live in poverty now. that's not a choice that i wanted to make, but i'm working and i probably make more than some of the people around me. i tried to do things in my environment, like speaking to younger kids and asking them certain things. i have a walking program because another thing is like in california, i'm not sure all the california, but long beach we have, there's an obesity problem. i know i'm skipping subjects, there's an obesity problem, but yet in 10th grade they took pe out of school. it's like i live in the hood. the closest grocery store to my house is 2.3 miles. the cost is bank is 2.3 miles. but you know what,aos close? mcdonald's, jack in a box, liquor stores and anything else. you name anything you want. i'm talking about in less than a mile. but in order for me to get fresh produce, i have to go 2.3 miles. now what if i didn't have a vehicle to drive to that? then i would have to take the bus, and then you have to worry about gangs. i understand people look at it like, oh people they use that county or ebt cards. some people do abuse it, but it's all races and all nationalities because it's not just one particular race. like cause if you really want to get into statistics, i can bring it up on a phone on how many people of different nationalities are really on the county and abuse that is not what people see on tv, people think it's one culture or one national, whatever. it's just we as a people need to figure out what we can do for everyone because if you just look at it like these people are abusing the system but nobody's helping them is going to continue to go on cause that school to prison pipeline, it's no joke.",
  },
  {
    order: 56,
    author: "Nori",
    text: " i was going to say, we also have to look at just the reality. i mean there may be people gaming, but if you look at any particular talent, no matter what it is you do, there's a bell curve of distribution and 20% of the people in whatever it is you do or seriously below average, that bottom 20%. as a society, unless we want them to be walking around on the street and homeless, we may need to do something to help equalize their situation with ours. there's, there isn't a whole lot of choice. as it was pointed out, not everybody, in those circumstances is a one particular ethnicity or of their own choice. when i was 20 years old at ucla, my roommate suddenly moved off to texas. when i started ucla, it was there was taxpayers support for those schools and it was about $80 a quarter. then ronald reagan became governor, and by the time i got out, it was, i don't remember how much it was a quarter, but once my roommate moved out, i had no money and i ended up moving to a, like a quonset hut that had, there was four different houses divided into a rectangle thing. it had cockroaches and i was on food stamps for about, i don't know, 90 days, whatever it took till i got out of college and finished. but i think i paid it back. i finished it up. i got a real job after that. i then put myself through law school at night and i worked for the state of california as an attorney for 25 years. i think they got their money back on me by supporting me through the crisis. and yeah, you're right. the majority of people who want assistance nationwide are white people. part of what i presume part of the problem in your area is the opioid that puts these people are there must be reason to, people aren't working.",
  },
  {
    order: 57,
    author: "Nancy",
    text: " sure you talked about the moral compass. i don't know that we've ever had one. i think that moral compass for us a nation is that we are extremely money oriented. go do it, i made it, i'm the best. society,ap we always been that way. we had churches who have done things that umm,ap when you say government, what is a government? why should it be government? you're the government. it isn't like there's the churches and there's the government. we,aore the government, if somebody is starving hungry, the child has no food, i'm responsible; i'm the government. when you say steak, how many of you who are meeting here has ever had a steak? i have. how many of you ever wanted something that everybody else said that you couldn't have? you can't be impoverished and watch television and see what people have and not be angry and hurt and upset and not know why it's not that way for you. our educational system has failed us. i'm an educator, our educational system has failed us. we have not taught the humanities along with information. we don't educate a moral code. we don't say, look, a human being is a human being. i don't care who it is. they have the same value. unless we educate people that way, we're going to starve hungry people and we're going to say, well you don't deserve to have that because you're not good. i get really upset when i see people that say they shouldn't have these things cause they're on welfare. this is what i hate. it's what i want. do i have to eat one bread? just because, what i am poor? it doesn't make sense to me. we have to treat human beings equally and to do that, the government, which is us, has to make it possible to educate people well enough that they have a chance and when they're educated like she is and they fall into hard times, they're treated as with respect as a human being who's fallen into hard times. half of the people walking the streets in san francisco who are drug addicts and all are suffering from ptsd because they served in the military or they were abused. i was abused as a child. it doesn't offer a lot of things to you. it can destroy your life. and i was lucky. i had some people who love me and helped me get through it as a child and an adult. if i hadn't, i'd be one of those people walk in the streets. i just think we've lost sight of the human being as a baby. you take a look at an infant, it's four to then you look at a man, 50 years old, walk in the streets, did drunk or stoned or whatever, how to get there? it wasn't by choice. no infant starts out and decides they want to be down and out. what are we as other people watching that baby? oh, we owed them.",
  },
  {
    order: 58,
    author: "Angela",
    text: " that,aos a good point, nancy. speaking off of that, i kinda wanted to get your guys' thoughts on the estate tax. there's the section that says the us should appeal the estate tax, which currently taxes the fortunes of deceased individuals worth at least $11 million indices, married couples worth at least $22 million, so i wanted to hear your guys's thoughts.",
  },
  {
    order: 59,
    author: "Erick",
    text: " so i,aoll start off then. i'm living off of these things. and ours was taxed from 16 different people and i don't see anything wrong with that at all. i mean, my opinion, but, and a lot of things are not taxed on the lower level, but the higher level people can take this hugely as it stands. i am very fortunate that i'm live off of that and i'm paying my share of that tax and i just think it should not be changed. that's my opinion",
  },
  {
    order: 60,
    author: "Will",
    text: " i think it's important to read this as the fact that they only tax what's above the 11.4 million. it doesn't trigger a tax on all poor people when you cross it. i don't think when you're taxed what's above 11.4 minute, it'll put you in the poverty",
  },
  {
    order: 61,
    author: "Mike",
    text: " i think we should keep it. we should, people should be able to spend, do you want to, you shouldn't have to spin the board, somebody else or somebody that you was at until you spend it on necessarily. you still get to see them for your children for the future. there are still some flaws, but it,aos better than nothing.",
  },
  {
    order: 62,
    author: "Angela",
    text: " does anybody have any thoughts on the arguments against?",
  },
  {
    order: 63,
    author: "Gary",
    text: " i do. interesting to note that american wealth overall, it,aos no higher than it was in the 1980s. that's 40 years ago. wealth has not grown. i see nothing. i don't know what the current state tax is, but i'm all in favor of an estate tax. if you've made that kind of money, i have nothing wrong with taxing that amount of money. i don't know what the number should be 11 million, 22 million for a couple, but tax the dilemma that people are leaving beyond. i i've heard on the, television, many of the wealthiest people in this country are all in favor of wealth distribution. this is one way of getting wealth distribution. thomas robinhood kind of way. you're taking from the rich and giving it to the poor. but i see nothing wrong with that. if we as a nation that are going to, look upon everybody else as a human being and, we have adopted programs that tried to do that or come up with even new programs, you need a way to pay for it, and this certainly is the decent way to pay for it. i'm not saying raise it so high that, the wealthy can't live, but you certainly can live off of that and still provide a very nice source of income, for the gardener either. like you say, either we have to increase our income, we have to decrease our expenses. get away, you can increase your income and decrease. i'm already increase your expenses and decrease your overall government.",
  },
  {
    order: 64,
    author: "Jackie",
    text: " can you explain to me exactly how the estate tax work? so it just taxes before then it's distributed? once you get your part, then you no longer are paying taxes on that. that if you would decide to invest it and make gains off of it, then you would have to pay tax on your gains. whatever you receive as yours, this do with it however you see fit.",
  },
  {
    order: 65,
    author: "Angela",
    text: " there's also more information on page nine",
  },
  {
    order: 66,
    author: "Jackie",
    text: " interesting because this talks about people being in favor raising it and the chart talked about repealing it. it's like they know early if you guys want to take a five point something good.",
  },
  {
    order: 67,
    author: "Angela",
    text: " if you guys want, we could take like a couple of minutes to read this section if it helps, if it would help you guys learn more about the issue.",
  },
  {
    order: 68,
    author: "Nori",
    text: " we were talking earlier about the difference between income taxing and wealth taxes. this is a wealth tax, right? yeah",
  },
  {
    order: 69,
    author: "Gary",
    text: " not an income and it's a way through the estate itself to actually determine what that wealth tax or wealth amount is. i think, this is a good way to, contribute to our tax income. and realistically none of us will ever pay an estate tax",
  },
  {
    order: 70,
    author: "Nori",
    text: " well, i met not only the fact of our income, but yes, it's tax on an estate. it only happens after your dad did. you won't be panicked.",
  },
  {
    order: 71,
    author: "Jackie",
    text: " well, and the argument against is that they're able to be nimble or buy luxuries without being taxed. honestly, those things are taxed as well, but it's just more sales tax state. either way, even if they decide to go out and spend a lot of their money before they pass away so they don't have to be taxed on it. still they're still giving to the government in some way because they,aoll have to pay the sales tax.",
  },
  {
    order: 72,
    author: "Gary",
    text: " they should be allowed to do whatever they want with the money",
  },
  {
    order: 73,
    author: "Mike",
    text: " look, it's like the super heros of america, they should definitely spend more money to help others. you get pretty compensated. fairly nice enough. you get paid. you get paid hourly or monthly so you should be able to help other people out, natural disasters, help the government. definitely bad times, build a bigger voice for people. definitely be wilting",
  },
  {
    order: 74,
    author: "Gary",
    text: " we have people like that. warren buffet and bill gates promised to give away their wealth or they die. they're doing wonderful things with their money. 99% of their wealth he's giving to the bill gates foundation when he dies. you had people like the mars family, the walton family. those children, i don't think are hurt any. got nelson to grow great brands, none of them.",
  },
  {
    order: 75,
    author: "Angela",
    text: " that's actually a good segue. i want your thoughts on whether the us impose a wealth tax on the richest tax payers, requiring them to pay a small portion of their wealth on annual basis.",
  },
  {
    order: 76,
    author: "Angela",
    text: " are there any other arguments about,ap",
  },
  {
    order: 77,
    author: "Erick",
    text: " i think there should be a designated place to put that money. i think it should go towards paying down the national debt.",
  },
  {
    order: 78,
    author: "Gary",
    text: " it should cause the government spending, but the elected officials, they should like spend it better, more wisely. we've talked earlier, they been in so many different basketball rooms and none of that, but that comes out of taxpayer's money. the government officials, they need to put it somewhere secure where really it would go to the american people instead of really do wealth. cause it seems like the wealth gets more.",
  },
  {
    order: 79,
    author: "Angela",
    text: " what do you guys think about the corporate tax rate and how, whether or not the us should lower it from 25% to 15%",
  },
  {
    order: 80,
    author: "Gary",
    text: " i think they needed to leave it there. i'll leave it alone. they dropped it down. now we've got companies that are coming back to united states. again when they raised it, we had people that were leaving left and right and going overseas. now they are coming back. if we lower it below, right, then we're going to have foreign investors coming in to our country, right? and bringing in their own workers for that area. it might an employee and a company that has 500 employees, right? 250 of them may be from the area, but the majority of them are going to be coming from their home companies overseas. so, and i think if they leave the tax alone the way it is right now, we're doing pretty good. you know, they're starting to come back",
  },
  {
    order: 81,
    author: "Nori",
    text: " the flip side of that is there are many corporate executives, say, man, this is more money for me. taxes are going down and they didn't spend it on jobs or development or raising. just throw it in a pot, and say you know, that's you know, that's my money.",
  },
  {
    order: 82,
    author: "Jackie",
    text: " i personally didn't see it helping the people at all. i just thought just helping the corporation itself",
  },
  {
    order: 83,
    author: "Will",
    text: " there anybody that understands how the corporate tax works? what is it that this tax, when you tax a corporation,",
  },
  {
    order: 84,
    author: "Erick",
    text: " net profit. of course it's hard to determine",
  },
  {
    order: 85,
    author: "Will",
    text: " yeah i mean the presumably the ceos pay personal taxes. workers are paying personal taxes. where is the corporate tax? what are you taxing? i personally, i have no idea how that works.",
  },
  {
    order: 86,
    author: "Jackie",
    text: " the profit may not in the corporation is a corporation spends $10 to build the products and sells them for $30 and every other expense is considered. the difference is the profit and that's tax.",
  },
  {
    order: 87,
    author: "Will",
    text: " presumably the $20 that's left over either will get distributed to shareholders or, so this is off season pretty much offshore and stored in banks on a salary of which they've taxed.",
  },
  {
    order: 88,
    author: "Erick",
    text: " that's part still is the 10 bucks, but whatever is left over, that profit i think is what's tax. i think you're absolutely right. it goes to tax holders in the form of stock dividends. usually it's how they pay it out. of course those corporate executives also own, 40 50 60% of the company or more maybe depends on for a corporation to be successful in the funds for research and development. also for expansion or maintenance. all that. that's what's taken out before they're taxed. that's pre-tax dollars, i guess you'd call that",
  },
  {
    order: 89,
    author: "Will",
    text: " so realistically from a corporation could basically say they have no income.",
  },
  {
    order: 90,
    author: "Jackie",
    text: " profit, not income, they can say they have no net profit but they can,aot say they have no income or earning.",
  },
  {
    order: 91,
    author: "Will",
    text: " taxing the cooperation is a very tricky thing",
  },
  { order: 92, author: "Jackie", text: " yeah. yes, it is." },
  {
    order: 93,
    author: "Angela",
    text: " it even talks about a lot of them use loopholes during use to the taxes, even though it is at 21%. if it did and brings me more companies back, that's good until at least more people were hired from it. it wasn't really that long ago that it had that huge cut.",
  },
  {
    order: 94,
    author: "Ken",
    text: " i see when something big happens in debt and all the other stuff. again, you can come in and look at that, as a country. right now, we should (?) see something wrong here and look at it as a country.",
  },
  {
    order: 95,
    author: "Erick",
    text: " i would think that one interesting aspect of it too is that, the corporate tax was reduced, but now concurrently you're getting a tariff policy with the chinese and that, creating certain kind of fears and investments in markets. if you really wanted to analyze to see what the effect of that corporate tax rate your production wise, well now you've kind of got this offset when the tariffs, yeah, i would think we'd be chipping away at those games that everyday people would be feeling from the corporate tax rate reduction.",
  },
  {
    order: 96,
    author: "Gary",
    text: " i don't know about you, but in my area up there, the employment rate has climbed. there's a lot more people that are making a lot more money and have jobs. so, i don't know if raising or lowering the corporate tax had anything to do with that, but i just know that there's a lot of people in my area that now have jobs that didn't before and there's a lot of people out there like you who were on the low side. but will struggle and strive for improvement. and just having a job with a possible future, is, is part of that. so they say it has it boiling down to the lower guy increase in wages or anything else like that. there's a whole lot less unemployment.",
  },
  {
    order: 97,
    author: "Will",
    text: " how many, jobs to an executive in this 50? so just got laid off after making $200,000 a year. now he's flipping hamburgers at mcdonald's. you said employer rate, but what's the standards of living suddenly going to?",
  },
  {
    order: 98,
    author: "Chanel",
    text: " simply go on to take a look at the average employee that was currently in those companies that are like mcdonald's and all. they can't just hold that job. they have held another job. the unemployment is the lowest since the 50s, right?",
  },
  {
    order: 99,
    author: "Angela",
    text: " that goes along with the minimum wage that they have. should we increase the minimum wage to $15 by 2025? i personally think so, because a person making $7 an hour might be able to support a family on that income or and i mean, right. i mean, i'm a two income family and we struggle at times and there's just the three of us, and we don't live in, i mean, we live modestly. it's not that we don't have anything extraordinary, but it's still hard to support a family of three on a two income household. .",
  },
  {
    order: 100,
    author: "Gary",
    text: " i have to look at that from the, i'm an owner of a small business. i cannot afford to pay an employee 15 bucks an hour because as an employee, all of the that are taken out of an employee's paycheck, the business owner has to duplicate. right? so if i pay you 15 bucks an hour and i take six bucks an hour out of your pay, right? i mean, i got to pay 12 bucks an hour plus your 15 bucks an hour, right in order to have you as an employee. now that's just kind of an exaggeration, right? but that's a big thing, especially a first small business. out there too, you said flipping burgers, but those were supposed to be entry level positions so you could learn how things work, right? with the pay and benefits and yeah, i've known people who work at mcdonald's who are managers that are placed now, right. in just a few years and all it takes is some real drive to be able to do that. on the other hand, i see a lot of people who have no drive, they just there for paycheck. and that's the only reason they're there and not willing to do anything more and above with the quote of ,authat's not my job,au. and that irritates me because that tells me that you have, my brother is one of them, right? he lives up in st. louis. at his job i was talking to him and he says, ,auhey, that ain,aot my job. they don't pay me to do that.,au well where's the incentive to move up? if you're doing something that's not your job and your boss sees you, he sees that as incentive, and he keeps an eye on you and watches and that's going to help you start to move up. period",
  },
  {
    order: 101,
    author: "Ken",
    text: " the thing is with the people ,ai bosses, ceos or managers, they don't necessarily give you what you deserve. i mean, me, i work in silver now and i used to be a manager, i didn't get any really great even as a manager. i don't know why anybody else would do it. it'd be a manager. i started respecting managers more. i was like, even that, it's like, it's, it started out as an entry level, but now the government got us in a way where we're forced to stay there all our lives or for 20 years and try to make it a career and retire the murders, ? and it's sad that way, but it's still important that we keep the smaller businesses because we've got more local, smaller businesses. that is, that's people from your area. they'd be jobs, you have to be graduated from high school. they've always been in the community and do stuff where they, instead of big business standing on the rest of like walmart comes to town when you're taking out all the little small local restaurants, small little farm machine places and stuff. and then you still not getting voice for. i think the most thing for me coming right down is keeping all our local small businesses.",
  },
  {
    order: 102,
    author: "Will",
    text: " when you mandate minimum wage, you're just generating the inflation machine. everything's going to cost more because your businesses have to raise prices in order to pay for the extra minimum wage. you really haven,aot gained anything that raising the minimum wages is a political way of getting votes and just generates inflation. if you go back,ap i'm in my upper seventies now and you go back to when i was a kid, when i was starting to work, the minimum wage was probably a dollar and a quarter an hour. gasoline was 25 cents a gallon. why is it not that now? it's because of inflation. because the government decided that they needed more money and the way to do that is to print more money and print more money. that makes the money that has less valuable or if you mandate the minimum wage, that means that all of your businesses either have to lay off people, which is one of those catch 22 situation to destroy what you are trying to build.",
  },
  {
    order: 103,
    author: "Ken",
    text: " i think the government can help herself in a way though. i understand that inflation is going to happen in certain cases but doesn't necessarily have to happen. we don't necessarily know that because the governor makes the decisions on that, and we don't. we miss gas been a dollar, or two dollars, but at the same time, like the minimal, wait, i forgot what i mean. it's like the inflation,ap the government,ap they need to kind of balance out the resources we have. can we use more, spend more of, and what do we necessarily need to keep, the country, what's more important to us? like, well, the gasses and the certain foster foods that you're wearing, important more than ask for them. you gotta kind of that out better as i know officiants and ceos and big business",
  },
  {
    order: 104,
    author: "Chanel",
    text: " i'd like to see more texts go back into the school. because it, to me, if you don't start at the bottom, there's certain areas where kids are using schoolbooks 10 or like five years old and they can't even take a home. like there's certain schools where they're staying in, they don't have air conditioning. like can you imagine being a child? how can you learn to do better if you don't have the basic things to help you better? and if no one's teaching and i'm talking about all areas, not just in california, not just, like i would just like to see, cause since we're talking about taxes, it seems like, i don't know if the lottery taxes or whatever supposed to go towards school, but i feel like teachers get paid less than people that work in prisons. so, yeah, we're going to pay you to be a ceo like i don't mean to keep bringing up the school to prison pipeline, but if you guys really think about that there's a lot of kids of all nationalities that by the time they're in eighth grade, they're not figuring out a new classroom, they are figuring out that new jail cell. those people go on to have kids and then their kids grow up in poverty and then it just becomes bigger and bigger. i'm going to just stop right here,ap",
  },
  { order: 105, author: "Will", text: " but you're absolutely right" },
  {
    order: 106,
    author: "Mike",
    text: " i was going to ask you if you weren't a small business owner or if there was an exemption, in terms of the minimum wage. if walmart and mcdonald's and these huge corporations had to pay the 15 and maybe yours was up from a seven to nine, would that change your thought process on that in terms of paying people later? i've been a small business owner, that's a lot different than being a huge corporation that brings in two, three, $4 billion a year.",
  },
  {
    order: 107,
    author: "Gary",
    text: " it might make me able to hire another bike washer, but that's an entry level kind of job. he's a, if he's working in my motorcycle shop and he's washing motorcycles, he's learning about them and hopefully he'll be able to, i have had people work for me before. they started out as bike washers and ended up going to school to learn to be a motorcycle mechanic and now they're turning wrenches and doing what they wanted to do. but yeah, it, i think that yes, the minimum wage should be raised a little bit but not doubled. that minimum wage is supposed to be for generally, supposed to be generally speaking for entry level positions. i have a niece who started off at walmart making minimum wage and she still works at walmart. it's like six years later. she is doing enough to be able to support her and her daughter on the money that she makes at walmart. so, i'm sure not everything is like that, but one of my main arguments is, okay, mcdonald's is switching to automation. they have these little kiosks, right, where you order your stuff and then you go get it. my local mcdonald's, they can't get my order right to save their life. i can't tell you how many times i've called that 800 number or send them a text, this is ridiculous. i ordered my burger with no onions and it comes back living, and you're telling me that you won't 15 bucks an hour and you can't get the order. i mean, in some instances, i agree that there are companies that refuse to pay their employees what they're worth, but how can you mandate that?",
  },
  {
    order: 108,
    author: "Mike",
    text: " i mean, it's really, for me, it's about a living wage. like i'm, like i said, i'm from san francisco, i live in new orleans, and we were talking about inflation. i do well for myself and my wife, but i looked at a city where we have tourism and all these big events and money come into the city. i'd say probably more than half of the city is living in poverty. the cost of living is rising substantially in new orleans. a decent house, they were probably pre-katrina was 50,000. now you're looking at about 175,000. i'm looking at this note here. this is, an obviously raised us place something into this. the median white household has 146,000 plus in wealth. the median black house, i don't even know if that's right, 7,000. that always stuck out to me too. in 2019 we've gone so far and done these things and this node over here about everyone's got an iphone. things are great, but,ap",
  },
  {
    order: 109,
    author: "Erick",
    text: " i wonder if that figure is distorted by the fact that the majority of the really super wealthy people are white, right? so if you divide up everybody and you include the, and then you look at bill gates and the warren buffetts and the waltons. what else? let's still, there's obviously a big discrepancy. i used to live in bay mattering, so i know there's a lot of money in new orleans, big money while there is internet in battery.",
  },
  {
    order: 110,
    author: "Will",
    text: " i'd say buried, but yeah, there is another interesting aspect of raising the minimum wage. we all talk about how woman are paid equal with men and we all know that it's true. by raising the minimum wage for a woman as well as for men, it will help close that gender gap.",
  },
  {
    order: 111,
    author: "Chanel",
    text: " we also have a discrepancy that's developed in the last 20 years, 25 years between the worker and a corporation makes and what the executive <inaudible> gone from something like three times as much for 300 times as much date. the wealth has not been distributed from corporate games and all to the people and salaries and income as it has been to the corporate offices and that's a big problem if you have somebody who is already had, 15 million as the ceo in some ways making seven 50 an entry level job, it's really hard to get up to 10 and 15. that's a huge discrepancy. it is about the worth of the people or is it about the job or the ability to maybe, i don't know,ap i have a friend who,aos worth 6 million, and i said to him, he was talking about capital dates stuff, but what's enough? he lives in palo alto. his wife is worth 3 million. he said, what do you mean? what's enough? i said, what's enough? if you couldn't have more than a set figure, what would that be? what's enough? he said, all i can get. i said, that's no different than anybody else. then he says, i want more. i want us to make minimum wage raise. i want for what i can get. he says, well yeah, but they're not worth what we are. why not? oh, because they flip burgers and i run the company",
  },
  {
    order: 112,
    author: "Jackie",
    text: " yeah, and you can't just say work hard and we'll make that. there are some people that never get that. are there some states that have a higher minimum wage? i know some states are. it would be interesting to see how that's affected those states that have raised that minimum wage over any, what would that be?",
  },
  {
    order: 113,
    author: "Ken",
    text: " i think it speaks to the federal government, but they try to do the due diligence, that constitution being the help with the federal government. they just sit back and the federal government, they just sit back and worry about other things. they won't interfere with us, daily anyway. the federal government, they make laws that,ap but the state's making laws on this citizens. i feel like they shouldn't learn it making enough money. cause like <inaudible> subway, i'm they told them that like <inaudible> certain bonuses, we make some ourselves and we get these sales and we got to get bonus checks. years ago, we used to get bonus checks every few months and i know now i wish there, that's new passengers rotations. i haven't seen any check in about a year. where like i said, we got to figure out where's the money's gone, who's going to get it. the federal government can't do it. like i said, they get mistakes and problems",
  },
  {
    order: 114,
    author: "Gary",
    text: " i don't think we have enough information in this room. i like jackie's idea that there are states that have higher minimum wages and even the $15 an hour that the, that we're proposing for the federal minimum wage. how's it, how are they doing? you're absolutely correct when you say, i can't afford to pay $15 an hour. if you're going to stay in business to have workers, you're going to have to raise your prices, your equipment, your situation into play. i would love to know how well these states are making out in these areas that have raised the minimum wage. that could give you an idea of whether or not the $50 an hour is a, a realistic, situation here.",
  },
  {
    order: 115,
    author: "Ken",
    text: " how do you, i think for the people from california, because california is one of those states that has started doing stuff in their own reasoning. cause i knew this kind of home was one of those things that took, it's on a power upon it.",
  },
  {
    order: 116,
    author: "Erick",
    text: " oh is there, another thing about the minimum wage raising the minimum wage is that it doesn't only affect those who are earning minimum wage. if you've got somebody that was earning $7.25 and you raise him to $15 and those who were earning $15 say, why am i only earning $15? that's a minimum. i should be getting more. they'll now get $20 an hour and those were earning $20 an hour and say, well, why am i only earning 20 that's the same as the guy that's two steps below me. i should be earning $30 an hour.",
  },
  {
    order: 117,
    author: "Jackie",
    text: " if you consider what portion of a company,aos earnings go to the shareholders and the stock holders and what part go to the employees. if you say, okay, you get 15 now you get 20 now that's a distribution of the income from the corporation and it's a shareholder who's going to get $5 less. i mean, i know the numbers aren't right there. but you know what i'm saying? you're taking the wealth of the corporation and distribute it to the workers more than to shareholders. that's the only thing. you can do it without having the situation",
  },
  {
    order: 118,
    author: "Ken",
    text: " you, it's so important that we know who look out for all owners, small business owners, any cooperation, but at the same time, what would you do if you didn't have the workers to work in your company. you gotta balance it out, ? and that's what, it's like the middle way. i wouldn't know how much, but it should be raised.",
  },
  {
    order: 119,
    author: "Erick",
    text: " i'm curious as to what it would do for people who aren't working or who don't want to work or were like, well, i'd rather be out here selling drugs or doing other things because why would i work for $8 an hour when i live in a place like long beach, california, where poverty is around me like crazy. hey you know what? i might go out here and hey, now i can make 30,000 or $40,000 a year, legit. i don't have to worry about going to jail and all these other issues will hell, maybe i might join the workforce. what is it going to do for our workforce in turn? again, obviously there's issues because folks like you who own the businesses can't necessarily afford to stay in business because you didn't have to pay. maybe they step ladder ways into it and maybe there's variances there but there is difference between corporations and small business",
  },
  {
    order: 120,
    author: "Chanel",
    text: " people who work at walmart and,ap i don't think anyone wakes up and is like, what? today's the day i want to get this job that pays me 7 dollars and 50 cents and then every two weeks give me a check that,aos like four or $500 you can't live off that and it's the way the system is set up. it's really, you can make, say you're making only like 40,000 a year. you don't qualify for all the other programs that someone else that's making 35,000 like i don't want too much money. you make too much money. i like, they have this, i believe it's called heat program that'll help you pay for your lights or whatever. i legit made $500 too much to qualify for that program, but yet there aren't people, like were saying earlier that abused the system and then they know how to get the free stuff. i mean they learned from other people that teach them in the, and if that's, it goes back to, like i said, schooling. people need it. there is needs for schools. when i was in school they would buzz people. i went to schools with all different nationalities from a young age. a lot of people don't. like it is, i can read and then when they grow up and you're in the real world, you don't know how to interact with people in different nationalities, these cultures or what have you because you've never been around that. we got to figure out a way for these taxes and everything period. to go back into like when people were young, because it's very hard to change people's minds once they reach a certain age. if you grow up in an environment where you're being taught hate or you're being taught to spiel or you're being taught like that's all",
  },
  {
    order: 121,
    author: "Mike",
    text: " i have some comments on taxes in general. i have a sister that does cpa taxes for small businesse. every two to four years they taught simplification or it becomes a political issue, and what happens is it becomes more complex. she has to go take more classes and it just becomes worse or every very political season. what we need is some really true, fair changes and simplification in a tax business.",
  },
  {
    order: 122,
    author: "Erick",
    text: " as i said, i used to do taxes part time and you're absolutely right. i loved it every time they change the tax return because it meant had more people coming in cause they don't understand it",
  },
  {
    order: 123,
    author: "Mike",
    text: " and then the small businesses. i went over this with her. she said most of her clients are small business owners and they had to pay more because we used to be graduated rate where they had 16% now if it went up for our small businesses. no, to me, that of void from helping you with the small, it's the backbone of our country.",
  },
  {
    order: 124,
    author: "Will",
    text: " another issue that you're raising, and i just draw this out, education is the key to this whole problem. if you get a well-educated individual, they can go out and get the big paying jobs and you to have to worry one reason, and you can't have a minimum wage. education.",
  },
  {
    order: 125,
    author: "Gary",
    text: " learning a skill that would get mechanics, all of this other stuff out of the schools now and have, like you said, we put more money back into the schools. start those programs. i heard something the other day that said, you're not going to get anywhere in this current world without a college education. i think that's bull, right? if you have a good trade, you can make a decent living. you know, you may not get extremely wealthy but you can live comfortably, and working with your hands, you don't necessarily need a high school education or a high school diploma. although it's nice to have, the education is great, but you do not have to have a college degree to move up in this world and not everybody is meant to go to college. you're right, when i say education, i'm also reading, trade school education as well as general college scholarships and i mean graduations and so forth.",
  },
  {
    order: 126,
    author: "Jackie",
    text: " i was just going to say, do you think we've gotten to this place where we equate things that being smart and being like,ap that college degree makes you better than others or getting a's in school makes you better than but c is average and they're going to be like,ap we place all this really greatness on a, c, e and children learn at a very young age if they're not making a's, like they're not as good as their peers and that's not, it's not true. we're doing things like taking music and arts and all these things. that,aos what some kids are good at. like we're good at all these different things and we need to value all those things the same. there's a high schools in nashville to do what they call it, the patties and it's actually getting students ready for a lot of those trade jobs. or even if they think they might want to be in nursing or something, he starts letting them try out things in that field so it gets them more ready for that. there's also, i mean the construction in nashville isn't the same. we need people who can build houses, who are carpenters, who are plumbers, who are electricians, who are all these things which are very detailed oriented fields and do have to have intelligence. it may not be so, book smarts, what we will think of at, like it's just, i think that is like the bigger problem. we do have to like change this mindset that we have about what makes someone capable and what makes them also valuable.",
  },
  {
    order: 127,
    author: "Emily",
    text: " now we have like a short of electricians in salt lake city. if you want an electrician to come to your house, you have to schedule an appointment like six weeks in advance and they are paid extremely well because nobody is going into that train back.",
  },
  {
    order: 128,
    author: "Angela",
    text: " this was a really great discussion but i want to make sure that we can come up with questions for the panelists and so jackie, you brought up a really good point about the state, so what question, like let's plan it out word for word. what kind of question do you want to ask the moderator for the penal?",
  },
  {
    order: 129,
    author: "Will",
    text: " you got to look at a measure of how all the corporations and also in different states and then do they balance what happens in their stores with, okay, this day has a much lower, that's kind of feeding into that too. does that somehow make the two markets or the different, in other words in the area with a higher minimum wage, their profits aren't as high so they do not go into there as much, but that they're really going into the state next door.",
  },
  {
    order: 130,
    author: "Jackie",
    text: " i have here ,ai what states have implemented the federal minimum wage bar higher and what benefits have there been?",
  },
  {
    order: 131,
    author: "Gary",
    text: " all states have to implement federal minimum wages don,aot they? i think the question is more like what states have higher minimum wage higher than federal? what results did they get?",
  },
  {
    order: 132,
    author: "Chanel",
    text: " and his point is excellent. does that impact development by corporations in that state?",
  },
  { order: 133, author: "Gary", text: " and job distribution." },
  {
    order: 134,
    author: "Angela",
    text: " can you say that one more time? sorry",
  },
  {
    order: 135,
    author: "Chanel",
    text: " how has that impacted the distribution of employment in that state and the corporations that moved out?",
  },
  {
    order: 136,
    author: "Will",
    text: " is there a study that has given us a correlation between the per capita spending on students elementary k through 12 and wages average wage versus what the state spend is per student?",
  },
  {
    order: 137,
    author: "Erick",
    text: " well, you look at, you mentioned the fact that just about every school in the country has dropped physical education. and what happens then? we have obesity becomes a real problem and then what happens in people show up like crazy for health care. so simply i guess my question is ,ai is there a correlation between per capita spending on students k through 12 average income?",
  },
  {
    order: 138,
    author: "Erick",
    text: " can we come back and start? i've heard a couple cups of extra waters if anyone wants. so now that we're done with taxes, we're going to move on to health care. health care starts on page 20",
  },
  {
    order: 139,
    author: "Nancy",
    text: " it should depend on different states, because there are different levels of cost of living in different places. in california for $7 in california you don't work, but in mississippi it,aos a wage. so that's gotta be considered the state basis or even cities cause some cities probably have their own as well. it would be very difficult just to say.",
  },
  {
    order: 140,
    author: "Gary",
    text: " nancy basically said that it was like the state's right to do taxes. everything in the constitution says not every power would be given to the state government.",
  },
  {
    order: 141,
    author: "Erick",
    text: " but for a government to exist, they essential need to tax. then, as you're saying, that would be a shared power. the federal government, then the constitution has a heart attacks (? ), so we'll start off the same way",
  },
  {
    order: 142,
    author: "Angela",
    text: " does anybody have any initial thoughts? on any of the proposals or just general health?",
  },
  {
    order: 143,
    author: "Ken",
    text: " health care in general is pretty decent, but i,aom more <inaudible> i like you, but at st thomas, so conflict some of the people, you heard it from a sign before in time and you can the last day, it's totally, you fall as anything next day were pulling. each four years, we put a note about the 30 healthgrades come in and then do it again.",
  },
  {
    order: 144,
    author: "Nancy",
    text: " we're never going to have us say if we have a health plan, you're going to run into some terrific problems with hospitals and facilities like that going out of business simply because of medicare can't afford to pay. they need even if costs for the nonprofit and doctors, et cetera, don't get the salaries. your doctors are paid salaries, not based on how many procedures or anything like that. there has to be a combination of government and private, just to make sense. i mean, if you could give ,ai everybody is guaranteed at least healthcare ,ai but you should be able to supplement that. or you should have to, if you want to, supplement that, as we do in medicare, i have medicare and it's wonderful based on about 80% but i have a private insurance that pays the other 20. i don't have to have that and i would be paying out of my pocket otherwise. but i would think in the general public some combination would make it work.",
  },
  { order: 145, author: "Gary", text: " no. cannot afford it." },
  {
    order: 146,
    author: "Erick",
    text: " okay, you can,aot afford it. but some do though, in some companies if you move, if you change jobs, whatever you had with that other company may not be the same as you're going to get with this new one. there's lot of advantages to this program. i don't know, again, cost is always a factor. we all agree on that. would it cost you more to be on a program like this where if you didn't want that extra coverage, you don't have to have it, but you're automatically going to be covered under a medicare program as soon as you're born. that should include a long-term care vision and dental. i agree with that. hearing aids such as i wear, this cost damn near broke me, and i found out they don't last forever. they won't do it all over again but 10 years later and i would love to have somebody be able to pay for that. it just depends on a lot of factors. what percentage between the government and private insurance? it would not drive private insurance out of business, but they wouldn,aot have a, the final say, they would have to whatever medicare page they would pay based on your percentage. you could save some money by opting out of, private insurance if that was your choice. maybe we would have to raise the amount of money that we take for medicare out of your paycheck. but it might be worth it to have the coverage, any thoughts on such a program? tell me where i'm wrong.",
  },
  {
    order: 147,
    author: "Ken",
    text: " i don't necessarily agree with, well, one thing. the program could be helpful, but it's like the price to make all people be on it. cause would it be like a one price for everyone? that could hurt certain americans, because it depends on what, depending on the price, right? <inaudible> it's going to help a lot of people. but some people just don,aot want to pay for the cost of medicare. you're gonna have some people that's going to be like, oh, i can,aot do what anyone has. people who might have that same problem with a few problems with that they say i can wait it out over paying.",
  },
  {
    order: 148,
    author: "Erick",
    text: " maybe give them an option to not have any insurance coverage.",
  },
  {
    order: 149,
    author: "Erick",
    text: " that these people who really need it are in trouble. you,aore poor so you don't get insurance, cause you can't afford it.",
  },
  { order: 150, author: "Ken", text: " well that's true that" },
  {
    order: 151,
    author: "Nancy",
    text: " one of the things is that the corporations right now very often negotiate salaries and contracts based on the health care part of their concern. you could still have that happen, take care of the supplemental or a certain amount of corporations where they, based on the number of employees or to the government and to medicare. it is easy to work that out. for a private individual, i would say who,aos 40 years old and has no job, they're going to have problems and they are going to have the biggest expense because they go to the emergency room. you have to have somehow a way of covering people whose income is not adequate to manage insurance.",
  },
  {
    order: 152,
    author: "Nancy",
    text: " think about family of four. my medicare right now is expensive. if i had to pay for three more, say they had three kids and no husband or something, that would be unfortunate.",
  },
  {
    order: 153,
    author: "Mike",
    text: " maybe have a family plan instead of everybody for all. give medicare based on household, wages, census and stuff like that.",
  },
  {
    order: 154,
    author: "Erick",
    text: " i love this part. this is about medicare to negotiate drug prices. do you realize that 90% of the drugs that we use in america are made in china?",
  },
  { order: 155, author: "Mike", text: " where'd that figure come from?" },
  {
    order: 156,
    author: "Erick",
    text: " i believe it was on 60-minutes a short while ago, so i would assume it's a, an accurate figure. it's not just something on the top of my head. can you imagine? one of our wonderful allies, but china having that much control over the united states, what does they just say to put a little bit of poison in every pill that,ap they could do that.",
  },
  { order: 157, author: "Jackie", text: " they wouldn't do that" },
  {
    order: 158,
    author: "Erick",
    text: " you you say that, but you say, well, what about if they decide not to manufacture pills? where are you going to get them then.",
  },
  { order: 159, author: "Jackie", text: " make them here." },
  {
    order: 160,
    author: "Erick",
    text: " that's right. you've got to make them here. you gotta get rid of the dependence on china for manufacturing your drugs.",
  },
  {
    order: 161,
    author: "Chanel",
    text: " i don't care who makes it. i care that this costs me $54 and it costs me $4 to canada. $4 in australia. well $54 here and it's gone up 3% in the last five years. what does a person who doesn't have much money and give it as much?",
  },
  {
    order: 162,
    author: "Erick",
    text: " here's my $300 pill here for diabetes. i'm not quite sure. i'm not quite sure how much you've got, but my insulin is $300. $300 for a have another pill for my diabetes and all total. i can't tell you how much a month that i pay for medicine, so i'm with you on 100% percent, but i,ap",
  },
  {
    order: 163,
    author: "Ken",
    text: " whatever it takes to make good generic drugs. make them quickly and cheap. cheaper is what we need.",
  },
  {
    order: 164,
    author: "Erick",
    text: " but you are still depended on china.",
  },
  {
    order: 165,
    author: "Chanel",
    text: " even here we have americans making big companies that own 20 years on drugs. they say they need to use that money for development, r&d. there has to be r&d i agree. but if you take the profit they make out of medicine. it,aos insane! it,aos insane profits!",
  },
  {
    order: 166,
    author: "Gary",
    text: " you see that the pharma people who just took $2 billion over the last 10 years and moved it off-shore with,ap yeah sackler family moved $22 billion because they know they're getting sued over the opioid crisis.",
  },
  {
    order: 167,
    author: "Erick",
    text: " so yeah, there's a point there. i think the larger thing that we're losing track of is we're debating implementation here and i think the real question is the will. because the country seems so heavily divided between those people who want to provide healthcare for everyone and those who want to dismantle the idea of healthcare for everyone. my personal thing is i'd like to see a more, a lot bigger picture discussion to say, is this something we want to do? is it something we should do? is this something we can do?",
  },
  {
    order: 168,
    author: "Will",
    text: " i'm also myself looking at it from the aspect of my health care comes through the va. i don't have private insurance. i go through the va and the term close enough for government work applies a lot. when you have to wait for months on end just to get an appointment, right. i had problems with the doctor that i was assigned, and i had been going to that doctor for eight years and i finally put in a request for a new doctor three years ago. they finally assigned me a nurse practitioner and i'm sorry a nurse practitioner is not a doctor. that's one of the concerns that i have about a government run healthcare for all is that if it's for all you're going to end up getting shortcuts here and there. and we may not get the quality you need",
  },
  {
    order: 169,
    author: "Mike",
    text: " we,aore grossly under funding the va, which is probably the source of the problems. i mean we underfunded everything for veterans, not only the va, but when in our lifetime did we ever see before now private charities raising money for wounded warriors. that was always the responsibility of the government. they took care of soldier when you came back. part of this, we're off the topic of healthcare, but it's just pointing out though, i think the problems with the va or the fact that we've turned our back on our veterans",
  },
  {
    order: 170,
    author: "Erick",
    text: " did you see the article the other day, the gentleman died at the va home and his body was covered with ants.",
  },
  {
    order: 171,
    author: "Will",
    text: " you see that's the kind of care you would end up if you have the government running healthcare for everybody, right. you'd have some areas that were absolutely wonderful, but then other areas that are totally ignored and forgotten, or are very badly underfunded",
  },
  {
    order: 172,
    author: "Nancy",
    text: " we're not saying the va runs the hospitals. if you have medicare for all, medicare doesn't run the facilities. i go to my own doctor for medicare. i still have private doctors, but they're paying my supplemental. if we have a system in the country that would pay hospitals and doctors a base rate and then you wouldn't have government managing like they do with the va. the government wouldn't be in charge of your health care like they are now.",
  },
  {
    order: 173,
    author: "Erick",
    text: " all they pay would be certain allowances for certain procedures. customary charges for certain procedures. and, the doctor i talked to you said he'd be glad to, accept just what the medicaid paid. you would know exactly what it is and wouldn't be any paperwork involved is, this person had a xyz procedure, submit that to the medicare people. they pay the bill and that's that there's no oversight or in those areas at least. it's not run by the medicare people. they don't determine who you can see and not see.",
  },
  {
    order: 174,
    author: "Chanel",
    text: " what they pay is such a small percentage sometimes that doctor can't afford, in northern california where i live, it's very hard to get a doctor as a senior, you get an internist because they aren't getting enough money from medicare. if you have medicare and supplemental care, they are happy to take you on or they'll take you on if you hired them as a concierge. i have a concierge service for a doctor. i had to pay her $200 a month. any other doctor near where i live won,aot take me on. here i'll take $2,400 a year just to have the pleasure of not being sick.",
  },
  {
    order: 175,
    author: "Mike",
    text: " it makes me nervous when you're talking about federal plan. i worked for the federal government, and i don't have talk that's so big and personal and it doesn't mean everyone's like that. but it is so big and that just scares me when i hear that. i just don't have the confidence that, they will do it efficiently. i believe that's part of the va's profits. what government-run operation operates efficiently? the post office, the railroad? fedex? those operations have to turn a profit or go broke. a postal service doesn't, and they've been going deeper and deeper in debt every year. the same thing was the railroads. do we really want to turn healthcare totally over to be government operated and government run? another thing, healthcare i think is a misnomer to begin with. it's not healthcare, it's sick care. it's not even, isn't that neat of health code or sick care, in my opinion, it's medical insurance. we're talking about insurance programs are not talking about healthcare programs and how did insurance end up the way it is? you go back 50, 75 years, it was the government that generated that all in the first place when they kept, what corporations could pay people. then they started paying with perks, which they said, well, you come work for us, we'll give you, a medical plan. before that employers weren't involved in healthcare. the government wasn't involved in healthcare. it was one of those unintended consequences, government decisions that went awry.",
  },
  {
    order: 176,
    author: "Ken",
    text: " i think we've talked about <inaudible> and copays, all those other small things that have to go into no health care funding, like preexisting conditions, other things that come along. i don't think like if you,aove got two weeks to live, then you go home and have a good day. and i felt like, yeah, at the same time everybody trying to give it to you for all these years. as individuals, we,aove got to take individual steps to take care of ourselves.",
  },
  {
    order: 177,
    author: "Jackie",
    text: " i find it interesting that with obamacare, they said that the 40% or 40,000 or whatever, were uninsured before obamacare, but now it,aos 37? so it hasn,aot made that big of a difference.",
  },
  { order: 178, author: "Nancy", text: " it's a 27 like a 20 million people." },
  {
    order: 179,
    author: "Gary",
    text: " another fault or a problem with obamacare is you can have that, but in many cases, deductible is so high and worthless, you can't afford the deductible.",
  },
  {
    order: 180,
    author: "Ken",
    text: " let's see right here, let's see. it is pretty cool that the supreme court has make it as the option for those states. i mean anybody should go to the individual person who got to pay, who got to worry about his home, this is our ultimate health. and then up to the states because i don't feel like the president will worry about everyone,aos health in the us. he knows that we've got fevers and asthma and this and that? he doesn,aot know anything about what,aos going on. i don't think he should have any say in the medical world",
  },
  {
    order: 181,
    author: "Nancy",
    text: " they have to regulate things. they have to have laws for how people are treated.",
  },
  {
    order: 182,
    author: "Ken",
    text: " they have to have rules but they shouldn,aot be this involved. i want the state governments to be involved.",
  },
  {
    order: 183,
    author: "Nancy",
    text: " but medicare isn,aot a program. it's a paying system. it,aos a way to pay for the cost. kaiser permanente (?) is health system. they provide the doctors and the treatments and everything. ba is the same, but medicare is just to give money to these facilities. they're just saying this is what we'll pay you. they want to expand that to cover everybody",
  },
  {
    order: 184,
    author: "Will",
    text: " in the case of medicare, we've got to pay for it twice. they take it out of your paycheck the entire time you're out there and working and then once you've turned 63 or whatever, right? they start, you have to pay for it again. even though i'm 65, i have to pay into medicaid every frickin month. and i'm not happy about that. no not happy about it at all. i'd rather have my own personal insurance that i'd have to worry about and pay for out of my own pocket than have to deal with that contract",
  },
  {
    order: 185,
    author: "Nancy",
    text: " you don,aot have to pay for the medicare.",
  },
  {
    order: 186,
    author: "Ken",
    text: " i actually do, they take it, they took it out. i see it on my checks every two weeks.",
  },
  { order: 187, author: "Nancy", text: " yeah, no but not once you retire." },
  {
    order: 188,
    author: "Erick",
    text: " well i think i paid 128 bucks a month. it,aos not particularly much money compared to the cost of health.",
  },
  {
    order: 189,
    author: "Will",
    text: " they reduce the amount of your social security to make that payment for, yeah, but 128 bucks is 128 bucks",
  },
  { order: 190, author: "Erick", text: " can't buy care for that" },
  {
    order: 191,
    author: "Will",
    text: " no you can't. but still 120 bucks out of my pocket if i'm doing fine? i'm not interested in having any kind of healthcare at all unless i need, i went for the most of my life without needing any kind of healthcare. a 26 years,ao healthcare was the last thing on my mind.",
  },
  {
    order: 192,
    author: "Chanel",
    text: " you,aove been lucky that you didn't get this. i just sat behind and i had things that have crossed me just through one simple procedure. one day in the hospital was $35,000. medicare, my supplemental payment, paid every cent of it.",
  },
  {
    order: 193,
    author: "Erick",
    text: " i can tell you my personal experiences. my wife developed a procedure called necrotizing myopathy. it actually came from, we believe, that drug liquid to wear for high cholesterol. she turns out to be allergic to it. it is a situation where her muscles are being attacked by her immune system. she's the last to use. it starts with her, started in your feet and it's working its way up progressively over the years. we were recommended to take a procedure once a month, so we go down to siteman cancer center in cleveland and take this procedure once a month. $15,000 every month. we,aore on our 63rd procedure next month. she has to take another, a drug which is mostly a cancer drug, but they say it might help her $50,000 every time she's taken that and she's done that 10 times. add that up. you know how much i've had pay. nothing. zero. we're very fortunate that we have a good medicaid program. cause my wife used to work for a highmark in pittsburgh, which is their medical big medical company. so this is part of her pension. i don,aot know what i'd do without it. can you afford that kind of money?",
  },
  {
    order: 194,
    author: "Nancy",
    text: " when you don't need it, when you're healthy, it's wonderful, i don't have anything right? one day life turns on that day, and the next day all of a sudden, here's something that's going to cost $1 million. my best friend just died because he didn't have insurance. he was healthy. he was 59 years old and he said, i don't need insurance. i said, steve, take insurance. at least take obamacare, take something. no he said. he got a sore on the bottom of his foot. he went into the doctors and i said, well, we don't know what's causing it, but it doesn't hurt. i said, you might have diabetes. he waved 3-20 he said, no, i don't have diabetes. i said, it doesn't hurt that you got a sore on your foot. he developed a blood clot on top of his feet and so they drained it and they put him in the hospital overnight and that cost $13,000. so he left the next morning instead of being treated, he died on easter sunday, three weeks later from a blood clot that went from his foot to his calf to his heart. no insurance. if he had insurance, he would've gotten to the hospital. they would have treated it there to check the diabetes. they would have drained it, they would give him blood thinners, he'd be alive.",
  },
  {
    order: 195,
    author: "Ken",
    text: " remembering as president g's with sludge and over, and i know he had certain health conditions that he didn't feel comfortable talking to his peers and the officials and then he passed away. so it's tough. the ones who don't need it and it's free for us and we're not free, but we don't need it in i guess some let's still get insured that we don't need it",
  },
  {
    order: 196,
    author: "Nancy",
    text: " the majority of bankruptcies are caused by health. $128 a month maybe a lot out of your pocket, but it's nothing compared to the first big bill.",
  },
  {
    order: 197,
    author: "Mike",
    text: " i remember reading something about a savings to plan for every child for $50,000 ,ai they said, well, you can use this for education role for covering health expenses or whatever. $50,000 for covering health? your stories proved that $50,000 would get you nowhere. if you were having to pay for your own healthcare, major procedure like that. 50,000 sounds great, but when you look at it realistically for healthcare, it's not",
  },
  {
    order: 198,
    author: "Erick",
    text: " on top of those expenses, that's just her treatments. she's in a nursing home. she's lost her ability to walk. she's lost her continence and it's working a way up her body. it won't be long before it hits your heart and should be dead. but she's in a nursing home. they're taking good care of her. i like to say today is our 50th wedding anniversary. i'm sorry but you see how important it is? i,aom here instead of home with my wife. this a nursing home. it's $13,000 a month for somewhere around there. thank god i have something.",
  },
  {
    order: 199,
    author: "Mike",
    text: " my partner just had a double lung transplant a few years ago. just the procedure was $2 million in one day. well the process, it was one day and then a month in the hospital, etc. that protocol was $2 million and they said it costs over $10,000 a month to maintain that in three years and he has not had to pay a dime because of his coverage. and so there's positive and negative of them. but what would it be if there is something? where would we be?",
  },
  {
    order: 200,
    author: "Erick",
    text: " i think all young, healthy people here who have paid for my wife's care. appreciate it. but yeah, you got to have something, is what we have today working.",
  },
  {
    order: 201,
    author: "Angela",
    text: " we mentioned in the beginning about the affordable care act and so i wanted to go back to that. do you guys think it should be repealed now?",
  },
  {
    order: 202,
    author: "Will",
    text: " i think it needs to be repaired because my wife never had insurance on her all the 43 years we've been married and, because of the affordable care act, we had to go find insurance, otherwise we'd have to pay a fine, which i think that section on it has been repealed. still she has some kind of insurance, but it still costs us out through the nose to get, any of the thyroid medication that she has to take. still costs us through the nose, still costs us money to have to see the doctor and everything else. even though the affordable, the insurance we've got through the affordable care act pays a portion of it. it's still, we got premiums every month, her medication every month, and then anytime she has to go to the doctor, she still has to pay. and a copay isn't the same for everybody, so something about that needs to be fixed. i agree that there needs to be healthcare for everybody. do i want to pay for it? no. if the government pays for it, i'm still paying for it. we're all paying for it and right. it's one of those big things that who knows. we don't have enough information on it or anything else",
  },
  {
    order: 203,
    author: "Gary",
    text: " we all agree that the system is broken. the insurance companies themselves are just sucking in the money like crazy. but i think that's the solution, if there is one, is fix it, but how?",
  },
  {
    order: 204,
    author: "Ken",
    text: " something we should be, like i said earlier, the funding should be done and stuff like that. but many people shouldn't be in debt for trying to get insurance and take care for yourself. you also shouldn,aot have to pay twice for medical assistance. you shouldn't even pay premiums too",
  },
  {
    order: 205,
    author: "Mike",
    text: " i think obamacare would suspect from the beginning when nancy pelosi said you're going to pass it to find out what's in it.",
  },
  {
    order: 206,
    author: "Chanel",
    text: " we have to do something that was pharmaceuticals in addition to what all is paid for medicare and supplemental. i go into the donner hole every year and i,aom on eight different medications, and without them i die, so i have to have them. therefore i have to make of them and i make $7,692 on social security and if i weren't married and have the income of the spouse, i live in poverty and i'm going to be dead. do we're aware of the candidate gets his drugs, get them there. get them where we can and do what we can control the price.",
  },
  {
    order: 207,
    author: "Erick",
    text: " i know a lot of us are against big government programs. my thought was to produce the drugs through a government program. keep it very secret. certainly don't let china to find out about it. but a government program that would bring back all of the great scientists that used to work for the drug industry when they shipped it over to china. they can come back and help produce this. we could manufacture our own drugs here in america without any chain of dependency. sell them to the pharmaceutical companies at a fraction of what we're paying now.",
  },
];

const withTokens = deb.map((statement)=> {
    statement.tokenCount = encode(statement.text).length
    return statement;
})

export { withTokens };
// console.log('!!!withTokens',withTokens);