import {useQuery} from 'react-query'
import {getGIFS} from '../api'

export const useFetchGIFs = (
  q: string | null,
  limit: string,
  offset: string,
) => {
  const {data, isLoading, isError} = useQuery(
    'GIFs',
    () => getGIFS('s', limit, offset),
    {enabled: !!q},
  )

  return {data, isLoading, isError}
}
