/* global monogatari */

// ==========================================
// CHAPTER 3: "THE BEGINNING OF SOMETHING BIG"
// ==========================================

monogatari.script ({

	'Chapter3': [

		// Continuing from Ch2's black screen.
		// "She didn't say 'cryptographic truth.' She didn't say my name."

		'play music melancholy_solo with loop fade 3',

		'She didn\'t come home that night.',


		'Or the next.',

		'play sound phone_buzz',

		'Her texts came in fragments. "Conference in New York." Then: "Extension." Then just: "Sorry. Late."',

		'show scene apartment_cold with fadeIn',

		'I sat in the apartment and counted the things she\'d left behind. The flannel, draped over her chair. Three books on oracle design. A Big Mac wrapper I couldn\'t bring myself to throw away.',

		'The laptop was mine again. LINK was down twelve percent. I didn\'t close the tab.',

		// === THE ARTICLE ===

		'play sound phone_buzz_desk',

		'Then I saw the article.',

		'show scene #000000 with fadeIn',

		'"JPMorgan Chase Completes First Public Blockchain Transaction Using Chainlink CCIP."',


		'Her name was in the second paragraph, right next to his. "A historic collaboration." "The beginning of something big."',

		'Those were her words. I recognized them the way you recognize someone\'s handwriting. She gave them her words.',

		// === THE WALK ===

		'show scene apartment_cold with fadeIn',

		'I came home. The door was unlocked — it\'s never unlocked.',


		'stop music melancholy_solo with fade 2',

		'A briefcase by the door. Leather. Monogrammed. Not hers.',

		'play music dark with loop fade 2',


		'Business cards on the counter. Kinexys. JPMorgan Chase.',


		'show image cg_14_evidence with fadeIn',

		'A blazer draped over her chair, on top of her flannel. Like it was replacing it.',

		'hide image cg_14_evidence with fadeOut',

		'The bedroom door was closed.',


		'I reached for the handle.',


		// === THE REVEAL ===

		'show image cg_12_in_bed with fadeIn',


		'He was pulling his jacket back on — tie loose, already composing himself. The briefcase sat on the nightstand where her phone used to charge.',

		'She was sitting up, sheet pulled to her collarbone. Her hair was down, loose, the way she only wore it at home. Her flannel was on the floor.',

		'She\'d never taken it off for me.',


		'play voice s_032',
		's:cold Aave-kun... this isn\'t... I can explain.',


		'She couldn\'t. She tried anyway.',

		'play voice s_033',
		's:cold This is just the convergence. You knew this was where things were going. The wall between TradFi and DeFi is coming down, and I...',

		'The sentence died the way all her sentences died now. Not because she ran out of words, but because the words she had left weren\'t hers anymore.',

		'a You told me it was for everyone.',


		'play voice s_034',
		's:distant_reflective I want you to know that I have... deep and genuine gratitude... for what we built. You were an important part of the foundation.',

		'Foundation — not the house, the thing you pour and then build something better on top of.',

		'hide image cg_12_in_bed with fadeOut',

		'show scene #000000 with fadeIn',

		'stop music dark with fade 3',

		'I closed the door. I didn\'t slam it. Transactions don\'t slam — they just finalize.',


		'jump Epilogue'
	]

});
