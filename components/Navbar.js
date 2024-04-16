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
        <div class="dropdown" className={styles.dropdown}>
          <button class="dropbtn" onclick="openDrop()" onClick={openDrop()} className={styles.dropbtn} >STUYBIKE LIBRARY</button>
          <div id="Dropdown" class="dropdowncontent" className={styles.dropdowncontent}>
            <a className={styles.light} href="https://forms.gle/5H9eywqR8GmY1stM8" target="_blank" rel="noopener noreferrer">STUYBIKE LIBRARY MEMEMBERSHIP</a>
            <a className={styles.light} href="https://forms.gle/QuYFDKWaRHTT8Gh96" target="_blank" rel="noopener noreferrer">STUYBIKE LIBRARY RESERVATION</a>
          </div>
        </div>
      </div>
    </div>
<script>
  function openDrop() {
  document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
</script>
  );
}


