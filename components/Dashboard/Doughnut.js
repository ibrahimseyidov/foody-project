import styles from '../Dashboard/Dashboard.module.css';
import Doughnutdetail from './Dashboardsdetail';

function Doughnut() {
  return (
    <div className={styles.common_div}>
      <h1 className={styles.dash_h1}>Orders</h1>
      <h2 className={styles.imh_h2}>Projects by <br /> account</h2>
      <img className={styles.doughnut_div} src='/doughnut.svg' alt='doughnut' />
      <Doughnutdetail />
    </div>
  )
}

export default Doughnut
