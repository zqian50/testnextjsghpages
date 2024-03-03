import Image from "next/image";
import styles from "@/components/leadshiptag.module.css"

export default function leadshiptag({ info }) {
  return (
    <div className={styles.main}>
      <Image
        className={styles.img}
        src={info.headshot}
        height={150}
        width={150}
        alt="leadship title"
        style={{objectFit:"cover"}}
      />
      <div className={styles.info}>
        <p>{info.name}</p>
        <p>{info.title}</p>
        <p className={styles.pronouns}>{info.pronouns}</p>
      </div>
    </div>
  )
}
