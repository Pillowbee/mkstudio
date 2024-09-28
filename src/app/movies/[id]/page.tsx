import Image from "next/image"
import { Movies } from "@/types";
import { fetchQuery } from "@/utils/fetchQuery";
import getResourceURL from "@/utils/getResourceURL";
import BackButton from "@/components/BackButton/BackButton";
import styles from "./page.module.css"
import TagElement from "@/components/TagElement/TagElement";

export default async function Page({ params }: { params: { id: string } }) {
  const { data }: { data: Movies } = await fetchQuery(`items/movies/${params.id}?fields=*,dubbers_name.dubbers_id.*`)

  if (!data) {
    return <span>failed</span>
  }


  return (
    <div>
      <BackButton />
      <div className={styles.moviesDetail}>
        <Image className={styles.moviesDetail__poster} src={getResourceURL(data.image)} alt={data.movies_name} width={350} height={580} />
        <div className={styles.moviesDetail__content}>
          <div className={styles.moviesDetail__info}>
            <span><b>Название</b>: {data.movies_name}</span>

            <span><b>Год выпуска</b>: {data.year}</span>
            <div className={styles.info__container}></div>
            <span><b>Актёры</b>: </span>
            {data.actors_name.split(',').map((item) => <TagElement key={item} data={item} />)}

            <div className={styles.info__container}>
              <span><b>Дабберы</b>: </span>
              {data.dubbers_name.split(',').map((item) => <TagElement key={item} data={item} />)}
            </div>

            <div className={styles.info__container}></div>
            <span><b>Жанр</b>: </span>
            {data.genre.split(',').map((item) => <TagElement key={item} data={item} />)}

            <div className={styles.info__container}></div>
            <span><b>Страна</b>: </span>            
            {data.country.split(', ').map((item) => <TagElement key={item} data={item} />)}


            <span>{data.description}</span>


          </div>
          <iframe className={styles.moviesDetail__video} src={`//kodik.cc/${data.video}`} width="100%" height="360"
            frameBorder="0" allowFullScreen allow="autoplay *; fullscreen *"></iframe>
        </div>
      </div>
    </div>
  )
}