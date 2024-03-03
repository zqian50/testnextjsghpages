import Image from "next/image";
import styles from "./page.module.css";
import Leadshiptag from "@/components/leadshiptag";
import Leadshipcard from "@/components/leadshipcard";
import './globals.css'

export default function Home() {
  const missionFlashes = [
    "HOBBY OF BIKING",
    "ACCESSABILITY OF BIKING",
    "ADVOCACY FOR BIKING",
    "BIKING FOR ENVIRONMENT",
  ]
  const leadershipTeam = [
    {name: "Syed Rahman",
      headshot: "/syedrahman0.jpg",
      photo: "/syedrahman1.jpg",
      pronouns: "He/Him",
      title: "Bike Design Competition",
      email: "srahman61@stuy.edu",
      blurb: "Hey guys, my name is Syed Rahman! I like building Legos and doing motivational speaking. I like walking and experiencing the breeze of nature. My favorite singer and songwriter is Sami Yusuf."
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
    {name: "Andy Zhou",
      headshot: "/andyzhou0.jpg",
      photo: "/andyzhou1.jpg",
      pronouns: "He/Him",
      title: "CitiBike Collaboration",
      email: "andyzhou085@gmail.com",
      blurb: "I am currently a sophomore at Stuyvesant, and I like exploring the city via biking, taking the train, etc. Outside of the biking club, I am also interested in transit and urban planning."
    },
    {name: "Theodore Eicher",
      headshot: "/theodoreeicher0.jpg",
      photo: "/theodoreeicher1.jpg",
      pronouns: "He/Him",
      title: "N/A",
      email: "teicher50@stuy.edu",
      blurb: "In addition to biking, I'm interested in the societal and design aspects of street design and the general study of cities. I've lived my whole life in NYC (Harlem) and am always happy to introduce anyone to the city."
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
        />
        <div>
        <div className={styles.leaders}>
          {leadershipTeam.map((obj, i) => (
            <Leadshiptag className={`leader${i}`} info={obj} key={`leadshiptag${i}`} />
          ))}
        </div>
    </div>
        <Image
          src="/arrowright.jpg"
          width={47}
          height={68}
          alt="left arrow"
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
      <div className={`${styles.flashOfEvents} ${styles.groupPic}`}>
        <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          src="/placehold1.png"
          fill={true}
          alt="placehold1"
          objectFit="cover"
        />
        </div>
        <h2>Group picture</h2>
      </div>

    </div>
  );
}
