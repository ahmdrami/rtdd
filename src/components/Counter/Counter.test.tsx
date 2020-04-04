import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter component', () => {
  test('Initial value to be 0', () => {
    render(<Counter />)
    expect(screen.getByText(/^Clicked 0 times!$/i)).toBeInTheDocument()
  })

  test('Counter value decrements on clicking Minus button', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText(/Minus/))
    expect(screen.getByText(/^Clicked -1 times!$/i)).toBeInTheDocument()

  })

  test('Counter value increments on clicking Add button', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText(/Add/))
    expect(screen.getByText(/^Clicked 1 times!$/i)).toBeInTheDocument()

  })
})
