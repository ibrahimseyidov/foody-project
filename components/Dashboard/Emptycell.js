import styles from '../Dashboard/Dashboard.module.css';

function Emptycell() {
  return (
    <div className={styles.common_div}>
      <h1 className={styles.dash_h1}>Assigned Risks</h1>
      <p className={styles.dash_p}>There are no risks assigned.</p>
    </div>
  )
}

export default Emptycell
