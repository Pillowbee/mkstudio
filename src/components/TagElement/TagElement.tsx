import Link from "next/link"
import styles from './TagElement.module.css'

interface TagElementProps {
    data: string
}

export default function TagElement({ data }: TagElementProps) {
    return (
        <Link href={`/`}>
            <span className={styles.root}>{data}</span>
        </Link>
    )
}