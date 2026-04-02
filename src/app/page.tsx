import Image from "next/image";
import FuzzyText from "@/components/FuzzyText";
import PlayKidsAudio from "@/components/PlayKidsAudio";

export default function Home() {
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <PlayKidsAudio/>
      <div className="items-center ">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover
          fontSize={30}
          fuzzRange={15}
        >
          200:OK
        </FuzzyText>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover
          fontSize={50}
          fuzzRange={15}
        >
          WELCOME TO VIGNESHTD.COM
        </FuzzyText>
      </div>
    </div>
  );
}
