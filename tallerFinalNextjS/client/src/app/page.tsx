import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.img_container}>
      <h1 className={styles.contenido}>Home</h1>
      <Image src="/flor.jpg" alt="Logo" width={400} height={400} />
    </div>
  );
}
