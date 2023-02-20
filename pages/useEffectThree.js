import Link from "next/link"
import { useState, useEffect } from 'react'
import styles from "@/styles/UseEffectThree.module.css"

export default function UseEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <div className={styles.main}>
            <Link className={styles.link} href="/">Home</Link>
            <div>
                <h1>UseEffect Three</h1>
            </div>
            <div>
                <h2>{value}</h2>
            </div>
            <div>
                <button className={styles.button} onClick={() => setNumber(number + 1)}>Click me</button>
            </div>
        </div>
    )
}