import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer>
        <p>Copyright &copy; DJ Events 2021</p>
        <Link href='/about'>About This Project</Link>
    </footer>
  )
}
