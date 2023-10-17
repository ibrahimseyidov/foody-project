'use client'
import { useEffect } from "react";
import styles from "./rightsidebar.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Foodydetail() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={`${styles['res-card-container']}`} data-aos='fade-left'>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>

      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
      <div className={styles['res-card']}>
        <img
          className={styles.img_div}
          src="/coffemania.svg"
          alt="coffeemania"
        />
        <div>
          <h1 className={styles.coffdiv} >Coffee Mania</h1>
          <span className={styles.spn_div}>
            chinese, sea-food, thai, lebanese, caribbean
          </span>
          <div className="flex justify-between items-center pr-2">
            <p className={styles.pdiv}>$5 Delivery</p>
            <span className={styles.btndiv}>09 Min</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Foodydetail;
