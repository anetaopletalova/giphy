import {useQuery} from 'react-query'
import {getGIFS} from '../api'

export const useFetchGIFs = (q: string, limit: string, offset: string) => {
  const {data, isLoading, isError} = useQuery(
    ['GIFs', offset, q, limit],
    () => getGIFS(q, limit, offset),
    {enabled: !!q, keepPreviousData: true},
  )

  return {data, isLoading, isError}
}
