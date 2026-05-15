
sergey-nazarov-dating-simulator
Complete Context Document for Script Writing

Purpose: This document provides all context needed to write the full Monogatari.js visual novel script. The script should be 200-300 lines of Monogatari engine commands (dialogue, scene changes, character sprites, music, voice, CGs, sound effects, credits). The total play time should be 4-5 minutes.

Engine: Monogatari.js (browser-based visual novel engine)
Tone: Comedic shitpost played completely straight. The humor comes from applying deadly-serious NTR (netorare/cuckolding) visual novel conventions to blockchain industry drama. Every emotional beat should be written as if this is a genuine heartbreak story — the absurdity of the subject matter IS the joke. Do not break the fourth wall. Do not wink at the audience. Play it 100% straight.

---

MONOGATARI.JS SCRIPT FORMAT REFERENCE

The script is written in script.js as a JavaScript object. Here is the exact syntax:

// Character definitions (goes in main.js or characters section)
monogatari.characters({
    's': {
        name: 'Sergey-chan',
        color: '#4a90d9',  // Chainlink blue
        directory: 'sergey',  // folder inside assets/characters/
        defaultExpression: 'neutral',
        expressions: {
            'happy': 'happy.png',
            'neutral': 'neutral.png',
            'blush': 'blush.png',
            'distant': 'distant.png',
            'annoyed': 'annoyed.png',
            'cold': 'cold_blazer.png',
            'guilty': 'guilty_blazer.png'
        }
    }
});

// Asset declarations
monogatari.assets('music', {
    'happy': 'happy_theme.mp3',
    'tense': 'tense_theme.mp3',
    'sad': 'sad_theme.mp3',
    'credits': 'credits_theme.mp3'
});

monogatari.assets('sounds', {
    'phone_buzz': 'phone_buzz.mp3',
    'door_open': 'door_open.mp3',
    'heartbeat': 'heartbeat.mp3',
    'dramatic_sting': 'dramatic_sting.mp3',
    'tv_static': 'tv_static.mp3'
});

monogatari.assets('scenes', {
    'apartment_warm': 'apartment_warm.jpg',
    'apartment_cold': 'apartment_cold.jpg',
    'apartment_night': 'apartment_night.jpg',
    'bedroom_door': 'bedroom_door.jpg',
    'black': 'black.jpg',
    'bar': 'bar.jpg'
});

monogatari.assets('images', {
    'cg_smartcon': 'cg_smartcon.png',
    'cg_domestic': 'cg_domestic.png',
    'cg_phone_glow': 'cg_phone_glow.png',
    'cg_argument': 'cg_argument.png',
    'cg_reveal': 'cg_reveal.png',
    'cg_aftermath': 'cg_aftermath.png',
    'cg_cnbc': 'cg_cnbc.png'
});

// Voice files (one per Sergey-chan dialogue line, pre-recorded)
monogatari.assets('voices', {
    's_001': 's_001.mp3',
    's_002': 's_002.mp3',
    // ... etc
});

// Script structure
monogatari.script({
    'Start': [
        // Title screen / opening
        'show scene black with fadeIn',
        'play music happy with fade 2',
        'Narrator text goes here without a character prefix.',
        'show scene apartment_warm with fadeIn',
        'show character s happy at center with fadeIn',
        'play voice s_001',
        's happy Dialogue from Sergey-chan with happy expression.',
        's neutral She switches to neutral mid-conversation.',
        'play sound phone_buzz',
        's distant Expression change to distant.',
        'show image cg_smartcon with fadeIn',  // Show a CG
        'Narrator describes the CG.',
        'hide image cg_smartcon with fadeOut',
        'stop music with fade 2',
        'jump Chapter2'  // Jump to next label
    ],

    'Chapter2': [
        // Chapter 2 content
        'show scene apartment_cold with fadeIn',
        'play music tense with fade 2',
        // ... dialogue ...
        'jump Chapter3'
    ],

    'Chapter3': [
        // ... etc
        'end'  // Ends the game
    ]
});

Key syntax rules:

