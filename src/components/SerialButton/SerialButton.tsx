'use client';

import { useRouter } from 'next/navigation';

import styles from './SerialButton.module.css';

export default function SerialButton() {
  const router = useRouter();

  return (
    <button
      className={styles.serials__btn}
      type='button'
      onClick={() => {
        router.push('/');
      }}>
      Сериалы
    </button>
  );
}
