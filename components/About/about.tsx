import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.tentangSection} id="tentang">
      <h2>Tentang Kami</h2>
      <div className={styles.tentangContainer}>
        <div className={styles.tentangImg}>
          <Image 
             src="/LogoKopi.png" 
             className={styles.logo} 
             alt="Logo Kopi Nusantara" 
             width={400}
             height={400}
             style={{ width: "100%", height: "auto" }} 
          />
        </div>
        <div className={styles.tentangText}>
          <h2>Cerita Kami</h2>
          <p>
            Kopi Nusantara berdiri dari kecintaan pada kopi-kopi single origin Indonesia. 
            Kami bekerja sama langsung dengan petani dari Aceh, Toraja, hingga Bali untuk 
            menghadirkan biji kopi terbaik yang disangrai segar setiap minggunya di kedai kami.
            Selain menjaga kualitas rasa, kami juga berkomitmen mendukung kesejahteraan petani 
            lokal dengan sistem perdagangan yang adil. Setiap cangkir yang kami sajikan bukan 
            hanya menghadirkan aroma dan cita rasa khas Nusantara, tetapi juga membawa cerita 
            perjalanan panjang dari kebun kopi hingga ke meja Anda.
          </p>
        </div>
      </div>
    </section>
  );
}