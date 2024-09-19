import Image from "next/image"
import Link from "next/link"
import { Serial } from "@/types";
import getResourceURL from "@/utils/getResourceURL";

import styles from "./SerialCard.module.css"

interface SerialCardProps {
  serial: Serial
}

export default function SerialCard({serial}: SerialCardProps) {
  return (
    <Link href={`/${serial.id}`} className={styles.serial}>
        <Image src={getResourceURL(serial.image)} alt={serial.serial_name} width={200} height={300}/>
        <span className={styles.serial__name}>{serial.serial_name}</span>
    </Link>
  )
}