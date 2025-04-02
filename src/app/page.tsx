'use client'
import { useEffect, useState } from 'react'
import { trendsFromReddit } from './actions'
function Page() {
  const [trends, setTrends] = useState<Record<string, string | Record<string, string>> | null>(null)
  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const trends = await trendsFromReddit()
        console.log('trends', trends)
        setTrends(trends)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchTrends()
  }, [])
  return (
    <div>
      <h1>Sample Reddit</h1>
      <ul>
        {trends && JSON.stringify(trends)}
      </ul>
    </div>
  )
}

export default Page
