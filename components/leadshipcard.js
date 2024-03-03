import Image from "next/image";
import styles from "@/components/leadshipcard.module.css"
export default function leadshipcard({ info }) {
  return (
    <div>
      <Image
        src={info.photo}
        height={510}
        width={800}
        alt={`image of ${info.name}`}
        style={{objectFit:"cover"}}
    />
      <div>
      <h1>{info.name}</h1>
      <div>
        {[info.title, info.email, info.pronouns, info.blurb].map((i, n) => (
          <p key={i}>{n}</p>
        ))}
      </div>
      </div>
    </div>
  )
}
