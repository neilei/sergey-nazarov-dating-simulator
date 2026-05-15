/* global monogatari */

// ==========================================
// CHAPTER 2: "INSTITUTIONAL ADOPTION"
// ==========================================

monogatari.script ({

	'Chapter2': [

		// The black screen from Ch1's ending is still showing.
		// "I told myself it was nothing." — that's where we left off.

		'Three weeks later, I was still telling myself that.',

		'show scene apartment_warm with fadeIn',
		'play music uneasy with loop fade 3',

		'The apartment was the same. The couch was the same. She was the same, mostly.',

		'show image cg_06_couch_night with fadeIn',

		'But the evenings had shifted. She\'d be right there, laptop open, LINK chart in one tab and something else in the other, but she was always on her phone now. Typing fast, then putting it face-down before I could see the screen.',

		'I\'d ask what she was working on. She\'d say "integration stuff" and change the subject.',

		'hide image cg_06_couch_night with fadeOut',

		'One night she came home at eleven. I\'d eaten without her. The pasta was cold on the counter.',

		'show character s neutral at center with fadeIn',

		'play voice s_018',
		's:neutral So we had this really productive session today about the regulatory framework for cross-chain settlement, and I think, you know, the compliance requirements are actually what\'s going to make this work at institutional scale.',

		'Regulatory framework. Compliance. Institutional scale. She used to come home and tell me about a bug in the price feed oracle that she\'d personally fixed at 2 AM, grinning like she\'d won the lottery. Now she was talking about frameworks.',

		'play voice s_019',
		's:neutral Jamie was saying that the institutional-grade infrastructure is what\'s really going to drive adoption, and I think he\'s fundamentally right about —',

		'a Who\'s Jamie?',

		'show character s contempt at center',

		'play voice s_020',
		's:contempt Oh, just, um, someone from the integration side. It\'s not — it\'s a work thing.',

		'She waved her hand like she was swatting the question out of the air. Then she said she was tired and went to bed.',

		'hide character s with fadeOut',

		'She never mentioned Jamie again. I didn\'t push it. I should have pushed it.',

		'The days blurred together after that. She was home less. When she was home, she was different, like she was performing the role of someone who lived here instead of actually living here.',

		'show scene #000000 with fadeIn',

		'show scene apartment_cold with fadeIn',

		'show image cg_09_blazer_arrival with fadeIn',

		'Then one evening she walked in and I stopped stirring.',

		'She was wearing a blazer over the flannel. I\'d never seen her wear anything over the flannel. The flannel was the whole point of her — function over fashion, authenticity over presentation, the shirt that said I don\'t care what you think of me because the work speaks for itself.',

		'hide image cg_09_blazer_arrival with fadeOut',

		'show character s neutral at center with fadeIn',

		'a New jacket?',

		'show character s annoyed_blush at center',

		'play voice s_021',
		's:annoyed_blush It\'s just, you know, when you\'re meeting with institutional partners, there\'s a certain expectation of professional presentation. It\'s not a big deal.',

		'It wasn\'t a big deal. The flannel was still underneath. That\'s what I told myself.',

		'hide character s with fadeOut',
		'show scene #000000 with fadeIn',

		'show scene apartment_cold with fadeIn',

		'She started taking calls in the other room. "Confidential," she\'d say, closing the door. "NDA." Words she used to make fun of. I\'d sit on the couch and listen to her muffled voice through the wall, catching fragments.',

		'show character s distant_reflective at center with fadeIn',

		'play voice s_022',
		's:distant_reflective ...the synchronization with existing infrastructures is what\'s going to — oh. Hey. Sorry, I have to go. Yeah. Yeah, we\'ll continue tomorrow.',

		'a Who was that?',

		'play voice s_023',
		's:distant_reflective Just the integration. Capital markets stuff. You know how it is.',

		'I didn\'t know how it was. She used to tell me how it was. She used to pull up the integration dashboard and walk me through every node, every data feed, every protocol that depended on her oracles. Mine was always the one she showed first.',

		'play voice s_024',
		's:neutral So how\'s the, um... the lending protocol thing going?',

		'The lending protocol thing. It has a name. She gave it that name, two years ago, sitting on the floor of my apartment surrounded by whitepapers. She said it was the most elegant implementation of her oracle design she\'d seen.',

		'Now it was "the lending protocol thing."',

		'a It\'s fine.',

		'She nodded and looked at her phone.',

		'hide character s with fadeOut',

		'That was the night I started counting what was missing.',

		'She stopped saying "cryptographic truth." I don\'t know when exactly — it was like noticing a sound had stopped and realizing it had been gone for days. She stopped saying "permissionless." She stopped saying "for everyone."',

		'New words took their place. Compliance. Institutional-grade. Regulatory framework. Capital markets infrastructure.',

		'stop music uneasy with fade 2',

		'One evening I was flipping channels while she was on a call in the other room. Bloomberg. Some panel about blockchain in banking.',

		'play music melancholy with loop fade 2',
		'show image cg_11_tv_jpmorgan with fadeIn',

		'A man in a tailored suit was talking. Silver tie, the kind of confidence that comes from managing other people\'s trillions.',

		'j We\'ve settled over one-point-five trillion dollars on-chain. Not testnet tokens. Not governance votes. Real dollars, real settlement, real finality. And when we needed a bridge to the public chain world, we chose Chainlink.',

		'j The wall between TradFi and DeFi is coming down faster than anyone expected. A lot of big things happen as incremental steps.',

		'The host asked him about DeFi protocols. He smiled.',

		'hide image cg_11_tv_jpmorgan with fadeOut',

		'I changed the channel.',

		'I should have kept watching.',

		'show character s distant_reflective at center with fadeIn',

		'One night, standing in the kitchen, she said it to me like she was delivering a keynote to an audience of one.',

		'play voice s_025',
		's:distant_reflective I think what people don\'t understand is that in order for us to reach hundreds of trillions of dollars in our industry, you need value to flow into our industry from existing systems. What\'s needed is not a wholesale replacement of them, but the ability for them to migrate value.',

		'She said "our industry" like it still included me. Like the lending protocol I built on her oracles still mattered in the world she was describing. A world measured in trillions, where "permissionless" was a liability and "institutional-grade" was the only thing that counted.',

		'hide character s with fadeOut',

		'I started sleeping lighter after that. Listening for the typing.',

		'show scene bedroom_bg with fadeIn',

		'2:47 AM.',

		'show image cg_07_bedroom_night with fadeIn',

		'I woke up to the blue light. She was sitting up in bed, phone held close, typing fast.',

		'play sound phone_buzz',

		'hide image cg_07_bedroom_night with fadeOut',
		'show image cg_08_bedroom_smile with fadeIn',

		'Another message came in. She read it and smiled — wide and warm and genuine, the kind of smile she used to save for when a new integration went live. She hadn\'t smiled at me like that in weeks.',

		'She caught herself and glanced over at me.',

		'I kept my eyes closed. Held my breath.',

		'After a moment, the typing resumed.',

		'hide image cg_08_bedroom_smile with fadeOut',

		'I told myself it was work. It\'s always work with her. That\'s what I love about her.',

		'Right?',

		'She left early the next morning. Meeting. Always meetings now.',

		'show scene apartment_cold with fadeIn',

		'Her laptop was open on the counter. Our laptop. We used to watch documentaries about monetary policy on it and she\'d pause every thirty seconds to explain why the narrator was wrong.',

		'A calendar notification sat in the corner of the screen.',

		'Kinexys DvP Settlement Review — CONFIDENTIAL.',

		'I didn\'t know what Kinexys was.',


		'JPMorgan\'s blockchain division.',


		'The flannel. The vocabulary. The late nights. The phone. Jamie.',

		'JPMorgan.',

		'The oracles I built my lending protocol on were being repurposed to settle trades for the biggest bank on earth. And she hadn\'t told me.',

		'stop music melancholy with fade 2',

		'I was still standing at the counter when she came home.',

		'play music confrontation with loop fade 2',
		'show character s distant_reflective at center with fadeIn',

		'She was wearing the flannel. The same flannel. But it didn\'t look right on her anymore — like she was wearing a costume of who she used to be.',

		'a We need to talk about JPMorgan.',

		'play voice s_026',
		's:distant_reflective So you saw the calendar.',

		'a How long?',

		'play voice s_027',
		's:distant_reflective It\'s not what you think. This is about the convergence. The convergence of TradFi and DeFi is what we\'ve been building toward this whole time.',

		'a We were building something permissionless. Something for everyone. You said those words. Sitting on that couch. "Not for banks. Not for institutions. For everyone."',

		'show character s contempt at center',

		'play voice s_028',
		's:contempt I think what you\'re not understanding is that without synchronization with existing infrastructures, you will not reach scale. You will not reach the hundreds of trillions of dollars that this industry needs to actually matter.',

		'a You sound like a press release.',

		'show character s annoyed_blush2 at center',

		'play voice s_029',
		's:annoyed_blush2 That\'s — that\'s not fair. I\'m trying to build the Internet of Contracts, and that means working with the people who actually have the contracts.',

		'For a second she sounded like the person I met at SmartCon. The one who stopped mid-sentence when I told her about my lending protocol, because she had seventeen follow-up questions and couldn\'t wait for me to finish.',

		'show character s contempt at center',

		'play voice s_030',
		's:contempt I think what we had was meaningful. It was a really important proof of concept. But this is bigger than us.',

		'hide character s with fadeOut',
		'show image cg_10_confrontation with fadeIn',

		'Proof of concept.',

		'She called what we built — what we were — a proof of concept. A test run for the real thing. The real thing being JPMorgan.',

		'hide image cg_10_confrontation with fadeOut',
		'show character s contempt at center with fadeIn',

		'a You said it was for everyone.',

		'show character s distant_reflective at center',

		'play voice s_031',
		's:distant_reflective I have to go. There\'s a call with the institutional partners. We can, um, we can talk about this later.',

		'hide character s with fadeOut',

		'She picked up her bag. The one with the Chainlink logo she\'d covered with a sticker from the first Devcon we went to together. The sticker was peeling.',

		'The door closed — not slammed, just closed — like a transaction finalizing.',

		'stop music confrontation with fade 3',
		'show scene #000000 with fadeIn',

		'She said "proof of concept." She said "institutional partners." She said "we can talk about this later."',

		'She didn\'t say "cryptographic truth." She didn\'t say "deep and genuine gratitude." She didn\'t say my name.',


		'jump Chapter3'
	]

});
