import React from 'react';
import './styles/MainMenu.scss';

function MainMenu(params) {
	return(
		<nav className="menu-horizontal main-menu">
			{params.menu.elems.map((link, index)=>{
				return(
					<a href={link.liga} className={`menu-item ${params.menu.selected === link.nombre ? 'select' : ''}`} key={index}>{link.nombre}</a>
				)
			})}
		</nav>
	)
}

export default MainMenu;