import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <section className={styles.heroBanner} id="hero-banner">
      <div className={styles.backgroundBanner}>
        <Image 
          src="/background-banner.png" 
          alt="Banner" 
          fill
          style={{ objectFit: "cover", zIndex: -1 }} 
        />
        <h1>Welcome To Our Company Profile</h1>
        <h2>CITA RASA ASLI INDONESIA</h2>
      </div>
    </section>
  );
}