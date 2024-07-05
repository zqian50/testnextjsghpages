'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [clicked, setClicked] = useState("/");
  return (
    <div id="home" className={styles.navbar}>
      <Image
        src="/logo.jpg"
        width={170}
        height={169}
        alt="logo"
        className={styles.image}
        priority={true}
      />
      <div className={styles.title}>
        <p>STUY BIKE<br/>STUYVESANT HIGH SCHOOL</p>
      </div>
      <div className={styles.navigate}>
         <a className={styles.light} href="https://stuybike.org/#home">HOME</a>
         <a className={styles.light} href="https://stuybike.org/#about">ABOUT</a>
         <a className={styles.light} href="https://stuybike.org/#services">SERVICES</a>
         <a className={styles.light} href="https://stuybike.org/#contact">CONTACT</a>
         <a className={styles.light} href="https://forms.gle/5H9eywqR8GmY1stM8" target="_blank" rel="noopener noreferrer">STUYBIKE LIBRARY MEMEMBERSHIP</a>
         <a className={styles.light} href="https://forms.gle/QuYFDKWaRHTT8Gh96" target="_blank" rel="noopener noreferrer">STUYBIKE LIBRARY RESERVATION</a>
         <a className={styles.light} href="https://stuybike.org/comp">BIKE DESIGN COMPETITION</a>
         <a className={styles.light} href="https://stuybike.org/SBCinfographic.pdf" target="_blank" rel="noopener noreferrer">BIKE LIBRARY INFOGRAPHIC</a>
         <a className={styles.light} href="https://docs.google.com/document/d/12KAs5IuUd_RFgbrIHyHyqXExSWIxz35TI_TAbNVKj0c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">ELECTION CANDIDATE REMARKS</a>
      </div>
    </div>

  );
}


