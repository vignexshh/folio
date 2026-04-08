"use client";

import { Howl, Howler } from 'howler';

export const windowExpandSound = new Howl({
    src: ["/window-expand-sound.mp3"],
    volume:0.4
});

export const windowShrinkSound = new Howl({
    src: ["/window-shrink-sound.mp3"],
    volume:0.4
});

export const staticRadioNoiseLoop = new Howl({
    src: ["/static-noise.mp3"],
    volume:0.05,
    loop: true
})

export const intentConfirmEntrySound = new Howl({
    src: ["/ui_intent_entry.mp3"],
    volume:0.9,
})
