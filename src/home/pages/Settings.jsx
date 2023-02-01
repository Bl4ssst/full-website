import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsTitleUpdate">Atualizar sua cpnta</span>
                <span className="settingsTitleDelete">Deletar conta</span>
            </div>
            <form className="settingsForm">
                <label>Foto de perfil</label>
                <div className="settingsPP">
                <img
                    src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="
                    alt=""
                />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                />
                </div>
                <label> Nome de usuário</label>
                <input type="text" placeholder="Safak" name="name" />
                <label>E-mail</label>
                <input type="email" placeholder="safak@gmail.com" name="email" />
                <label>Password</label>
                <input type="password" placeholder="**********" name="password" />
                <button className="settingsSubmitButton" type="submit">
                Atualizar
                </button>
            </form>
            </div>
            <Sidebar />
        </div>
    )
}