'use client'

import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import './globals.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.competitionInfo}>
          <p>
            ABOUT: The bike design competition presents a real-life scenario requiring bikes tailored to specific needs. This year’s focus is on students from Kenya. Participants must modify a donated bike within a $50 budget and submit proposals to StuyBiking2023@gmail.com. Proposals should include screenshots of intended parts, a rationale for the modifications, and a description of shipping and assembly. A committee will select the top design, which will be constructed at a bike factory in Kenya and donated to local kids.
          </p>
          <p>
            PURPOSE: Kenya is one of the world's largest importers of used cars, many of which were banned in Europe for over-emission and "dumped" in developing countries like Kenya. Less than 10% of Kenyans own a car. Bicycles are cheaper, easier to store and maintain, and produce lower carbon emissions. We aim to design a bike suited to the local geography and individual needs, such as carrying capacity and ease of repair. This will help improve the lives of economically disadvantaged students in Kenya through a healthy, green, and sustainable means.
          </p>
          <p>
            PARTICIPANT DESCRIPTION: Participate alone or with up to three others. Review the case scenarios released on June 15th. Propose bike modifications and screenshot parts (including delivery fees) from reliable online markets or bike factories. Write a one-page, single-spaced explanation of your design and assembly steps. The budget is $50 max. Submit to StuyBiking2023@gmail.com by June 26!
          </p>
          <p>
            PUBLIC DESCRIPTION: The 2024 StuyBike Bike Design Competition will be accepting submissions from June 26th to August 1st ! This year, participants are tasked with designing bikes for a group of students from Kenya. Participants are asked to research and modify a donated bike to suit the student’s needs under a budget of $50 max. Participants can submit their proposals to our club email (StuyBiking2023@gmail.com). The winning design will be sent to a bike factory in Kenya to actually be constructed and donated to local kids at a school in desperate need of bikes.
          </p>
          <p>
            CASE SCENARIO: 
Kenya, like many other developing nations, faces difficulties in transportation infrastructure and availability. Existing bike designs do not fully address the needs and conditions of Kenyan users; thus we have decided to launch this competition to modify bikes specifically for our student peers in Kenya. 
From a global environmental perspective, kenya is home to a large second car market. Many of these used cars were banned in Europe for over-emission and "dumped" in developing countries like Kenya. Bicycles, on the other hand, are less expensive, easier to store and maintain and produce lower carbon emissions. However, bikes are seen as a scarcity in much of Kenya. Furthermore, the current economic crisis hinders the Kenyans. According to CEIC data, the minimum wage in Kenya is 2.71 dollars per hour, and the unemployment rate was 5.69% in 2023, after the economic recession and job cuts. Akoth.J from the local village expressed his desire for a bike. ‘If I had a bike I would not have to travel so far to go to school. Every morning I wake up before the birds and I have to walk two hours to go to school’. There is a need for cheaper and more durable bikes in Kenya as a mode of transportation, not only for ease of living, but also for practical efficiency. 




One reason why modifications are required to the everyday bike is because of the terrain and climate in Kenya. In the capital, Nairobi, bikers must overcome steep hills, uneven surfacing of roads and even muddy, bumpy lanes. Wanjiku.E (14) from the local school told us ‘the road back to home is bumpy. I cannot cycle and I have to push my bike and books up a steep hill’. Bikes must also be made of material that can withstand Kenya’s tropical climate, including periods of intense heat, heavy rain and humidity. Kadogo.R (15) said that her bike began to melt after being placed in the Kenyan Sun. ‘It was so scary! My handles were dripping and so hot to touch!’ Many teens need bikes not only for commuting - Mutunga.K (12) said ‘I have to carry back water and buy food from the market each day for my family.’ Many others have expressed their desire towards owning a bike, but still acknowledge the issues surrounding their bikes not addressing specific needs. Existing bikes in Kenya are often second-hand, and lack essential parts such as working brakes and strong handle-grips, as well as ergonomic equipment. This poses risks to riders, especially on rocky, uneven terrain which is prevalent in Kenya. Enhancing safety and comfort through innovative modifications is crucial to encouraging more people to use bikes

          </p>
      </div>
    </div>
  );
}
