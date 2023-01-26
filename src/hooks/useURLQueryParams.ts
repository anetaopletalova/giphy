import {useMemo} from 'react'
import {useLocation, useSearchParams} from 'react-router-dom'

export const useURLQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const {search} = useLocation()
  const query = useMemo(() => new URLSearchParams(search), [search])

  const q = query.get('q') || ''
  const limit = query.get('limit') || '20'
  const offset = query.get('offset') || '0'

  const setParams = (param: string, value: string) => {
    searchParams.set(param, value)
    setSearchParams(searchParams.toString())
  }

  return {q, limit, offset, setParams}
}