- 's happy Text here' — character 's' speaks with 'happy' expression
- 's Text here' — character speaks with default expression
- 'Text here' — narrator (no character prefix)
- 'show character s happy at center with fadeIn' — show sprite
- 'hide character s with fadeOut' — hide sprite
- 'show scene scenename with fadeIn' — change background
- 'show image imagename with fadeIn' — show CG (fullscreen image)
- 'hide image imagename with fadeOut' — hide CG
- 'play music trackname with fade 2' — start BGM with 2s fade
- 'stop music with fade 2' — stop BGM
- 'play sound soundname' — play SFX once
- 'play voice voiceid' — play voice clip (auto-stops on advance)
- 'wait 1500' — pause for 1500ms
- 'jump LabelName' — go to another script label
- 'end' — end the game
- {speed:50} — inline text speed modifier (lower = faster)
- Voice files should be numbered sequentially: s_001, s_002, etc. Only Sergey-chan has voice lines.

Credits screen:
Monogatari has a built-in credits screen component. You can trigger it or build a custom one with timed text on a black screen. For a hackathon, the simplest approach is a sequence of narrator lines on a black background with the credits music playing, then 'end'.

---

CHARACTER PROFILES

Sergey-chan (s)
Who she is: Genderbent anime girl version of Sergey Nazarov, co-founder of Chainlink. Brown hair, brown eyes, always wearing her signature red-blue plaid flannel shirt with rolled sleeves. Stocky-cute build. Radiates "philosophy professor who accidentally became a tech CEO" energy.

How she talks: Long, measured, philosophical sentences. Calm and deliberate. She monologues. She builds arguments from first principles. She is anti-hype and speaks with quiet conviction. She uses "um" occasionally. She is NOT bubbly or kawaii — she's earnest, serious, and slightly socially awkward in romantic contexts. She expresses love through infrastructure metaphors.

