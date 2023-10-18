import styles from '../Dashboard/Dashboard.module.css';

function Staticaldetail() {
  return (
    <div >
      <ul className='flex gap-gp ml-mld mt-mtd'>
        <li className={styles.li_dash}><button className={styles.btn_dash_feb}></button>February</li>
        <li className={styles.li_dash}><button className={styles.btn_dash_march}></button>March</li>
        <li className={styles.li_dash}><button className={styles.btn_dash}></button>April</li>
      </ul>
    </div>
  )
}

export default Staticaldetail
