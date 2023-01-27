import {GIPHY_URL} from './constants'

export const getGIFS = async (q: string, limit: string, offset: string) => {
  const fullUrl =
    GIPHY_URL +
    new URLSearchParams({
      api_key: process.env.REACT_APP_GIPHY_KEY as string,
      q,
      limit,
      offset,
    })

  const response = await fetch(fullUrl)

  if (!response.ok) {
    throw new Error('Network response error')
  }

  return response.json()
}
