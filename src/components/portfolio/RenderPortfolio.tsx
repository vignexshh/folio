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
import { useRouter } from "next/router";

import { TypographyH4, TypographyH5 } from "@/components/typography/Typograpy";
import { usePathname } from "next/navigation";
import { windowExpandSound, windowShrinkSound } from "@/components/ui-sounds/SoundManager";

import CRTEffect from 'vault66-crt-effect';
import "vault66-crt-effect/dist/vault66-crt-effect.css";

import { AsciiArt } from "@/components/ui/ascii-art";

import Editor from "@/components/slash-menu/editor";



export default function Portfolio() {

    const [trafficGreen, setTrafficGreen] = useState(true);
    const baseWindowClasses = "transition-all duration-200 ease-out flex flex-col bg-[#0c1217] border w-full h-full overflow-hidden";
    const conditionalWindowClasses = trafficGreen ? "md:rounded-2xl md:w-2/3 md:h-2/3" : "";
    const pathname = usePathname();
    return (
        <CRTEffect enabled={true}
            sweepDuration={4}
            sweepThickness={7}
            scanlineOpacity={0.3}
            theme="blue"
            scanlineThickness={0.5}
            enableScanlines={true}
            enableSweep={true}
            enableGlow={false}
            glowColor="rgba(0, 105, 105, 0.22)"

            enableEdgeGlow={false}
            edgeGlowColor="rgba(0, 186, 255, 0.8)"
            edgeGlowSize={10}
            enableFlicker={true}>
            <div className="bg-[#000000] bg-[url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg')] bg-cover font-mono">
                <div className="flex items-center justify-center h-screen border-red-600">
                    <div className={`${baseWindowClasses} ${conditionalWindowClasses}`}>
                        <div className="flex flex-1 bg-[#192936 p-3 items-center relative">
                            <TrafficLight
                                onMaximize={() => {

                                    trafficGreen ? windowExpandSound.play() && setTrafficGreen(!trafficGreen) : windowShrinkSound.play() && setTrafficGreen(!trafficGreen);


                                }} />


                            <div className="absolute left-1/2 -translate-x-1/2 text-gray-500">
                                vignesh@tdsbook ~ {pathname}
                            </div>


                        </div>

                        <div className="flex-50 bg-[#192936] p-3 border-t border-b overflow-scroll">
                            <div className="flex flex-col w-62.5 items-left gap-2 border-2">
                                <AsciiArt
                                    src="/pp.jpeg"
                                    resolution={100}
                                    color="#05edce"
                                    animationStyle="matrix"
                                    animateOnView={false}
                                    animationDuration={0.1}
                                    className="mx-auto aspect-square w-full max-w-lg bg-black"
                                />

                                <div className="text-left p-2 border-t-2">
                                    <TypographyH5>Software Engg • B'luru, India</TypographyH5>
                                    <TypographyH5>vigneshtd@outlook.com</TypographyH5>
                                </div>
                                <div className="text-left p-2 border-t-2">
                                    <TypographyH5>20M, 180cm, 85kgs</TypographyH5>
                                    <TypographyH5>sleepy-head, 1800kcals/day</TypographyH5>
                                </div>
                            </div>


                        </div>

                        <div className="flex-4 p-1">


                        </div>
                    </div>
                </div>
            </div>
        </CRTEffect>


    );
}