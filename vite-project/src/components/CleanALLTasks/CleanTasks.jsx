import styles from './clearAllTasks.module.css';

export default function CleanTasks({ onClear }) {
    return (
        (<div className={styles.clearAllTasksDivButton}>
            <button
                onClick={() => onClear()}
                className={styles.clearAllTasksButton}>Clear
            </button>
        </div>)
    )
}