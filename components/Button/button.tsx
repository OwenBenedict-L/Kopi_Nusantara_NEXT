"use client";

import styles from "./button.module.css";

export default function BackToTopButton() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <a 
      href="#" 
      className={styles.btnKeAtas} 
      onClick={scrollToTop} 
      title="Kembali ke atas"
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
}