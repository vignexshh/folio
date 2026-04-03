"use client";

import Image from "next/image";

import { TypographyH1, TypographyH2 } from "@/components/typography/TypographyH1";
import ShinyText from "@/components/ShinyText";

import { Button } from "@/components/ui/button";
import { SocialIcon } from 'react-social-icons'
import { GitHubCalendar } from "react-github-calendar";

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
        {/* <TypographyH2>hai, namaste im</TypographyH2> */}

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
          <Button variant="outline" size="icon-lg" aria-label="Submit">
            <SocialIcon network="onlyfans"
              bgColor="black" fgColor="white" />
          </Button>
        </div>
        {/* <-----------Social Group---------> */}


        <div className="p-3"> </div>
        <GitHubCalendar
        username="vignexshh"
        blockSize={7}
        blockMargin={2}
        fontSize={8}
      />


        
      </div>












      {/* <------------ audio control component ---------->*/}
      {/* <div className="fixed bottom-4 right-4 z-50"> 
        <PlayKidsAudio/>
      </div> */}
      {/* <------------ audio control component ---------->*/}
    </div>

  );
}
