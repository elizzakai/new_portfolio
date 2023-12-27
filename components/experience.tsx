"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  // const { ref } = useSectionInView("Experience");

  // const { ref } = useSectionInView("Experience");

  // return (
  //   <section id="experience">
  //     <SectionHeading>My experience</SectionHeading>
  //     <VerticalTimeline>
  //       {experiencesData.map((item, index) => (
  //         <React.Fragment key={index}>
  //           <VerticalTimelineElement
  //           contentStyle={{
  //             background: "#f3f4f6",
  //             boxShadow: "none",
  //             border: "1px solid rgba(0,0,0,0.05)",
  //             textAlign: "left",
  //             padding: "1.3rem 2rem",}}>
  //             <h3>{item.title}</h3>
  //             <p>{item.location}</p>
  //             <p>{item.description}</p>
  //           </VerticalTimelineElement>
  //         </React.Fragment>
  //       ))}
  //     </VerticalTimeline>
  //   </section>
  // );
  // const { ref } = useSectionInView("Experience");
  // // const { theme } = useTheme();

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              visible={true} 
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}


// "use client";

// import React from 'react'
// import SectionHeading from './section-heading'
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { experiencesData } from '@/lib/data';


// export default function Experience() {
//   return ( 
//   <section id="experience">
//     <SectionHeading> My experience.</SectionHeading>
//     <VerticalTimeline lineColor='black'>
//     {experiencesData.map((item, index) => (
//         <React.Fragment key = {index}>
//             <VerticalTimelineElement>
//                 <h3>{item.title}</h3>
//                 <p>{item.location}</p>
//                 <p>{item.description}</p>
//                 <p>hehehe</p>
//             </VerticalTimelineElement>
//         </React.Fragment>
//       ))}
//     </VerticalTimeline>
//     hiii.
//   </section>
//   );
// }