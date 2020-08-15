import React		from 'react';
import LogoTennis	from '../images/logoTennis.png';
import './styles/Footer.scss'

function FooterPage(props){
	console.log(window)
	return(
		<footer>
			<div className="menus-footer">
				<nav className="menu-horizontal main-menu">
					{props.menu.map((link, index)=>{
						return(
							<a href={link.liga} className="menu-item" key={index}>{link.nombre}</a>
						)
					})}
				</nav>
				<nav className="redes-menu">
					{props.redes.map((link, index)=>{
						return(
							<a href={link.liga} className="red-social" key={index}>
								<img src={link.icono} alt={link.nombre} />
							</a>
						)
					})}
				</nav>
			</div>
			<div className="icono-pelota">
				<img src={LogoTennis} alt="Logo de Tennis"/>
			</div>
		</footer>
	)
}

export default FooterPage;