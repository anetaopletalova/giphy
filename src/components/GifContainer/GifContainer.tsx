import {CircularProgress, Grid, TablePagination} from '@mui/material'
import React, {ChangeEvent, useEffect, useState} from 'react'
import {useURLQueryParams} from '../../hooks/useURLQueryParams'

interface IGifContainerProps {
  data: any
  isLoading: boolean
  isError: boolean
}

const GifContainer: React.FC<IGifContainerProps> = ({
  data,
  isLoading,
  isError,
}) => {
  const {limit, offset, setParams} = useURLQueryParams()
  const [page, setPage] = useState(Number(offset) / Number(limit) || 0)
  const [perPage, setPerPage] = useState(Number(limit) || 20)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    pagPage: number,
  ) => {
    setParams('offset', (pagPage * 20).toString())
    setParams('limit', '20')
    setPage(pagPage)
  }

  const handleRowsPerPageChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPerPage(Number(event.target.value))
    setParams('limit', event.target.value)
  }

  useEffect(() => {
    setPage(Number(offset) / Number(limit))
  }, [offset])

  return (
    <div>
      {isError && <div>Request Failed</div>}
      {isLoading && <CircularProgress />}
      {data && data.data?.length > 0 && (
        <div
          data-testid="gif-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
          }}
        >
          <TablePagination
            rowsPerPageOptions={[10, 20, 50]}
            component="div"
            count={data.pagination.total_count}
            rowsPerPage={perPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
          <Grid container spacing={2} justifyContent="center">
            {data.data.map((item: any) => (
              <Grid item key={item.id}>
                <img
                  src={item.images.fixed_height.url}
                  alt={item.title}
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default GifContainer
