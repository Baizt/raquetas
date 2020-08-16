import React		from 'react';
import MainMenu		from './MainMenu';
import LogoTennis	from '../images/logoTennis.png';
import './styles/Footer.scss'

function FooterPage(props){
	return(
		<footer>
			<div className="footer-menu">
				<MainMenu menu={props.menu} />
			</div>
			<div className="redes-menu">
				{props.redes.map((link, index)=>{
					return(
						<a rel="noopener noreferrer nofollow" target="_blank" href={link.liga} className="red-social" key={index}>
							<img src={link.icono} alt={link.nombre} />
						</a>
					)
				})}
			</div>
			<div className="logo-tennis-footer">
				<img src={LogoTennis} alt="Logo de Tennis"/>
			</div>
		</footer>
	)
}

export default FooterPage;