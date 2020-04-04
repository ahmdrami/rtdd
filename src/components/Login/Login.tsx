import React, { useReducer } from 'react'

interface ILogin {
  resolved: boolean
  loading: boolean
  error: string
}

export function Login() {
  const [state, setState] = useReducer(
    (s: ILogin, a: any) => ({ ...s, ...a }),
    {
      resolved: false,
      loading: false,
      error: null
    }
  )
  function handleSubmit(event: any) {
    event.preventDefault()
    const { username, password } = event.target.elements
    setState({ resolved: false, loading: true, error: null })

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
      .then(r => r.json())
      .then(() => setState({ loading: false, resolved: true, error: null }))
      .catch(e => setState({ loading: false, resolved: false, error: 'error' }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      {state.error && <div role="alert">error</div>}
      {state.resolved && <div role="alert">Signed in</div>}
    </div>
  )
}
