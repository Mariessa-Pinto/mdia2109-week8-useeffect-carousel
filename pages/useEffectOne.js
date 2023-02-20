import Link from "next/link"
import { useState, useEffect } from 'react'
import styles from "@/styles/UseEffectOne.module.css"

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number +1)
    })

    return (
        <div className={styles.main}>
            <Link className={styles.link} href="/">Home</Link>
            <div className={styles.header}>
                <h1>UseEffectOne</h1>
            </div>
            <div className={styles.number}>
                <h2>{number}</h2>
            </div>
        </div>
    )
}