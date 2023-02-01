import React from "react";
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Sobre mim</span>
            
            <img />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dolorem blanditiis accusantium error minus quia, perspiciatis cupiditate consectetur debitis maxime officia, 
                numquam molestias minima laudantium eaque fugiat molestiae. Saepe, quasi.
            </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categorias</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Vida</li>
                    <li className="sidebarListItem">Música</li>
                    <li className="sidebarListItem">Estilo</li>
                    <li className="sidebarListItem">Esporte</li>
                    <li className="sidebarListItem">Tecnologia</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Siga Nos</span>
                    <div className="sidebarSocial">
                    <i className="sidebarIcon  fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon  fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon  fa-brands fa-square-instagram"></i>
                    </div>
            </div>
        </div>
    )
}