Signature phrases — reference pool (draw from these naturally; don't force them all in, and feel free to rephrase or adapt for flow):

- "Cryptographic truth" — her #1 phrase, her worldview, her love language
- "Paper promises" — how she describes the old broken world
- "The truth machine" — what she's building
- "Trust-minimized" — technical term she applies to everything including relationships
- "Body of work" — her life philosophy
- "Deep and genuine gratitude" — how she expresses thanks
- "The convergence of TradFi and DeFi" — her obsession that grows throughout the story
- "Internet of Contracts" — her grand vision

These are flavoring, not a checklist. Use them where they land naturally. Invent new Sergey-isms if they fit the character.

Her character arc (the corruption):

- Chapter 1: Warm, earnest, awkward-romantic. Talks about DeFi with genuine passion. Applies blockchain metaphors to your relationship in endearing ways. Wears the flannel.
- Chapter 2: Growing distant. New vocabulary creeps in ("regulatory framework," "compliance," "institutional grade"). She stops saying "permissionless" and "trustless." Mentions "Jamie" once casually, then never again. Starts wearing a blazer over the flannel. Becomes defensive when questioned.
- Chapter 3: Cold, professional. Speaks in press release language. The flannel is hidden under the blazer. Uses JP Morgan talking points. The corruption arc is complete when she quotes their press release as if it's her own words.

Expression sprites available:

- happy — warm smile, eyes crinkled, flannel outfit
- neutral — default talking face, flannel
- blush — shy/vulnerable, flannel
- distant — looking away, not meeting eyes, flannel
- annoyed — defensive, furrowed brows, flannel
- cold — professional mask, blazer over flannel
- guilty — avoiding eye contact, blazer over flannel

Aave-kun (the player/protagonist)
Who he is: The player character. CEO of a small DeFi startup that was building with Chainlink. Named after the Aave protocol — represents the DeFi community that believed in Chainlink before the institutions came. He is the classic NTR protagonist: kind, trusting, slightly oblivious, devoted. He narrates in first person.

He does NOT have a sprite. His dialogue is narrator text (no character prefix). He does not have voice acting.

His arc: Blissfully in love → notices small things but rationalizes them away → growing anxiety → confrontation → devastation → hollow emptiness.

JP Morgan-kun (the rival)
Who he is: Never appears as a sprite. Only appears in CGs. He represents JPMorgan/Kinexys (their blockchain division). He should be rendered as either: a faceless man in an expensive suit with slicked-back hair, OR a suit with the JPM logo where his face should be. He is the "ugly bastard" archetype from NTR — unattractive/corporate but powerful.

He never speaks directly in the game. His presence is felt through Sergey-chan's behavioral changes and the final reveal CG.

---

PLOT OUTLINE WITH SPECIFIC BEATS

Chapter 1: "Cryptographic Truth" (~60-80 lines, ~1.5 minutes)
Setting: San Francisco apartment, evening. Warm lighting. Cozy.
Music: Happy/slice-of-life BGM
Mood: Pure vanilla romance. Wholesome. The more tender this section is, the more devastating the betrayal.

Opening: Black screen. Narrator (Aave-kun) reflects on how they met at SmartCon. Brief flashback CG (cg_smartcon) of Sergey-chan at a podium in her flannel, giving a keynote about cryptographic truth. Aave-kun was in the audience. He fell in love with her vision before he fell in love with her.

Main scene: They're at home. One year anniversary of dating. Sergey-chan is explaining something about oracle networks while Aave-kun is cooking. It's their dynamic — she monologues about blockchain philosophy, he listens with genuine interest and gentle teasing.

Key dialogue moments (these are suggestions for the kind of beats to hit — rephrase freely, invent new ones, let the conversation breathe):

- She applies blockchain metaphors to their relationship in endearing ways (e.g., comparing it to a trust-minimized system, an oracle network, etc.)
- She expresses affection awkwardly through Sergey-speak — gratitude, infrastructure metaphors, philosophical framing
- She talks about their shared mission with genuine passion — small teams, real problems, DeFi's potential
- Big Mac joke: They're eating Big Macs for their anniversary dinner. She has some rationalization for why this is optimal. This should feel natural and funny, not forced.
- Domestic CG (cg_domestic): Show them on the couch together, laptop showing green charts, Big Mac wrappers, matching energy.

THE HAIRLINE CRACK (end of Chapter 1 — must be subtle):

- Her phone buzzes. Her expression flickers briefly. She dismisses it — something about work, an integration, capital markets. The specific words matter less than the energy shift: she changes subject slightly too fast.
- Aave-kun doesn't think anything of it.
- She recovers. Chapter ends warm.

NTR technique: The player should feel uneasy but not sure why. The phone buzz is a seed planted. In retrospect, after finishing the game, the player should realize this was the first contact from JP Morgan.

---

Chapter 2: "Institutional Adoption" (~80-100 lines, ~2 minutes)
Setting: Same apartment, but weeks/months later. Lighting slightly cooler. Same space, different energy.
Music: Transition from happy to tense BGM partway through
Mood: Growing unease. The NTR slow burn. Small changes accumulate.

Opening: Time skip. Aave-kun narrates that things have been "different" lately. He can't pinpoint when it started.

The drift sequence (these are the types of signals to weave in — spread across the chapter, vary the order and phrasing, add your own):

1. She comes home late. Makes excuses involving institutional language she never used to use.
2. Her vocabulary shifts: "permissionless" → "regulatory framework," "trustless" → "compliance," "for everyone" → "institutional grade." This should be gradual, not a sudden flip.
3. She mentions "Jamie" exactly once, casually, in passing. Aave-kun asks who that is. She deflects. She never mentions the name again. The silence is the NTR signal.
4. The blazer appears. Aave-kun notices. She's dismissive about it.
5. She starts taking calls in another room. Confidential. NDA.
6. She stops asking about Aave-kun's project.

The writer should find organic ways to show these shifts — through conversation flow, not as a checklist of events. Some can be combined. Some can be shown through Aave-kun's narration rather than direct scenes.

The phone glow CG (cg_phone_glow): Late at night. Aave-kun wakes up. Sergey-chan is beside him, face lit by her phone, texting. She doesn't notice he's awake. He doesn't say anything. He pretends to be asleep.

Aave-kun narration: "I told myself it was work. It's always work with her. That's what I love about her. Right?"

The calendar discovery: Aave-kun sees a notification on their shared laptop: "Kinexys DvP Settlement Review — CONFIDENTIAL." He doesn't know what Kinexys is. He Googles it. It's JPMorgan's blockchain division. His stomach drops.

The confrontation (end of Chapter 2):
The core beats: Aave-kun confronts her about JPMorgan. She's in the blazer. She frames it as something bigger than them — the convergence, the Internet of Contracts, the future of finance. He pushes back — they were building something different, something permissionless. She says something that reveals she's already moved past DeFi. She leaves. He's alone.

The exact dialogue should feel organic to the argument, not scripted. The emotional core: she has all the information, he's grasping at fragments. She's already gone emotionally. The power imbalance should be palpable.

- CG: the argument (cg_argument).
- End with Aave-kun's internal reflection on what just happened.

NTR technique: The confrontation should feel like the protagonist reaching for his partner and grasping air. She's already emotionally gone. The audience should feel the power imbalance — she has all the information, he's operating on fragments.

---

Chapter 3: "The Beginning of Something Big" (~60-80 lines, ~1.5 minutes)
Setting: Same apartment, darker. Then the bedroom door. Then black.
Music: Sad/empty BGM transitioning to silence for the reveal, then devastating music for aftermath
Mood: Dread building to devastation to hollow emptiness.

Opening: She hasn't been home in three days. "Conference in New York."

The CNBC moment: Aave-kun is scrolling his phone. He sees a headline: "JPMorgan Completes First Public Blockchain Transaction Using Chainlink." Her name is in the article. Right next to JPMorgan's.

Narration: "I read the article three times. Each time, her name was next to his. 'A historic collaboration.' 'The beginning of something big.' Those were her words. She gave them her words."

The walk home: He goes to their apartment. The door is unlocked. It's never unlocked.

Slow the text speed here. Use {speed:30} or waits between lines. Heartbeat sound effect. Every click should feel heavy.

Narration sequence — the writer should build a slow, dread-filled approach to the bedroom. Details that signal something is wrong (signs of another person, her things displaced, the bedroom door closed). Use {speed:30} or waits between lines. Heartbeat sound effect. Every click should feel heavy. The specific details are up to the writer — the goal is mounting dread through small observations.

THE REVEAL (cg_reveal):

- He opens the door. Sound effect: door opening.
- Show CG: Sergey-chan in bed with JP Morgan-kun. NOT explicit — but unmistakable. Maybe she's clutching a sheet, he's a silhouette in a suit. Or she's sitting up, guilty expression, and there's a man's tie on the nightstand with the JPM logo.
- Beat of silence. She says something — an attempt to explain.
- Then the devastating line: she quotes JP Morgan's press release language as if it's her own. "The beginning of something big" or similar. The point is she's speaking in corporate press release now, not in her own voice. That IS the mindbreak — she's been fully absorbed into institutional thinking.
- Aave-kun's reaction should be internal. He recognizes the words aren't hers.

THE AFTERMATH (cg_aftermath):

- Fade to the apartment. Aave-kun on the couch. Alone. Same couch from the domestic bliss CG.
- The other side is empty.
- Laptop open. LINK chart on screen. $8.47.
- Big Mac wrapper from months ago still on the coffee table. (Callback to Chapter 1.)

Final narration (slow, sparse):
Aave-kun alone. Some kind of attempt to reach out to the community that also fails — typing something in Discord and deleting it, or scrolling past conversations he can't participate in anymore. The hollowness of having nothing left to say. End with a quiet, final action. Close the laptop. Or just sit there.

The writer should find the emotional truth of this moment. Less is more. Sparse lines with long waits.

CREDITS SEQUENCE:
Play credits music. Black screen with white text. The credits should deliver real facts as gut-punches — LINK price, Sergey's real accolades (White House summit, Most Influential, CFTC appointment), and the contrast with Aave-kun's irrelevance. End with "DR;NS" or another LINK Marine community reference. Then actual hackathon team credits.

The writer should find the right rhythm for these — some facts need room to breathe, others can land in quick succession. End with 'end'.

---

REAL-WORLD FACTS — RAW MATERIAL

These are real Chainlink developments and numbers to draw from. Use them as flavor and grounding, not as required dialogue. The writer should pick what fits the scene and leave the rest:

- Chainlink + SWIFT: 11,500 banks connected. Massive institutional reach.
- Chainlink + DTCC: $1.7 quadrillion in annual settlements. Corporate actions initiative with 24 institutions.
- JPMorgan Kinexys transaction: First ever public blockchain transaction by JPMorgan, May 2025. Cross-chain settlement of tokenized US Treasuries using Chainlink CCIP.
- ACE Framework (Automated Compliance Engine): Launched June 2025. Automated KYC/AML on-chain. The antithesis of permissionless DeFi.
- Mastercard partnership: 3.5 billion cardholders getting crypto access through Chainlink.
- White House Crypto Summit: March 7, 2025. Sergey attended Trump's inaugural crypto summit.
- LINK price: Traded under $10 in early 2026, ~83% below ATH, despite the most impressive institutional partnership roster in crypto.
- The LINK Marines: Community rank structure. DR;NS means "Didn't Read; Never Selling."
- CRE (Chainlink Runtime Environment): Announced SmartCon 2024. Compared to COBOL and Java — historical computing revolutions.
- SmartCon 2025 theme: "From Crypto to Capitol Hill." Featured Swift, JPMorgan, Mastercard alongside Aave and Optimism.

SERGEY'S ACTUAL QUOTES — INSPIRATION POOL

These are real Sergey quotes. They're here as raw material to draw from when writing Sergey-chan. Don't feel obligated to use them verbatim — adapt, remix, or let them inform the character's voice without directly quoting:

- "Cryptographic truth is a superior way for the entire world to operate."
- "Most of how the world operates today is based on 'just trust us' paper promises."
- "Our fundamental goal is to establish a global standard."
- "I think the pinnacle, the absolute fucking pinnacle of success, is when you build something used by millions as a public good." (rare profanity — use sparingly for impact)
- "What matters is the body of work."
- "I'm not a very public person."
- "Without synchronization with existing infrastructures, you will not reach scale."
- "In order for us to reach hundreds of trillions of dollars in our industry, you need value to flow into our industry."
- "What's needed is not a wholesale replacement of them, but the ability for them to migrate value."

The writer should internalize these and let them shape how Sergey-chan thinks and speaks, not copy-paste them into dialogue boxes.

NTR VOCABULARY AND CONVENTIONS

These are genre terms. Use the CONCEPTS, not necessarily the Japanese words, in the storytelling:

- Vanilla: The wholesome, loving content in Chapter 1. Pure and sweet.
- Corruption arc: The gradual transformation. Tracked visually by the flannel → blazer transition.
- Ugly bastard: The unattractive but powerful rival. JP Morgan-kun IS this — corporate, soulless, but has the money and power.
- Mindbreak: When a character's personality is overwritten. Sergey-chan quoting press releases = mindbreak complete.
- The flash drive scene: In NTR, the protagonist receives evidence. Here, it's the CNBC article and the Kinexys calendar notification.
- Despair end: No redemption. No reconciliation. Just the empty couch and the price chart going down.

The emotional progression must follow this pattern:

1. Trust → 2. Unease → 3. Denial → 4. Dread → 5. Confirmation → 6. Devastation → 7. Numbness

The key to good NTR pacing: the audience should figure it out before the protagonist does. Plant signals the player will recognize (the phone buzz, the "Jamie" mention, the blazer) that Aave-kun rationalizes away.

---

TECHNICAL NOTES

- Only Sergey-chan has voiced dialogue. Number voice files sequentially: s_001, s_002, etc.
- Aave-kun's lines are unvoiced narrator text (no character prefix in the script).
- Use {speed:30} for slow, dramatic text crawls in Chapter 3.
- Use wait commands (e.g., 'wait 2000') for dramatic pauses, especially in the walk-to-bedroom sequence.
- Sound effects to use: phone_buzz (Ch1 crack, Ch2 drift), door_open (Ch2 confrontation exit, Ch3 bedroom), heartbeat (Ch3 approach), dramatic_sting (reveal), tv_static (optional CNBC moment).
- Music transitions should use fade: 'play music tense with fade 3' gives a 3-second crossfade.
- CGs are shown with 'show image cg_name with fadeIn' and hidden with 'hide image cg_name with fadeOut'.
- When showing a CG, hide the character sprite first.
- The script should have 4 labels: 'Start', 'Chapter2', 'Chapter3', 'Credits'
- Target 200-300 total lines of Monogatari script commands.

---

ASSET MANIFEST

Character Sprites (Sergey-chan) — transparent PNGs, ~500×800px

| Filename | Expression | Outfit | Used In |
|---|---|---|---|
| happy.png | Warm smile | Flannel | Ch1 |
| neutral.png | Default talking | Flannel | Ch1-2 |
| blush.png | Shy/vulnerable | Flannel | Ch1 |
| distant.png | Looking away | Flannel | Ch1 end, Ch2 |
| annoyed.png | Defensive | Flannel | Ch2 |
| cold.png | Professional mask | Blazer over flannel | Ch2-3 |
| guilty.png | Avoiding eyes | Blazer over flannel | Ch2-3 |

Backgrounds — JPG, 1280×720px

| Filename | Description | Used In |
|---|---|---|
| apartment_warm.jpg | Cozy apartment, warm lighting, evening | Ch1 |
| apartment_cold.jpg | Same apartment, cooler lighting, feels emptier | Ch2 |
| apartment_night.jpg | Same apartment, dark, only laptop glow | Ch3 |
| bedroom_door.jpg | Hallway perspective looking at closed bedroom door | Ch3 |
| black.jpg | Pure black | Transitions, credits |

CGs — PNG, 1280×720px

| Filename | Description | Used In |
|---|---|---|
| cg_smartcon.png | Sergey-chan at podium, flannel, spotlight, crowd | Ch1 opening |
| cg_domestic.png | Both on couch, laptop with charts, Big Macs, cozy | Ch1 |
| cg_phone_glow.png | Sergey-chan in bed, face lit by phone, Aave-kun sleeping | Ch2 |
| cg_argument.png | Sergey-chan in blazer, arms crossed, Aave-kun reaching out | Ch2 end |
| cg_reveal.png | The bed scene. Sergey-chan + JP Morgan-kun silhouette. Non-explicit but unmistakable | Ch3 climax |
| cg_aftermath.png | Aave-kun alone on couch, empty other side, laptop showing red charts, Big Mac wrapper | Ch3 |
| cg_cnbc.png | TV showing Sergey-chan in suit shaking hands with a suit figure | Credits (optional) |

Music — MP3, 128-192kbps, looping

| Filename | Mood | Used In |
|---|---|---|
| happy_theme.mp3 | Warm slice-of-life, gentle, domestic | Ch1 |
| tense_theme.mp3 | Uneasy, building dread, minor key | Ch2 |
| sad_theme.mp3 | Devastating, empty, sparse piano or ambient | Ch3 aftermath |
| credits_theme.mp3 | Bittersweet or ironic upbeat (like the world moved on without you) | Credits |

Sound Effects — MP3, short clips

| Filename | Description | Used In |
|---|---|---|
| phone_buzz.mp3 | Phone vibration notification | Ch1, Ch2 |
| door_open.mp3 | Door opening/closing | Ch2, Ch3 |
| heartbeat.mp3 | Heartbeat, can loop or build | Ch3 approach |
| dramatic_sting.mp3 | Sharp dramatic hit | Ch3 reveal |

---

SAMPLE DIALOGUE — TONE GUIDANCE

These examples show the emotional register of each chapter. They are NOT templates — write your own dialogue that hits similar emotional notes. Deviate freely for flow and authenticity. The character voice matters more than hitting specific lines.

Chapter 1 tone (warm, endearing, she's weird about romance):
She should sound like someone who is genuinely brilliant and deeply caring but can only express affection through the lens of blockchain infrastructure. It's endearing, not cringey. Aave-kun finds it charming. The audience should too.

Chapter 2 tone (the drift, new vocabulary, emotional distance):
The shift in her language is the story. She's not lying — she genuinely believes in what she's doing. That's what makes it tragic. Aave-kun notices the vocabulary change before he notices the emotional distance. When he narrates what she "used to say" vs what she "says now," it should sting.

Chapter 3 tone (devastation, press release as dialogue):
Sparse. Heavy. The walk to the bedroom should feel like wading through water. Her final lines should sound like they came from a corporate communications department, not from someone who once said "cryptographic truth" with genuine wonder.

---

IMPORTANT NOTES FOR THE SCRIPT WRITER

Hard rules (don't break these):

1. Do NOT break the fourth wall. No meta-jokes. No "lol this is a dating sim." Play it 100% straight.
2. The ending is a DESPAIR END. No reconciliation. No hope.
3. Post-credits stinger facts should be real. LINK really did trade under $10. Sergey really was named Most Influential. He really did attend the White House summit.
4. Every Sergey-chan voice line needs a play voice s_XXX command before it. Number sequentially.

Strong guidance (follow the spirit, deviate on specifics):
5. Sergey-chan's voice should be grounded in how Sergey Nazarov actually talks — philosophical, measured, slightly awkward when emotional. She monologues. But prioritize flow and authenticity over perfectly mimicking his cadence. If a line sounds stiff, rewrite it even if it's "more accurate."
6. The flannel-to-blazer transition is the visual spine. Aave-kun should notice it, but the story shouldn't belabor the point.
7. "Jamie" is mentioned once in Chapter 2, then never again. The silence is the signal.
8. "The beginning of something big" should appear early (innocuously) and again in the reveal (devastatingly). But if the writer finds a different phrase that works better as the callback, that's fine too.
9. Pacing: Ch1 flows naturally. Ch2 accelerates. Ch3 slows way down for the approach. But trust the writer's instincts on specific timing.
10. The Big Mac is a recurring motif — but it should feel natural, not forced. If it doesn't fit a scene, skip it.

Creative latitude:
The writer should feel free to invent new Sergey-isms, add scenes not in the outline, cut beats that don't work, and find their own voice for the characters. The outline is a skeleton. The dialogue, pacing, and emotional texture are where the writer's craft should shine. Authenticity > accuracy.
