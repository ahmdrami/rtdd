import React from 'react'
import { render, screen, fireEvent, findByRole } from '@testing-library/react'
import { Login } from './Login'

describe('Login component', () => {
  test('Allow users to login successfully', async () => {
    const fakeUserResponse = { token: 'fake_user_token ' }

    jest.spyOn(window, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUserResponse)
      })
    )
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/username/i), { value: 'John' })

    fireEvent.change(screen.getByLabelText(/password/i), { value: 'doe' })

    fireEvent.click(screen.getByText(/submit/i))

    // just like a manual tester, we'll instruct our test to wait for the alert
    // to show up before continuing with our assertions.
    const alert = await screen.findByRole('alert')
    // .toHaveTextContent() comes from jest-dom's assertions
    // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
    // but jest-dom will give you better error messages which is why it's recommended
    expect(alert).toHaveTextContent(/signed in/i)
  })
})
