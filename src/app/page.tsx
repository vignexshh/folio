"use client";

import Image from "next/image";
import Link from "next/link";

import { TypographyH1, TypographyH2 } from "@/components/typography/TypographyH1";
import ShinyText from "@/components/ShinyText";

import { Button } from "@/components/ui/button";
import { SocialIcon } from 'react-social-icons'
import dynamic from "next/dynamic";

import { Card, CardTitle, CardContent, CardDescription, CardAction, CardHeader } from "@/components/ui/card";
import { Squircle } from 'corner-smoothing'

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);


export default function Home() {
  return (


    <div className="flex flex-col flex-1 font-sans text-zinc-50 items-center">
      <div className="p-10"> </div>

      <div className="relative h-32 w-32 overflow-hidden rounded-full">
        <Image
          src={"/pp.jpeg"} // Fallback image
          alt="Vignesh T D's Profile Image"
          fill
          className="object-cover"
          loading="eager"
          sizes="128px"
        />
      </div>
      <div className="p-3"> </div>

      <div className="text-center border-amber-100 border w-auto p-5">
        <ShinyText
          text="namaste! meet myself"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={true}
          pauseOnHover={false}
          disabled={false}
        />
        <TypographyH1>vignesh thapanera</TypographyH1>


        <div className="p-3"> </div>
        {/* <-----------Social Group---------> */}

        <div className="flex items-center justify-center gap-1">
          <Button variant="outline" size="icon-lg" aria-label="Submit">
            <SocialIcon network="github"
              bgColor="black" fgColor="white" />
          </Button>
          <Button variant="outline" size="icon-lg" aria-label="Submit">
            <SocialIcon network="x"
              bgColor="black" fgColor="white" />
          </Button>
          <Button variant="outline" size="icon-lg" aria-label="Submit">
            <SocialIcon network="instagram"
              bgColor="black" fgColor="white" />
          </Button>
          <Button variant="outline"
            size="icon-lg"
            aria-label="Watch Onlyfans"
            onClick={() => window.open("https://www.youtube.com/watch?v=8On78J3vLr4", "_blank")}>
            <SocialIcon network="onlyfans"
              bgColor="black" fgColor="white" />

          </Button>
        </div>
        {/* <-----------Social Group---------> */}


        <div className="p-3"> </div>

        {/* <--------- github calendar ------------> */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center justify-center">
            <GitHubCalendar
              username="ascorbic"
              blockSize={7}
              blockMargin={2}
              fontSize={8}
            />
          </div>
        </div>

        {/* <--------- end of github calendar ------------> */}
        <div className="p-3"> </div>

        <div className="flex gap-2 items-center  justify-center">
          <div className="w-64 h-16 bg-amber-500 rounded-[15px] border border-white" />
          <div className="w-32 h-16 bg-red-600 rounded-[15px] border border-white" />
        </div>










      </div>
    </div>

  );
}
