'use server'
export const trendsFromReddit = async () => {
    try {
      const response = await fetch(`https://www.reddit.com/top.json?limit=5`)
      if (!response.ok) {
        console.log('Reddit:response',response)
        throw new Error('Failed to fetch trends')
      }
      const data = await response.json()
      console.log('Reddit:response.data',data)
      return data.data
    } catch (error) {
      console.log(error)
      return []
    }
  }