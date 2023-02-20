import Link from "next/link"
import { useState, useEffect } from 'react'
import styles from "@/styles/UseEffectTwo.module.css"

export default function UseEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50)
    }, [])

    return (
        <div className={styles.main}>
            <Link className={styles.link} href="/">Home</Link>
            <div>
                <h1>UseEffect Two</h1>
            </div>
            <div>
                <h2>{number}</h2>
            </div>
        </div>
    )
}