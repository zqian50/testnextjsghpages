import styles from './page.module.css';
import '../globals.css';


export default function SBCinfographic() {
  return (
    <div>
    <div className={styles.infographicPDF}>
        <iframe src="/infographic.pdf" width="1000vw" height="600vh" frameBorder="0">Browser not compatible.</iframe>
    </div>
    <div className={styles.manybrs}>
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
    </div>
  );
}
