import {fireEvent} from '@testing-library/react'
import React from 'react'
import App from './App'
import {useFetchGIFs} from './hooks/useFetchGIFs'
import {renderWithClient} from './testUtils'

jest.mock('./hooks/useFetchGIFs', () => ({
  useFetchGIFs: jest.fn(),
}))

describe('Giphy App', () => {
  beforeEach(() => {
    ;(useFetchGIFs as any).mockImplementation(() => {})
  })
  it('shows gif container on search', async () => {
    const rendered = renderWithClient(<App />)

    const searchInput = rendered.getByTestId('search').querySelector('input')
    expect(searchInput).toBeInTheDocument()

    fireEvent.change(searchInput as HTMLInputElement, {
      target: {value: 'dogs'},
    })
    expect((searchInput as HTMLInputElement).value).toBe('dogs')
    await new Promise((r) => setTimeout(r, 3500))
    expect(rendered.container).toMatchSnapshot()

    expect(rendered.getByTestId('gif-container')).toBeInTheDocument()
  })
})
