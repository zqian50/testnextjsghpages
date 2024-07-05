'use client'

import styles from './page.module.css';
import '../globals.css';


export default function SBCinfographic() {
  return (
    <div className={styles.infographicPDF}>
        <embed src="SBCinfographic.pdf" width="1000px" height="1500px" />
    </div>
    <div >
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    </div>
  );
}
