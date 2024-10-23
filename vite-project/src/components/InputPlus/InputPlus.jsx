import { useState, useCallback, useRef, useLayoutEffect } from "react";
import styles from './inputPlus.module.css';

export default function InputPlus ({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const onAddmemoised = useCallback(() => {
        onAdd(inputValue);
        setInputValue('');
    }, [inputValue])
    return (
        <div className={styles.inputPlus}>
            <input
                type='text'
                value={inputValue}
                className={styles.inputPlusValue}
                placeholder='Type here...'
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        onAddmemoised();
                    }
                }}
            />
            <button
                onClick={() => {
                    onAddmemoised();
                }}
                aria-label="Add"
                className={styles.inputPlusButton}>
            </button>
        </div>
    );
}