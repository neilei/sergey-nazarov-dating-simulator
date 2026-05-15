'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

// Track active wait timers so clicks can skip them
// DISABLED: this setTimeout override may cause the engine to freeze
// by interfering with the typing animation's internal timeouts.
// let _activeWaitTimer = null;
// const _origSetTimeout = window.setTimeout.bind(window);
// window.setTimeout = function (fn, delay) {
// 	const args = Array.prototype.slice.call(arguments, 2);
// 	const id = _origSetTimeout.apply(null, [fn, delay].concat(args));
// 	try {
// 		if (delay >= 500 && typeof monogatari !== 'undefined'
// 			&& monogatari.global('block') === true
// 			&& monogatari.global('playing') === true) {
// 			_activeWaitTimer = id;
// 		}
// 	} catch (e) { /* ignore before engine init */ }
// 	return id;
// };
let _activeWaitTimer = null;

$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

		// Click to skip wait commands — disabled pending fix
		// const gameScreen = document.querySelector('[data-screen="game"]');
		// if (gameScreen) {
		// 	gameScreen.addEventListener('click', function () {
		// 		if (_activeWaitTimer !== null) {
		// 			clearTimeout(_activeWaitTimer);
		// 			_activeWaitTimer = null;
		// 			monogatari.global('block', false);
		// 			monogatari.proceed({ userInitiated: true, skip: false, autoPlay: false })
		// 				.catch(function () {});
		// 		}
		// 	}, true);
		// }
	});
});
