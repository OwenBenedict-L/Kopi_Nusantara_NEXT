"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [keperluan, setKeperluan] = useState("");

  return (
    <section className={styles.kontakSection} id="kontak">
      <div className={styles.kontakImg}>
        <form className={styles.kontakForm}>
          <div className={styles.kontakInput}>
            <label>Nama</label>
            <input 
              type="text" 
              maxLength={99} 
              placeholder="Masukkan Nama Anda . . ." 
            />
          </div>

          <div className={styles.kontakInput}>
            <label>Email</label>
            <input 
              type="email" 
              maxLength={99} 
              placeholder="Masukkan Email Anda . . ." 
            />
          </div>

          <div className={styles.kontakInput}>
            <label>Keperluan</label>
            <div className={styles.pembungkus}>
              <textarea 
                className={styles.keperluanInput}
                maxLength={999} 
                placeholder="Masukkan Keperluan Anda . . ."
                value={keperluan}
                onChange={(e) => setKeperluan(e.target.value)}
              />
              <span style={{ fontSize: "10px", marginTop: "5px", display: "block" }}>
                {keperluan.length}/999
              </span>
            </div>
          </div>

          <button 
            type="submit" 
            className={styles.kontakSubmit} 
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
      
      <div className={styles.kontakInfo}>
        <h2>Hubungi Kami</h2>
        <h4>Untuk setiap pertanyaan, pemesanan, maupun kerja sama.</h4>
        <p><strong>WhatsApp:</strong> <a href="#">0812-3456-7890</a></p>
        <p><strong>Email:</strong> <a href="#">kopi_nusantara@gmail.com</a></p>
        <p><strong>Alamat:</strong> <a href="#">Jl. Letjen S. Parman, Jakarta Barat</a></p>
      </div>
    </section>
  );
}