"use client";
import type { Metadata } from "next";
import Image from "next/image";
import React from 'react';
import TrafficLight from '@arvinxu/macos-traffic-light';
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import Portfolio from "@/components/portfolio/RenderPortfio";
import { staticRadioNoiseLoop } from "@/components/ui-sounds/SoundManager";

import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import { TypeAnimation } from 'react-type-animation';
import { TypingAnimation } from "@/components/ui/typing-animation";

import { intentConfirmEntrySound } from "@/components/ui-sounds/SoundManager";

export default function PortfolioPage() {
    const [visitIntent, setVisitIntent] = useState(false);
    const [staticAudioStatus, setStaticAudioStatus] = useState(false);

    const handleIntent = () => {
        setVisitIntent(true)
        staticRadioNoiseLoop.play()

    }
    const handleAudio = () => {
        if (staticRadioNoiseLoop.playing()) {
            staticRadioNoiseLoop.stop();
            setStaticAudioStatus(false)

        } else {
            staticRadioNoiseLoop.play();
            setStaticAudioStatus(true)
        }
    }
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    return (

        <>
            {visitIntent ? <>
                <Portfolio />
                <div className="fixed bottom-6 right-6 z-50">
                    <Button
                        size="icon"
                        variant="outline" aria-label="Submit"
                        onClick={handleAudio}
                    >
                        {staticAudioStatus ? (<GoUnmute />) : (<GoMute />)}
                    </Button>
                </div>
            </> : (

                <div className="h-screen flex flex-col gap-0 items-center justify-center bg-[#13232a] font-mono items-left">
                    <div className="flex flex-col overflow-hidden">
                        <TypingAnimation className="leading-8" showCursor={false} typeSpeed={30} delay={1000}>Initializing portfolio system...</TypingAnimation>
                        <TypingAnimation className="leading-8" showCursor={false} typeSpeed={30} delay={2000}>Loading design tokens...</TypingAnimation>
                        <TypingAnimation className="leading-8" showCursor={false} typeSpeed={30} delay={3000}>Mounting component libaray</TypingAnimation>
                        <TypingAnimation className="leading-10" showCursor={false} typeSpeed={50} delay={5000}>██████████████ done </TypingAnimation>
                        <div className="pt-5 " />

                        {!show ? null : <Button variant="outline"
                            onClick={() => {
                                handleIntent();
                                intentConfirmEntrySound.play();
                            }}
                            className="px-6 py-3 bg-white font-mono">
                            confirm intent & enter page
                        </Button>}



                    </div>

                </div>

            )}
        </>
    )
}