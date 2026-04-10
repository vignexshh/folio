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
import { windowExpandSound, windowShrinkSound, sonnerAlert } from "@/components/ui-sounds/SoundManager";

import CRTEffect from 'vault66-crt-effect';
import "vault66-crt-effect/dist/vault66-crt-effect.css";

import { AsciiArt } from "@/components/ui/ascii-art";

import Editor from "@/components/slash-menu/editor";
import { Rnd } from "react-rnd";

import { Toast } from "radix-ui";
import { toast } from "sonner";
import { Button } from "../ui/button";

import { FaLightbulb } from "react-icons/fa";


export default function Portfolio() {

    const [trafficGreen, setTrafficGreen] = useState(true);
    const baseWindowClasses = "transition-all duration-200 ease-out flex flex-col bg-[#0c1217] border w-full h-full overflow-hidden";
    const conditionalWindowClasses = trafficGreen ? "md:rounded-xl md:w-2/3 md:h-2/3" : "";
    const pathname = usePathname();
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) return;
        const timer = setTimeout(() => {
            toast("Yo Man Ssup🤘! You kinda seem new here...", {
                description: "btw, this site is BEST viewable on larger displays like LAPTOPS 💻 or iPADs... just wanted to let you know that 👍🏼",
                position: "top-center",
                duration: 30000,
                closeButton: true,

                // action: {
                //     label: "Undo",
                //     onClick: () => console.log("Undo"),
                // },
            });

            sonnerAlert.play();
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    

    return (
        <CRTEffect enabled={true}
            sweepDuration={4}
            sweepThickness={7}
            scanlineOpacity={0.1}
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
                <div className="flex items-center justify-center h-screen">
                    {/* <Rnd
                        default={{
                            x: 100,
                            y: 100,
                            width: 400,
                            height: 300,
                        }}
                        minWidth={200}
                        minHeight={150}
                        bounds="window"

                    > */}
                    {/* border-amber-400 */}
                    <div className={`${baseWindowClasses} ${conditionalWindowClasses} relative overflow-hidden`} >
                        <div className="flex flex-1 bg-[#111c24] p-3 items-center relative">
                            <div className="md:opacity-100 opacity-0">
                                <TrafficLight

                                    onMaximize={() => {

                                        trafficGreen ? windowExpandSound.play() && setTrafficGreen(!trafficGreen) : windowShrinkSound.play() && setTrafficGreen(!trafficGreen);


                                    }}

                                    onMinimize={() => toast("Event has been created", {
                                        description: "Sunday, December 03, 2023 at 9:00 AM",

                                    })} />

                            </div>


                            <div className="absolute left-1/2 -translate-x-1/2 text-gray-500">
                                vignesh@tdsbook ~ {pathname}
                            </div>


                        </div>

                        {/* remove border red in prod */}


                        {/* border-red */}
                        <div className="relative flex-50 bg-[#192936] p-3 border-t border-b overflow-scroll text-[#40ab9c]">
                            {/* nest terminal info from here  */}
                            <div className="flex flex-col w-62.5 items-left gap-2 border border-[#05edce7d] ">

                                <div className="w-40"> 

                                <AsciiArt
                                    src="/pp.jpeg"
                                    resolution={200}
                                    color="#05edce"
                                    animationStyle="matrix"
                                    animateOnView={false}
                                    animationDuration={0.1}
                                    className="mx-auto aspect-square w-full max-w-lg bg-black"
                                />
                                </div>
                                

                                <div className="text-left p-2">
                                    <TypographyH5>Software Engg • B'luru, India</TypographyH5>
                                    <TypographyH5>vigneshtd@outlook.com</TypographyH5>
                                </div>
                                <div className="text-left p-2 border-t-2">
                                    <TypographyH5>20M, 180cm, 85kgs</TypographyH5>
                                    <TypographyH5>sleepy-head, 1800kcals/day</TypographyH5>
                                </div>



                            </div>
                            <div className="p-10" />



                            {/* lower footer here */}








                        </div>



                        {/* <div className="flex-10 p-1">


                        </div> */}

                        {/* use this if you need floating appearance and remove w-full -> left-3 w-[calc(100%-1.5rem)] */}
                        <div className="absolute bottom-0 w-full bg-[#0c15174b] backdrop-blur-md text-[#05edce] p-4 border-t-[1px] border-[#05edce3f] h-15">
                            Bottom content
                        </div>



                    </div>
                    {/* </Rnd> */}
                </div>
            </div>
        </CRTEffect>


    );
}