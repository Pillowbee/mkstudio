'use client'

import { useRouter } from "next/navigation";

export default function FilmButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => {
      router.push('/movies')
    }}>Фильмы</button>
  )
}