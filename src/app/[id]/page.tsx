import Image from "next/image"
import { Serial } from "@/types";
import { fetchQuery } from "@/utils/fetchQuery";
import getResourceURL from "@/utils/getResourceURL";
import BackButton from "@/components/BackButton/BackButton";
import styles from "./page.module.css"

export default async function Page({params}: { params: { id: string } }) {
  const {data}: { data: Serial } = await fetchQuery(`items/serials/${params.id}`)

  if (!data) {
    return <span>failed</span>
  }
console.log(data.actors_name)
  return (
    <div>
      <BackButton />
      <div className={styles.serialDetail}>
        <Image className={styles.serialDetail__poster} src={getResourceURL(data.image)} alt={data.serial_name} width={300} height={500}/>
        <div className={styles.serialDetail__content}>
          <div className={styles.serialDetail__info}>
            <span><b>Название</b>: {data.serial_name}</span>
            <span><b>Год выпуска</b>: {data.year}</span>
            <span><b>Актёры</b>: {data.actors_name.join(', ')}</span>
            <span><b>Дабберы</b>: {data.dubbers_name.join(', ')}</span>
            <span>{data.description}</span>
          </div>
          <iframe className={styles.serialDetail__video} src={`//kodik.cc/${data.video}`} width="607" height="360"
                  frameBorder="0" allowFullScreen allow="autoplay *; fullscreen *"></iframe>
        </div>
      </div>
    </div>
  )
}