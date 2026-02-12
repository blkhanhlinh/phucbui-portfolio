import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export function Loading() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])
  return (
    loading && (
      <div className='loading'>
        <div className='loading__inner'>
          <div className='loading__inner__content'>Loading...</div>
        </div>
      </div>
    )
  )
}
