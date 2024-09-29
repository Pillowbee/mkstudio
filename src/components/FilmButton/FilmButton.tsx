'use client';

import { useRouter } from 'next/navigation';

import styles from './FilmButton.module.css';

export default function FilmButton() {
  const router = useRouter();

  return (
    <button
      className={styles.films__btn}
      type='button'
      onClick={() => {
        router.push('/movies');
      }}>
      Фильмы
    </button>
  );
}
