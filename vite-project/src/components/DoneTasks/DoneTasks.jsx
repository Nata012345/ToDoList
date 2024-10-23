import {useState} from "react";
import styles from "../InputPlus/inputPlus.module.css";

export default function DoneTasks(id, title) {
    const [isDone, setDone] = useState(true);
    return (
        <div>
            <input
                type="checkbox"
                checked={isDone}
                className={styles.inputTaskCheckbox}
                onChange={(event) => {
                    setDone(event.target.checked)
                }}
            />
            <input
                type='text'
                value={title}
                className={styles.inputPlusValue}
            />
        </div>
    )
}