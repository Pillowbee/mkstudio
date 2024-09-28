import { Movies } from "@/types";
import { fetchQuery } from "@/utils/fetchQuery";
import MoviesCard from "@/components/MoviesCard/MoviesCard";

import styles from "./page.module.css"

export default async function Page() {
  const {data}: { data: Movies[] } = await fetchQuery("items/movies")

  return (
    <div className={styles.movies}>
      {data.map((movies) => <MoviesCard key={movies.id} movies={movies}/>)}
    </div>
  );
}