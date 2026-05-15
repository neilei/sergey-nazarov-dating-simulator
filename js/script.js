/* global monogatari */

// ==========================================
// MESSAGES
// ==========================================
monogatari.action ('message').messages ({});

// ==========================================
// NOTIFICATIONS
// ==========================================
monogatari.action ('notification').notifications ({});

// ==========================================
// PARTICLES
// ==========================================
monogatari.action ('particles').particles ({});

// ==========================================
// CANVAS
// ==========================================
monogatari.action ('canvas').objects ({});

// ==========================================
// CREDITS
// ==========================================
monogatari.configuration ('credits', {});

// ==========================================
// GALLERY
// ==========================================
monogatari.assets ('gallery', {});

// ==========================================
// MUSIC
// ==========================================
monogatari.assets ('music', {
	'hopeful': 'hopeful_daybreak.mp3',
	'uneasy': 'uneasy_echoed_art.mp3',
	'melancholy': 'melancholy_piano_sad2.mp3',
	'melancholy_solo': 'melancholy_piano_solo.mp3',
	'dark': 'dark_foreboding.mp3',
	'confrontation': 'confrontation_suspense3.mp3',
	'nostalgic': 'nostalgic_memories.mp3',
	'bittersweet': 'bittersweet_pv_emotional.mp3'
});

// ==========================================
// VOICES
// ==========================================
monogatari.assets ('voices', {
	's_001': 's_001.mp3',
	's_002': 's_002.mp3',
	's_003': 's_003.mp3',
	's_004': 's_004.mp3',
	's_005': 's_005.mp3',
	's_006': 's_006.mp3',
	's_007': 's_007.mp3',
	's_008': 's_008.mp3',
	's_009': 's_009.mp3',
	's_010': 's_010.mp3',
	's_011': 's_011.mp3',
	's_012': 's_012.mp3',
	's_013': 's_013.mp3',
	's_014': 's_014.mp3',
	's_015': 's_015.mp3',
	's_016': 's_016.mp3',
	's_017': 's_017.mp3',
	's_018': 's_018.mp3',
	's_019': 's_019.mp3',
	's_020': 's_020.mp3',
	's_021': 's_021.mp3',
	's_022': 's_022.mp3',
	's_023': 's_023.mp3',
	's_024': 's_024.mp3',
	's_025': 's_025.mp3',
	's_026': 's_026.mp3',
	's_027': 's_027.mp3',
	's_028': 's_028.mp3',
	's_029': 's_029.mp3',
	's_030': 's_030.mp3',
	's_031': 's_031.mp3',
	's_032': 's_032.mp3',
	's_033': 's_033.mp3',
	's_034': 's_034.mp3'
});

// ==========================================
// SOUNDS
// ==========================================
monogatari.assets ('sounds', {
	'phone_buzz': 'phone_buzz_new.mp3',
	'phone_buzz_desk': 'phone_buzz_desk.mp3'
});

// ==========================================
// VIDEOS
// ==========================================
monogatari.assets ('videos', {});

// ==========================================
// IMAGES (CGs) — prefixed with appearance order
// ==========================================
monogatari.assets ('images', {
	// Ch1
	'cg_01_smartcon': 'cg_01_smartcon.png',
	'cg_02_meeting': 'cg_02_meeting.png',
	'cg_03_moving_in': 'cg_03_moving_in.png',
	'cg_04_bigmac': 'cg_04_bigmac.png',
	'cg_05_couch_afternoon': 'cg_05_couch_afternoon.png',
	// Ch2
	'cg_06_couch_night': 'cg_06_couch_night.png',
	'cg_07_bedroom_night': 'cg_07_bedroom_night.png',
	'cg_08_bedroom_smile': 'cg_08_bedroom_smile.png',
	'cg_09_blazer_arrival': 'cg_09_blazer_arrival.png',
	'cg_10_confrontation': 'cg_10_confrontation.png',
	'cg_11_tv_jpmorgan': 'cg_11_tv_jpmorgan.png',
	// Ch3
	'cg_12_in_bed': 'cg_12_in_bed.png',
	'cg_14_evidence': 'cg_14_evidence.png',
	// Epilogue
	'cg_15_wrapper': 'cg_15_wrapper.png'
});

// ==========================================
// SCENES (Backgrounds)
// ==========================================
monogatari.assets ('scenes', {
	'conference_bg': 'conference_bg.png',
	'apartment_warm': 'apartment_warm.png',
	'apartment_kitchen': 'apartment_kitchen.png',
	'apartment_cold': 'apartment_cold.png',
	'apartment_aftermath': 'apartment_aftermath.png',
	'bedroom_bg': 'bedroom_bg.png'
});

// ==========================================
// CHARACTERS
// ==========================================
monogatari.characters ({
	's': {
		name: 'Sergey-chan',
		color: '#89B4FA',
		directory: 'sergey',
		sprites: {
			happy: 'happy.png',
			neutral: 'neutral.png',
			excited: 'excited.png',
			annoyed_blush: 'annoyed_blush.png',
			annoyed_blush2: 'annoyed_blush2.png',
			contempt: 'contempt.png',
			distant_reflective: 'distant_reflective.png',
			cold: 'cold.png'
		},
		default_expression: 'neutral'
	},
	'a': {
		name: 'Aave-kun',
		color: '#B6509E'
	},
	'j': {
		name: 'JPMorgan-kun',
		color: '#5B9BD5'
	}
});

// Script content split into chapter files:
// - js/chapter1.js — Chapter 1: Cryptographic Truth (s_001–s_017)
// - js/chapter2.js — Chapter 2: Institutional Adoption (s_018–s_031)
// - js/chapter3.js — Chapter 3: The Beginning of Something Big (s_032–s_034)
// - js/epilogue.js — Epilogue (no voiced lines)
