'use client'

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Leadshiptag from "@/components/leadshiptag";
import Leadshipcard from "@/components/leadshipcard";
import './globals.css'

export default function Home() {
  const [inx1, setInx1] = useState(0);

  function shiftInx1(n, arr) {
    var len = arr.length;
    if (n > len) {
      n = n%len;
    } else if (n < 0) {
      n = len + (n % 7);
    }
    var inx2 = n+7;
    if (inx2>len) {
      return arr.slice(n, len).concat(arr.slice(0, inx2-len));
    } else {
      return arr.slice(n, inx2);
    }
  }


  const missionFlashes = [
    "HOBBY OF BIKING",
    "ACCESSIBILITY OF BIKING",
    "ADVOCACY FOR BIKING",
    "BIKING FOR ENVIRONMENT",
  ]
  const leadershipTeam = [
    {name: "Zhengrong (Ronny) Qian",
      headshot: "/zhengrongqian0.jpeg",
      photo: "/zhengrongqian1.jpeg",
      pronouns: "He/Him",
      title: "President",
      email: "zqian50@stuy.edu",
      blurb: "Hey there, I am Ronny Qian, a nature lover and a dedicated biker! Biking is not simply a means of commute; it brings us together as a community to voice our shared future. Join us on our quest to promote a healthy, green, and sustainable lifestyle through the fun of biking!"
    },
    {name: "Axel Stahl",
      headshot: "/axelstahl0.jpg",
      photo: "/axelstal1.jpg",
      pronouns: "He/Him",
      title: "Director of IT",
      email: "astahl60@gmail.com",
      blurb: "Hello, I am a sophomore at Stuyvesant Highschool. I enjoy reading, listening to jazz and other music, playing piano, and computer science."
    },
    {name: "Lang Liao",
      headshot: "/langliao0.jpg",
      photo: "/langliao1.jpg",
      pronouns: "He/Him",
      title: "Stuybike Cooperation",
      email: "lliao70@stuy.edu",
      blurb: "Sometimes I actually prefer a scooter over a bike as it’s more compact and easier to carry around. One of my main interests is doing martial arts."
    },
    {name: "Jakob Weir",
      headshot: "/jakobweir0.jpg",
      photo: "/jakobweir1.jpg",
      pronouns: "He/Him",
      title: "CitiBike Collaboration",
      email: "jweir50@stuy.edu",
      blurb: "I frequently bike no matter the weather, sometimes to school and sometimes long distances. I really like the subway and can name almost all the subway stations in New York. I am really into social deduction games like Mafia and have a club dedicated to them."
    },
    {name: "Jackson",
      headshot: "/jacksonhayes0.jpg",
      photo: "/jacksonhayes1.jpg",
      pronouns: "He/Him",
      title: "Director of Outreach and Cooperations",
      email: "jhayes60@stuy.edu",
      blurb: "A general all rounder nerd who's into physics, math, and, of course, biking! You can normally find me chronically online on discord reading about some physics article or trying to model a mathematical problem (and failing horribly). I also play ultimate frisbee and ski occasionally."
    },
    {name: "Brian Lim",
      headshot: "/brianlim0.jpg",
      photo: "/brianlim1.jpg",
      pronouns: "He/Him",
      title: "Graphic Design",
      email: "blim60@stuy.edu",
      blurb: "I’m Brian and I work for Stuybike. I like bikes and vanilla ice cream 👍 "
    },
    {name: "Theodore Eicher",
      headshot: "/theodoreeicher0.jpg",
      photo: "/theodoreeicher1.jpg",
      pronouns: "He/Him",
      title: "N/A",
      email: "teicher50@stuy.edu",
      blurb: "In addition to biking, I'm interested in the societal and design aspects of street design and the general study of cities. I've lived my whole life in NYC (Harlem) and am always happy to introduce anyone to the city."
    },
    {name: "Andy Zhou",
      headshot: "/andyzhou0.jpg",
      photo: "/andyzhou1.jpg",
      pronouns: "He/Him",
      title: "CitiBike Collaboration",
      email: "andyzhou085@gmail.com",
      blurb: "I am currently a sophomore at Stuyvesant, and I like exploring the city via biking, taking the train, etc. Outside of the biking club, I am also interested in transit and urban planning."
    },
    {name: "Jamiul Hoq",
      headshot: "/jamiulhoq0.jpg",
      photo: "jamiulhoq1.jpg",
      pronouns: "He/Him",
      title: "Research",
      email: "jhoq60@stuy.edu",
      blurb: "I love playing sports, such as basketball. I am 16 and I like biking from time to time."
    },
    {name: "Nathan Lim",
      headshot: "/nathanlim0.jpeg",
      photo: "/nathanlim1.jpeg",
      pronouns: "He/Him",
      title: "Stuybike library",
      email: "nlam60@stuy.edu",
      blurb: "I’m a STEM person, and I like engineering. I enjoy video games, biking, and avoiding waking up."
    },
    {name: "Ricky Chen",
      headshot: "/rickychen0.jpg",
      photo: "/rickychen1.jpg",
      pronouns: "He/Him",
      title: "Stuybike library",
      email: "rchen71@stuy.edu",
      blurb: "My name is Ricky and I enjoy playing FPS games. Academically I enjoy STEM and don't fare especially well with the arts. I'm currently a freshman."
    },
  ]

  const updates = [
    {imageSrc: "",
      description: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
    },
    {imageSrc: "",
      description: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
    }
  ]

  var tempTeam = shiftInx1(inx1, leadershipTeam);

  return (
    <div className={styles.body}>
      <div className={styles.flashOfEvents}>
        <div className={styles.imgContainer}>
          <Image
            src="/placehold1.png"
            fill={true}
            alt="placehold1"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <h2>Flash of events</h2>
      </div>
      <div className={styles.missionFlashes}>
        {missionFlashes.map((title, i) => (
          <div className={styles.missionContainer}>
          <Image  key={`mission${i}`} src={`/mission${i+1}.png`} layout='fill' alt="image of a bike misison statement" objectFit="cover"/>
            <p className={title == "ADVOCACY FOR BIKING" ? styles.black : ""}>{title}</p>
          </div>
        ))}
      </div>
      <h2 id="about" className={styles.leadershipTitle}>LEADERSHIP TEAM</h2>
      <div className={styles.leadershipTeam}>
        <Image
          src="/arrowleft.jpg"
          width={47}
          height={68}
          alt="left arrow"
          onClick={() => {inx1 < 0 ? setInx1(inx1 + 1) : setInx1(0); tempTeam = shiftInx1(inx1, leadershipTeam);}}

        />
        <div>
        <div className={styles.leaders}>
          {tempTeam.map((obj, i) => (
            <Leadshiptag className={`leader${i}`} info={obj} key={`leadshiptag${i}`} />
          ))}
        </div>
    </div>
        <Image
          src="/arrowright.jpg"
          width={47}
          height={68}
          alt="left arrow"
          onClick={() => {inx1 > -6 ? setInx1(inx1 - 1) : setInx1(-6); tempTeam = shiftInx1(inx1, leadershipTeam); console.log(inx1)}}
        />
      </div>
      <h2 id="services" className={styles.updatesTitle}>UPDATES</h2>
      <div className={styles.updates}>
        {updates.map((obj, i) => (
          <div key={`update${i}`} className={styles.updateContainer}>
            <Image
              className={styles.image}
              src="/placehold2.png"
              width={331}
              height={331}
              alt="update"
              objectFit="cover"
            />
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      <div className={`${styles.groupPic} ${styles.flashOfEvents}`}>
        <a className={styles.anchor} target="_blank" href="https://drive.google.com/file/d/1uJ3sktuYYGDJmKoJVlmH5P060LnCkSPu/view?usp=sharing">
        <Image
          className={styles.image}
          src="/teamphoto.png"
          alt="placehold1"
          objectFit="contain"
          width={0}
          height={0}
          style={{ width: '100vw', height: 'auto' }}
        />
        </a>
      </div>

    </div>
  );
}
