import React from 'react';
import './styles/MainMenu.scss';

function MainMenu(params) {
	return(
		<nav className="menu-horizontal main-menu">
			{params.menu.map((link, index)=>{
				return(
					<a href={link.liga} className="menu-item" key={index}>{link.nombre}</a>
				)
			})}
		</nav>
	)
}

export default MainMenu;