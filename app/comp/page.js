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
            PARTICIPANT DESCRIPTION: Participate alone or with up to three others. Review the case scenarios released on June 3. Propose bike modifications and screenshot parts (including delivery fees) from reliable online markets or bike factories. Write a one-page, single-spaced explanation of your design and assembly steps. The budget is $50 max. Submit to StuyBiking2023@gmail.com by June 26!
          </p>
          <p>
            PUBLIC DESCRIPTION: The 2024 StuyBike Bike Design Competition will be accepting submissions from June 3 to June 26 ! This year, participants are tasked with designing bikes for a group of students from Kenya. Participants are asked to research and modify a donated bike to suit the student’s needs under a budget of $50 max. Participants can submit their proposals to our club email (StuyBiking2023@gmail.com). The winning design will be sent to a bike factory in Kenya to actually be constructed and donated to local kids at a school in desperate need of bikes.
          </p>
      </div>
    </div>
  );
}
