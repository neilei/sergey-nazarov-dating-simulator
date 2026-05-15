/* global monogatari */

// ==========================================
// CHAPTER 1: "CRYPTOGRAPHIC TRUTH"
// ==========================================

monogatari.script ({

	// ===================================================
	// OPENING — Black screen, narrator reflection
	// ===================================================
	'Start': [

		'show scene conference_bg with fadeIn',
		'play music hopeful with loop fade 3',

		'I still remember the first time I saw her.',

		'SmartCon. October. The conference hall smelled like energy drinks and unwashed hoodies.',

		'She was on stage.',

		// === FLASHBACK CG: SmartCon ===
		'show image cg_01_smartcon with fadeIn',

		'Forty-five minutes, no teleprompter, no slides after the first ten. Just her and this vision of how the world was supposed to work.',

		'play voice s_001',
		's:neutral So I think what\'s fundamentally important, and what nobody wants to talk about, is that every lending protocol, every exchange, every application you\'re building, they all depend on reliable, tamper-proof data from the real world. Without that cryptographic guarantee, you\'re just making paper promises with extra steps.',

		'The crowd was quiet. Not bored quiet. Certain quiet.',

		'She kept saying it. Over and over, like a mantra. Cryptographic truth.',

		'I didn\'t understand half of what she was talking about. Hybrid execution environments. Decentralized oracle networks. Consensus mechanisms for off-chain computation.',

		'But the way she said it, like she\'d found the answer to a question the rest of us hadn\'t even thought to ask,',

		'I don\'t think I blinked once.',

		'She looked out at the crowd during the Q&A — not performing, just certain.',

		'And for a second, maybe I imagined it, she looked right at me.',

		'hide image cg_01_smartcon with fadeOut',

		// === MEETING FLASHBACK ===
		'show image cg_02_meeting with fadeIn',

		'We met after her talk. She was standing by the coffee station, explaining oracle networks to a venture capitalist who had clearly stopped listening three minutes ago.',

		'I handed her a drink. She didn\'t stop talking, but she took it.',

		'I told her about the lending protocol I was building. How we used her oracles for every price feed, every liquidation trigger. She stopped mid-sentence, which I\'d learn was rare, and started asking questions faster than I could answer them.',

		'That was enough.',

		'hide image cg_02_meeting with fadeOut',

		// === MOVING IN FLASHBACK ===
		'show image cg_03_moving_in with fadeIn',

		'Six months later, she showed up at my place with three boxes of books, a custom mechanical keyboard, and no furniture.',

		'hide image cg_03_moving_in with fadeOut',

		// === TRANSITION ===
		'show scene #000000 with fadeIn',

		'One year later.',

		// ===================================================
		// MAIN SCENE — Apartment, evening
		// ===================================================
		'show scene apartment_warm with fadeIn',

		'Our apartment. San Francisco. The kind of evening where the fog sits just below the window line and the city glows through it like a circuit board.',

		'show character s neutral at center with fadeIn',

		'She was leaning against the kitchen counter, doing that thing she does where she stares at nothing and builds an argument in her head. I\'d learned to recognize the silence before the monologue.',

		'I stirred the sauce. Waited.',

		// --- Sergey-chan's opening monologue ---
		'play voice s_002',
		's:neutral So I think what people fundamentally misunderstand about relationships is that they apply the same trust assumptions as traditional finance.',

		'Here we go.',

		'play voice s_003',
		's:neutral When two people enter a relationship, what they\'re really creating is a kind of bilateral smart contract, right? Both parties have obligations, both parties have expected outputs, and the execution of that contract over time is what determines the value of the whole system.',

		'She paused. Tucked a strand of brown hair behind her ear.',

		'play voice s_004',
		's:neutral And what\'s really beautiful about it, fundamentally beautiful, is that the longer the contract executes without a dispute, the more trust-minimized it becomes. You stop needing to verify because the body of work speaks for itself.',

		'I turned off the burner. She hadn\'t noticed I\'d been cooking.',

		'play voice s_005',
		's:annoyed_blush I think what I\'m trying to say is, um... that what we have is... you know, it\'s meaningful. To me. As a person. I think it\'s increasingly rare, what this is.',

		'She said it like she was defending a thesis, not celebrating an anniversary.',

		'a You could just say you love me, you know.',

		'play voice s_006',
		's:happy That\'s, that\'s essentially what I\'m saying! Love is really just cryptographic truth that hasn\'t been disputed, and I think people don\'t appreciate that enough.',

		'She was blushing. The great oracle philosopher, blushing because she accidentally said something romantic.',

		'I kissed her forehead. She pretended to be annoyed.',

		// === BIG MAC ANNIVERSARY DINNER ===
		'hide character s with fadeOut',

		'That was the night she told me her anniversary plan.',

		'show scene apartment_kitchen with fadeIn',

		'She\'d insisted on Big Macs for our anniversary dinner.',

		'show image cg_04_bigmac with fadeIn',

		'play voice s_007',
		's:excited You know what I love about these? There\'s no information asymmetry. You know exactly what you\'re getting. No paper promises about what\'s in the patty.',

		'I unwrapped mine. She\'d already finished half of hers.',

		'play voice s_008',
		's:happy The Big Mac is, in a certain sense, the most trust-minimized meal in existence. Consistent, reliable, globally recognized.',

		'She held up a fry like she was presenting evidence.',

		'play voice s_009',
		's:excited And honestly? It\'s just good. Sometimes the best systems are the simplest ones.',

		'a Happy anniversary, weirdo.',

		'She grinned. Ketchup on her chin. The flannel rolled up to her elbows like always.',

		'I reached across and wiped the ketchup off her chin with my thumb. She didn\'t flinch.',

		'hide image cg_04_bigmac with fadeOut',

		// === DOMESTIC BLISS — Couch scene ===
		'show scene apartment_warm with fadeIn',

		'show image cg_05_couch_afternoon with fadeIn',

		'Later. The couch. Her laptop open, green candles on the LINK chart. My head against her shoulder.',

		'play voice s_010',
		's:happy I\'ve been thinking about this, and I think our apartment is increasingly becoming like a, you know, a well-run system. Not because everything is optimized, but because everything has its place.',

		'She gestured around the room without looking up from her screen.',

		'play voice s_011',
		's:neutral The refrigerator is essentially cold storage. And the bookshelf is kind of an immutable ledger of everything we\'ve read together. I think there\'s something meaningful about that.',

		'She turned to me.',

		'play voice s_012',
		's:annoyed_blush And the couch is, um, I think the couch is where we reach consensus. In a certain sense.',

		'I pulled her closer.',

		'play voice s_013',
		's:happy You know what I think is the most exciting thing happening right now? It\'s these small teams. These lending protocols and DEXs, building something permissionless. Something for everyone. Not for banks, not for institutions. For everyone. And I think that\'s, you know, that\'s what cryptographic truth actually means in practice.',

		'Her oracles fed my protocol. My protocol justified her oracles. We were part of the same machine, building the same thing from different ends.',

		'a This is enough. Just this. You know that, right?',

		'play voice s_014',
		's:happy Yeah. I, um... I want to express my deep and genuine gratitude for this. For the uptime. I think what\'s interesting is that you can\'t quantify it, and that\'s actually what makes it valuable.',

		'She said "deep and genuine gratitude" like she was thanking a conference audience. But she reached for my hand and held on tight.',

		'That was enough.',

		'hide image cg_05_couch_afternoon with fadeOut',

		// ===================================================
		// THE CRACK — Phone buzzes, seeds unease
		// ===================================================
		'show character s happy at center with fadeIn',

		'play voice s_015',
		's:happy So I think the pinnacle of, you know, the absolute pinnacle of what we\'re building together is when the system operates so smoothly that you forget it\'s even running, and I think that\'s really what,',

		'play sound phone_buzz',
		'stop music hopeful with fade 3',

		'show character s distant_reflective at center',

		'Her phone buzzed on the counter.',

		'The sentence died.',

		'She glanced at the screen. Something moved behind her eyes, a calculation, fast and private, like a transaction clearing before I could read the ledger.',

		'play voice s_016',
		's:distant_reflective Sorry, one second. I just need to, um, check this real quick.',

		'She turned away. Typed something. Her jaw was set in that way it gets when she\'s on a call with someone important.',

		'Five seconds. Ten.',

		'She put the phone down. When she turned back, the smile was already in place.',

		'play voice s_017',
		's:happy Sorry about that! It\'s just a, um, a work thing. An integration. Capital markets infrastructure. Nothing to worry about.',

		'show character s happy at center',

		'She picked up where she\'d left off. Something about consensus mechanisms and domesticity. The words washed over me.',

		'Capital markets infrastructure.',

		'She\'d never used that phrase before.',

		'I told myself it was nothing.',

		'hide character s with fadeOut',
		'show scene #000000 with fadeIn',

		'jump Chapter2'
	]

});
