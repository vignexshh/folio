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

export default function PortfolioPage() {
    const [visitIntent, setVisitIntent] = useState(false);
    const handleIntent = () => {
        setVisitIntent(true)
        staticRadioNoiseLoop.play()

    }

    return (

        <>
            {visitIntent ? <Portfolio /> : (

                <div className="h-screen flex items-center justify-center bg-black text-white">
                    <Button onClick={handleIntent} className="px-6 py-3 bg-white text-black">
                        Enter Site
                    </Button>
                </div>

            )}
        </>
    )
}