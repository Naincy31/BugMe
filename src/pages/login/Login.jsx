import { useState } from "react"

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password);
    }

  return (
    <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
            <label>
                <span>Name:</span>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login