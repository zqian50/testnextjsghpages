import styles from "./Footer.module.css"
import Image from "next/image";

export default function Footer() {
  return (
    <div id="contact" className={styles.body}>
      <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.jpg"
            width={122}
            height={119}
            alt="logo"
            className={styles.image}
            priority={true}
          />
          <div className={styles.title}>
            <h2>STUY BIKE<br/>STUYVESANT HIGHSCHOOL</h2>
          </div>
        </div>
        <div className={styles.mission}>
          <h2>#MISSION</h2>
          <p>Promoting and accelerating the transition to environmentally-friendly transportation, through the hobby/sport of bicycles and cycling.</p>
        </div>
    </div>
        <div className={styles.contact}>
          <h2>CONTACT:</h2>
          <div className={styles.emails}>
            <h2>EMAIL:</h2>
            <p>stuybiking2023@gmail.com</p>
          </div>
          <div className={styles.suggestionForm}>
            <h2>SUGGESTION FORM:</h2>
            <p>CURRENTLY NOT AVAILABLE</p>
          </div>
        </div>
        <div className={styles.socials}>
        <h2>FOLLOW</h2>
    <div className={styles.socialsContain}>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=61552001071464" alt="facebook join link">
          <Image
            src="/facebook.png"
            height={55}
            width={55}
            alt="facebook"
          />
        </a>
        <a target="_blank" href="https://twitter.com/home" alt="twitter join link">
          <Image
            src="/twitter.png"
            height={55}
            width={55}
            alt="twitter"
          />
        </a>

        <a target="_blank" href="https://www.instagram.com/stuy_bike/" alt="instagram join link">
          <Image
            src="/insta.png"
            height={55}
            width={55}
            alt="insta"
          />
        </a>
        <a target="_blank" href="https://discord.com/invite/knC5ESaJfV" alt="discord join link">
          <Image
            src="/discord.png"
            height={55}
            width={55}
            alt="discord"
          />
        </a>
    </div>
      </div>
      </div>
    </div>
  );
}
