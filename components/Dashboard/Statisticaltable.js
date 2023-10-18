import styles from '../Dashboard/Dashboard.module.css';
import Staticaldetail from './Staticaldetail';

function Statisticaltable() {
  return (
    <div className={styles.years_div}>
      <h1 className={styles.years_h1}>Total Salary</h1>
      <p className={styles.years_p}>Years</p>
      <img className={styles.img_dash} src='/diagram.svg' alt='staticaltable' />
      <Staticaldetail />
    </div>
  )
}

export default Statisticaltable;
