"use client";

import Image from "next/image";
import Link from "next/link";

import { TypographyH1, TypographyH2 } from "@/components/typography/TypographyH1";
import ShinyText from "@/components/ShinyText";

import { Button } from "@/components/ui/button";
import { SocialIcon } from 'react-social-icons'
import dynamic from "next/dynamic";

import { Card, CardTitle, CardContent, CardDescription, CardAction, CardHeader } from "@/components/ui/card";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);


export default function Home() {
  return (


    <div className="flex flex-col flex-1 font-sans text-zinc-50 items-center ">
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

      <div className="text-center">
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
        <div className="hidden md:block items-center justify-center">
          <div>
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


        <div className="items-center">
          <Card className="w-full max-w-sm text-left">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
          </Card>
        </div>








      </div>












      {/* <------------ audio control component ---------->*/}
      {/* <div className="fixed bottom-4 right-4 z-50"> 
        <PlayKidsAudio/>
      </div> */}
      {/* <------------ audio control component ---------->*/}
    </div>

  );
}
