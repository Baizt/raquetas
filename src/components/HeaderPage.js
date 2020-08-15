import React from 'react';
import MainMenu from './MainMenu';
import './styles/HeaderPage.scss';
import LogoTennis	from '../images/logoTennis.png';

function HeaderPage(props){
	return(
		<section className="main-menu-section">
			<div className="logo-tennis">
				<img src={LogoTennis} alt="Logo de Tennis"/>
			</div>
			<div className="main-menu-container">
				<MainMenu menu={props.menu} />
			</div>
			<div className="lang-menu">
				<a href="#">ES</a>
				<a href="#">EN</a>
			</div>
		</section>
	)
}

export default HeaderPage;