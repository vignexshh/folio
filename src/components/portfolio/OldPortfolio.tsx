// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { TypographyH1, TypographyH2, TypographyH4 } from "@/components/typography/Typograpy"
// import ShinyText from "@/components/ShinyText";

// import { Button } from "@/components/ui/button";
// import { SocialIcon } from 'react-social-icons'
// import dynamic from "next/dynamic";

// import PyChartUsageStats from "@/components/PythonUsageChart";
// // import { CircularProgressbar } from 'react-circular-progressbar';
// // import 'react-circular-progressbar/dist/styles.css';


// import AuroraShader from "@/components/lightswind/aurora-shader";


// const GitHubCalendar = dynamic(
//   () =>
//     import("react-github-calendar").then(
//       (mod) => mod.GitHubCalendar
//     ),
//   { ssr: false }
// );


// export default function Home() {
//   return (


//     <div className="flex flex-col flex-1 font-sans text-zinc-50 items-center">
      
//       <div className="p-8"> </div>

//       <div className="relative h-32 w-32 overflow-hidden rounded-full bg-green-950 border-2 border-green-500">
//         <Image
//           src={"/pp.jpeg"} // Fallback image
//           alt="Vignesh T D's Profile Image"
//           fill
//           className="object-cover"
//           loading="eager"
//           sizes="128px"
//         />
//       </div>


//       <div className="text-center rounded-[40px] w-auto p-10">
//         <ShinyText
//           text="namaste! meet myself"
//           speed={2}
//           delay={0}
//           color="#b5b5b5"
//           shineColor="#ffffff"
//           spread={120}
//           direction="left"
//           yoyo={true}
//           pauseOnHover={false}
//           disabled={false}
//         />
//         <TypographyH1>vignesh thapanera</TypographyH1>


//         <div className="p-3"> </div>
//         {/* <-----------Social Group---------> */}

//         <div className="flex items-center justify-center gap-1">
//           <Button variant="outline" size="icon-lg" aria-label="Submit">
//             <SocialIcon network="github"
//               bgColor="black" fgColor="white" />
//           </Button>
//           <Button variant="outline" size="icon-lg" aria-label="Submit">
//             <SocialIcon network="x"
//               bgColor="black" fgColor="white" />
//           </Button>
//           <Button variant="outline" size="icon-lg" aria-label="Submit">
//             <SocialIcon network="instagram"
//               bgColor="black" fgColor="white" />
//           </Button>
//           <Button variant="outline"
//             size="icon-lg"
//             aria-label="Watch Onlyfans"
//             onClick={() => window.open("https://www.youtube.com/watch?v=8On78J3vLr4", "_blank")}>
//             <SocialIcon network="onlyfans"
//               bgColor="black" fgColor="white" />

//           </Button>
//         </div>
//         {/* <-----------Social Group---------> */}


//         <div className="p-3"> </div>

//         {/* <--------- github calendar ------------> */}
//         {/* <div className="hidden md:flex items-center justify-center"> */}
//         <div className="overflow-scroll flex items-center justify-center">

//           <div className="flex  w-72  md:w-full items-center justify-center">
//             <GitHubCalendar
//               username="ascorbic"
//               blockSize={12}
//               blockMargin={2}
//               fontSize={8}
//             />
//           </div>
//         </div>

//         {/* <--------- end of github calendar ------------> */}
//         <div className="p-3"> </div>

//         <div className="flex gap-2 items-center justify-center ">
//           <div className="overflow-hidden bg-green-950 relative w-48 sm:w-48 md:w-72 h-32 rounded-[20px] text-left">
//           {/* <div className="overflow-hidden bg-green-950 relative w-2/3 h-32 rounded-[20px] text-left"> */}

//             <div className="">

//               {/* <PyChartUsageStats/> */}

//               <AuroraShader
//                 colorStops={['#2bff64', '#7cff67', '#20a151']}
//                 amplitude={1.0}
//                 blend={0.5}
//                 speed={2}
//               />

//               <div className="flex relative z-10 mt-2 ml-3 dark:text-green-950 text-green-950">
//                 <TypographyH4>
//                   Python
//                 </TypographyH4>



//               </div>

//             </div>
//           </div>
//           <div className="overflow-hidden relative w-24 sm:w-24 md:w-36 h-32 bg-orange-950 rounded-[20px] text-left">
//             <div className="">

//               <div className="relative z-10 mt-2 ml-3 dark:text-orange-950 text-orange-950">
//                 <TypographyH4>
//                   Rust
//                 </TypographyH4>
//               </div>

//               <AuroraShader
//                 colorStops={['#ffc400', '#a64000', '#5c0600']}
//                 amplitude={1.0}
//                 blend={0.5}
//                 speed={2}
//               />


//             </div>
//           </div>
//         </div>











//       </div>
//     </div>

//   );
// }
