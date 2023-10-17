'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./leftsidebar.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Leftres() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={styles.leftresdiv} data-aos='fade-right'>

      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        Sea Food
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>

      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
      <Link href="/" className={styles['res-category']}>
        <img className={styles.imgsrc} src="/pizza.svg" alt="pizza" />
        <span className={styles.textli}>Sea Food</span>
      </Link>
    </div>
  );
}

export default Leftres;
