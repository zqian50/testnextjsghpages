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
        <p>STUY BIKE<br/>STUYVESANT HIGHSCHOOL</p>
      </div>
      <div className={styles.navigate}>
        <Link onClick={()=>{setClicked("/")}} className={"/" == clicked ? styles.heavy : styles.light} href="#home">HOME</Link>
        <Link onClick={()=>{setClicked("/about")}} className={"/about" == clicked ? styles.heavy : styles.light} href="#about">ABOUT</Link>
        <Link onClick={()=>{setClicked("/services")}} className={"/services" == clicked ? styles.heavy : styles.light} href="#services">SERVICES</Link>
        <Link onClick={()=>{setClicked("/contact")}} className={"/contact" == clicked ? styles.heavy : styles.light} href="#contact">CONTACT</Link>
        <div class="dropdown">
          <button className={styles.dropbtn styles.light}>STUYBIKE LIBRARY</button>
          <div className={styles.dropdown-content}>
            <a className={styles.light} href="https://forms.gle/5H9eywqR8GmY1stM8" target="_blank" rel="noopener noreferrer">STUYBIKE LIBRARY MEMEMBERSHIP</a>
            <a className={styles.light} href="https://forms.gle/QuYFDKWaRHTT8Gh96" target="_blank" rel="noopener noreferrer">STUYBIKE LIBRARY RESERVATION</a>
          </div>
        </div>
      </div>
    </div>
  );
}
