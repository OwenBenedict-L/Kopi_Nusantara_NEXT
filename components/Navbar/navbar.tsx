"use client";

import { useState } from "react";
import { CartItem } from "../../app/web/page";
import styles from "./navbar.module.css";
import Image from "next/image";

interface NavbarProps {
  cart: CartItem[];
  updateQuantity: (index: number, delta: number) => void;
  clearCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showNotif: (msg: string) => void;
}

export default function Navbar({
  cart,
  updateQuantity,
  clearCart,
  searchQuery,
  setSearchQuery,
  showNotif,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [confirmMode, setConfirmMode] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (cart.length === 0) {
      showNotif("Keranjang kamu kosong!");
      return;
    }

    if (!confirmMode) {
      setConfirmMode(true);
      setTimeout(() => setConfirmMode(false), 3000);
      return;
    }

    showNotif("Terima kasih telah berbelanja di Kopi Nusantara!");
    clearCart();
    setIsCartOpen(false);
    setConfirmMode(false);
  };

  return (
    <>
      <nav className={styles.navMenu}>
        <div className={styles.leftMenu}>
          <Image 
            src="/biji-kopi.jpg" 
            alt="Logo" 
            width={100}
            height={100}
          />
          <p>KOPI NUSANTARA</p>
          <ul className={`${styles.leftMenuShow} ${isMenuOpen ? styles.show : ""}`}>
            <li><a href="#hero-banner">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#tentang">Tentang</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>

        <div className={styles.rightMenu}>
          <ul className={styles.rightMenuShow}>
            <li>
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsSearchOpen(!isSearchOpen); 
                  setIsCartOpen(false); 
                }}
              >
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsCartOpen(!isCartOpen); 
                  setIsSearchOpen(false); 
                }}
              >
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMenuOpen(!isMenuOpen); 
                }}
              >
                <i className="fas fa-bars fa-2x"></i>
              </a>
            </li>
          </ul>

          <div className={`${styles.searchButton} ${isSearchOpen ? styles.active : ""}`}>
            <input
              type="search"
              placeholder="Cari kopi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </nav>

      <div className={`${styles.shoppingCartButton} ${isCartOpen ? styles.active : ""}`}>
        <h3>Keranjang Saya</h3>
        
        <div className={styles.contentCart}>
          {cart.length === 0 ? (
            <p className={styles.messageCart}>Tidak ada barang yang dibeli...</p>
          ) : (
            cart.map((item, index) => (
              <div className={styles.cartItem} key={index}>
                <div className={styles.itemInfo}>
                  <p>{item.name}</p>
                  <span>Rp {(item.price * item.quantity).toLocaleString("id-ID")}</span>
                </div>
                <div className={styles.qtyControls}>
                  <button type="button" className={styles.btnQty} onClick={() => updateQuantity(index, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button type="button" className={styles.btnQty} onClick={() => updateQuantity(index, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.infoCart}>
          <div className={styles.totalCart}>
            <p>Total: <span>Rp {total.toLocaleString("id-ID")}</span></p>
          </div>
          <button 
            type="button" 
            className={`${styles.submitCart} ${confirmMode ? styles.confirmMode : ""}`} 
            onClick={handleCheckout}
          >
            {confirmMode ? "Yakin beli sekarang?" : "Beli"}
          </button>
        </div>
      </div>
    </>
  );
}