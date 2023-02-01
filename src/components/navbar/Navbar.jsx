import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="navLeft">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
            </div>
            <div className="navCenter">
                <div className="nav-list">
                    <ul>
                        <li className="nav-item"><a href="#" class="nav-link">Início</a></li>
                        <li className="nav-item"><a href="#" class="nav-link">Sobre</a></li>
                        <li className="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
                        <li className="nav-item"><a href="#" class="nav-link">Escrever</a></li>
                        <li className="nav-item"><a href="#" class="nav-link">Log Out</a></li>
                    </ul>
                </div>
            </div>
            <div className="NavRight">
                <img src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="/>
                <i className="Search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    )
}