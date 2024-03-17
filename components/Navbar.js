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
        <div className={styles.dropDown}>
          <button>Library</button>
          <a target="_blank" href="https://forms.gle/PE9AfxDfMZpnFY5bA">Membership Application</a>
          <a target="_blank" href="https://forms.gle/seACaXxP1ov3xaGJ6">Bike Reservation</a>
        </div>
      </div>
    </div>
  );
}
