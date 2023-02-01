import "./Register.css"

export default function Register() {
    return (
        <div className="register">
            <div className='box'>
            <span className="registerTitle">Cria conta</span>
                <form className="registerForm">
                    <label>Username</label>
                    <input className="registerInput" type="text" placeholder="Crie seu nome de usuário..." />
                    <label>E-mail</label>
                    <input className="registerInput" type="text" placeholder="Digite seu e-mail..." />
                    <label>Senha</label>
                    <input className="registerInput" type="password" placeholder="Crie sua senha..." />
                    <button className="registerButton">Criar conta</button>
                    <button className="registerLoginButton">Login</button>
                </form>  
            </div>
        </div>
    )
}