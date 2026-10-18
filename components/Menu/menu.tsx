"use client";

import Image from "next/image";
import styles from "./menu.module.css";

interface MenuProps {
  searchQuery: string;
  addToCart: (title: string, price: number) => void;
}

const menuData = [
  { id: 1, src: "/kopi/tubrukjawa.png", title: "Kopi Tubruk Jawa", desc: "Kopi hitam ala tradisional, diseduh kasar dengan gula batu secukupnya.", price: 15000 },
  { id: 2, src: "/kopi/lampungrobusta.png", title: "Robusta Lampung", desc: "Karakter kuat dan pahit tegas, favorit yang butuh dorongan energi ekstra.", price: 18000 },
  { id: 3, src: "/kopi/floresbajawa.png", title: "Flores Bajawa", desc: "Manis alami dengan sentuhan cokelat, tumbuh di lereng Gunung Inerie.", price: 23000 },
  { id: 4, src: "/kopi/susugulaaren.png", title: "Kopi Susu Gula Aren", desc: "Espresso lokal, susu segar, dan gula aren asli. manis pas.", price: 19000 },
  { id: 5, src: "/kopi/sulawesi.png", title: "Kalosi Sulawesi", desc: "Full body dengan after taste rempah, cocok diseduh French press.", price: 24000 },
  { id: 6, src: "/kopi/vietnamdrip.png", title: "Vietnam Drip", desc: "Kopi pekat menetes pelan, disajikan dengan susu kental manis dingin.", price: 20000 },
  { id: 7, src: "/kopi/americanodingin.png", title: "Americano Dingin", desc: "Espresso ganda diseduh dengan air dingin, ringan tapi tetap nendang.", price: 18000 },
  { id: 8, src: "/kopi/lattepandan.png", title: "Latte Pandan", desc: "Sentuhan pandan lokal berpadu dengan susu creamy dan espresso lembut.", price: 21000 },
];

export default function MenuSection({ searchQuery, addToCart }: MenuProps) {
  const filteredMenu = menuData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return(
    <section className={styles.menuSection} id="menu">
      <h2>Menu Kami</h2>
      <div className={styles.menuContainer}>
        {filteredMenu.length === 0 && (
          <p style={{ display: "block", textAlign: "center", width: "100%" }}>
            Maaf, kopi tidak ditemukan.
          </p>
        )}

        {filteredMenu.map((item) => (
          <div className={styles.menuCard} key={item.id}>
            <Image 
              src={item.src} 
              alt={item.title} 
              width={300} 
              height={300} 
              style={{ width: "auto", height: "auto" }} 
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            
            <span 
              className={styles.menuPrice} 
              onClick={() => addToCart(item.title, item.price)} 
            >
              Rp {item.price.toLocaleString("id-ID")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}