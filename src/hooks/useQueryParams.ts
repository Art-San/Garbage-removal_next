// import { useState, useEffect } from 'react'

// type TQuery = {
//   [key: string]: string
// }

// export const useQueryParams = (): TQuery => {
//   const [queryParams, setQueryParams] = useState<TQuery>({})

//   useEffect(() => {
//     const searchParams = new URLSearchParams(window.location.search)
//     setQueryParams(Object.fromEntries(searchParams.entries()))
//   }, [])

//   return queryParams
// }

'use client'

import { useSearchParams } from 'next/navigation'

type TQuery = {
  [key: string]: string
}

export const useQueryParams = (): TQuery => {
  const searchParams = useSearchParams()

  const queryParams = Object.fromEntries(searchParams.entries())

  return queryParams
}
