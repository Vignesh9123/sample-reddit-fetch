'use server'
export const trendsFromReddit = async () => {
    try {
      const response = await fetch(`https://api.reddit.com/top?limit=5`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
      })
      const data = await response.json()
      console.log('Reddit:response.data',data)
      return data.data
    } catch (error) {
      console.log(error)
      return []
    }
  }