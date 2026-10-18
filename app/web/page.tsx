"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import About from "../../components/About/about";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import Button from "../../components/Button/button";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [notif, setNotif] = useState<string | null>(null);

  const showNotif = (message: string) => {
    setNotif(message);
    setTimeout(() => setNotif(null), 2500);
  };

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });
    showNotif(`${name} berhasil ditambahkan!`);
  };

  const updateQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      newCart[index].quantity += delta;
      
      if (newCart[index].quantity <= 0) {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <>
      <Navbar
        cart={cart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showNotif={showNotif}
      />

      <main>
        <Header />
        <Menu searchQuery={searchQuery} addToCart={addToCart} />
        <About />
        <Contact />
      </main>

      <Footer />
      <Button />

      <div id="notif-container">
        {notif && <div className="notif-message show">{notif}</div>}
      </div>
    </>
  );
}