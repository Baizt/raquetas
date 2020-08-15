import React from 'react';
import './styles/Footer.scss'

function FooterPage(props){
	return(
		<footer>
			<nav className="menus-footer">
				<ul className="menu-horizontal">
					{props.menu.map((link)=>{
						return(
							<li><a href={link.liga} className="menu-item">{link.nombre}</a></li>
						)
					})}
				</ul>
				<ul className="menu-horizontal">
					{props.redes.map((link)=>{
						return(
							<li><a href={link.liga} className="red-social">{link.nombre}</a></li>
						)
					})}
				</ul>
			</nav>
			<div className="icono-pelota"></div>
		</footer>
	)
}

export default FooterPage;