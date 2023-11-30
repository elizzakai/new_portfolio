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
// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={item.date}
              icon={item.icon}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal">{item.location}</p>
              <p className="text-gray-700 dark:text-white/75">
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