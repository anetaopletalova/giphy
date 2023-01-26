import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {render} from '@testing-library/react'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

export const renderWithClient = (children: React.ReactElement) => {
  const queryClient = createTestQueryClient()
  const {rerender, ...result} = render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  }
}
