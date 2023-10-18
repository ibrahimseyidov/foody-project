import styles from '../Dashboard/Dashboard.module.css';

function Emptycelltwo() {
  return (
    <div className={styles.common_div}>
      <h1 className={styles.dash_h1}>Assigned Action Items</h1>
      <p className={styles.dash_p}>There are no action items assigned.</p>
    </div>
  )
}

export default Emptycelltwo
