import './Login.css'

export default function Login() {
    return (
        <div className="login">
            <div className='box'>
                <span className="loginTitle">Login</span>
                <form className="loginForm">
                <label>E-mail</label>
                <input className="loginInput" type="text" placeholder="Digite seu e-mail..." />
                <label>Senha</label>
                <input className="loginInput" type="password" placeholder="Digite sua senha..." />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Criar conta</button>
                </form>                
            </div>
      </div>
    )
}