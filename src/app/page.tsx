import Image from "next/image";
import FuzzyText from "@/components/FuzzyText";
import PlayKidsAudio from "@/components/PlayKidsAudio";

export default function Home() {
  return (

    
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      
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
      <div className="fixed bottom-4 right-4 z-50"> 
        <PlayKidsAudio/>
      </div>
    </div>
    
  );
}
