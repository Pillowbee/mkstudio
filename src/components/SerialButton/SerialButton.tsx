'use client'

import { useRouter } from "next/navigation";

export default function SerialButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => {
      router.push('/')
    }}>Сериалы</button>
  )
}