"use client";
import type { Metadata } from "next";
import Image from "next/image";
import React from 'react';
import TrafficLight from '@arvinxu/macos-traffic-light';
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import Portfolio from "@/components/portfolio/RenderPortfolio";
import { staticRadioNoiseLoop } from "@/components/ui-sounds/SoundManager";

import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import { TypeAnimation } from 'react-type-animation';
import { TypingAnimation } from "@/components/ui/typing-animation";

import { intentConfirmEntrySound } from "@/components/ui-sounds/SoundManager";
import CRTEffect from "vault66-crt-effect";

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
    }, 17000);

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
        <CRTEffect enabled={true}
          sweepDuration={3}
          sweepThickness={1}
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

          <div className="h-screen flex flex-col gap-0 items-center justify-center bg-[#13232a] font-mono items-left text-[#678491]">
            <div className="flex flex-col overflow-hidden items-left">
              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={0} delay={100}>Initializing portfolio system...</TypingAnimation>
              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={3} delay={2000}>Loading design tokens...</TypingAnimation>
              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={3} delay={3000}>Mounting component libaray...</TypingAnimation>
              <div className="flex flex-row items-center gap-5"> 
              <TypingAnimation className="leading-15 font-bold" showCursor={false} typeSpeed={50} delay={5000}>██████████████ </TypingAnimation>
              <TypingAnimation className="leading-15 font-bold text-[#82cf90]" showCursor={false} typeSpeed={0} delay={6000}>done</TypingAnimation>
              </div>
              <div className="p-5" />

              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={0} delay={7000}>Don't search for /secrets here</TypingAnimation>
              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={3} delay={8000}>Resolving 12 case studies for no REASON...</TypingAnimation>
              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={3} delay={9000}>Connecting to netlify servers</TypingAnimation>
              <TypingAnimation className="leading-7 text-[#82cf90] font-bold" showCursor={false} typeSpeed={0} delay={10000}>ok</TypingAnimation>

              <div className="p-5" />


              <TypingAnimation className="leading-7" showCursor={false} typeSpeed={0} delay={12000}>+</TypingAnimation>
              <div className="flex flex-row items-center gap-5">
                <TypingAnimation className="leading-7  text-[#cf9482]" showCursor={false} typeSpeed={1} delay={13500}>vignesh.td v10.12.0</TypingAnimation>
                <TypingAnimation className="leading-7" showCursor={false} typeSpeed={0} delay={16000}>[⬢] ready</TypingAnimation>

              </div>

              <div className="pt-5 " />

              {!show ? null :
                <div className="items-left">
                  <Button
                    variant="default"
                    className="bg-[#678491] hover:bg-[#aed1e1] text-[#13232a]"
                    onClick={() => {
                      handleIntent();
                      intentConfirmEntrySound.play();
                    }}
                  >
                    continue
                  </Button>
                </div>
              }
            </div>

          </div>
        </CRTEffect>

      )}
    </>
  )
}