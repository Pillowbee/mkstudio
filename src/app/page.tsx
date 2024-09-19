import { Serial } from "@/types";
import { fetchQuery } from "@/utils/fetchQuery";
import SerialCard from "@/components/SerialCard/SerialCard";

import styles from "./page.module.css"

export default async function Page() {
  const {data}: { data: Serial[] } = await fetchQuery("items/serials")

  return (
    <div className={styles.serials}>
      {data.map((serial) => <SerialCard key={serial.id} serial={serial}/>)}
    </div>
  );
}