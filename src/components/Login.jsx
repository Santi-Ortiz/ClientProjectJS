import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandle = () => {
        fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(`${email}:${password}`)}`
            }
        }).then(res => res.json())
            .then(json => {
                localStorage.setItem('jwt', json.token);
                navigate('/nasa')
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#778899',
                padding: '20px',
            }}>
                <h1 style={{
                    margin: '60px',
                    fontWeight: 'bold'

                }}>Login</h1>

                
                <div>
                    <label htmlFor="correo" style={{
                        margin: '20px',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }} >Email: </label>
                    <input type="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                </div>

                <div>
                    <label htmlFor="contraseña" style={{
                        margin: '5px',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>
                        Password:
                    </label>
                    <input type="password" style={{ margin: '30px' }}
                        value={password}
                        onChange={e => { setPassword(e.target.value) }}
                    />
                </div>

                <button
                    onClick={loginHandle}
                >Ingresar</button>


            </div>


        </>
    )
}