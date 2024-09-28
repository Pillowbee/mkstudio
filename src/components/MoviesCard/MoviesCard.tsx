import Image from "next/image"
import Link from "next/link"
import { Movies } from "@/types";
import getResourceURL from "@/utils/getResourceURL";

import styles from "./MoviesCard.module.css"

interface MoviesCardProps {
  movies: Movies
}

export default function SerialCard({movies}: MoviesCardProps) {
  return (
    <Link href={`movies/${movies.id}`} className={styles.movies}>
      <Image className={styles.movies__img} src={getResourceURL(movies.image)} alt={movies.movies_name} width={200}
             height={300}/>
      <span className={styles.movies__name}>{movies.movies_name}</span>
    </Link>
  )
}