"use client";

// export const metadata: Metadata = {
//     title: "Vignesh Thapanera | Software Engineer",
//     description: "Vignesh Thapanera, also known as vithan is an software developer and an aspiring product designer based in Bengaluru",
// };

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


export default function PortfolioPage() {
    const [visitIntent, setVisitIntent] = useState(false);
    const [staticAudioStatus, SetstaticAudioStatus] = useState(false);
    // const handleStaticAudio = () => {

    // }
    const handleIntent = () => {
        setVisitIntent(true)
        staticRadioNoiseLoop.play()

    }
    const handleAudio = () => {
        if (staticRadioNoiseLoop.playing()) {
            staticRadioNoiseLoop.stop();
            SetstaticAudioStatus(false)

        } else {
            staticRadioNoiseLoop.play();
            SetstaticAudioStatus(true)
        }
    }

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
                    {staticAudioStatus ? (<GoUnmute/>) : (<GoMute/>)}
                    </Button>
                </div>
            </> : (

                <div className="h-screen flex items-center justify-center bg-black text-white">
                    <Button onClick={handleIntent} className="px-6 py-3 bg-white text-black">
                        Enter Site
                    </Button>
                </div>

            )}
        </>
    )
}