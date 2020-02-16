import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './CheckBox'

describe('Checkbox', () => {
  test('shows the default label', () => {
    const message = 'Hidden message'
    render(<Checkbox> {message}</Checkbox>)
    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    expect(screen.queryByText(message)).toBeNull()

    fireEvent.click(screen.getByLabelText(/show/i))
    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.queryByText(message)).toBeInTheDocument()
  })
})
