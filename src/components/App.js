import React from 'react';
import HeaderPage from './HeaderPage';
import HomePage from './HomePage';
import FooterPage from './FooterPage';

import LinkedIn		from '../images/linkedin.svg';
import Vimeo		from '../images/vimeo.svg';
import Instagram	from '../images/instagram.svg';
import Twitter		from '../images/twitter.svg';
import Facebook		from '../images/facebook.svg';

import './styles/App.scss';

class App extends React.Component {
	state = {
		menu:[
			{
				nombre:'Inicio',
				liga:'#',
				title:'',
			},
			{
				nombre:'Acerca de nosotros',
				liga:'#',
				title:'',
			},
			{
				nombre:'Historia',
				liga:'#',
				title:'',
			},
			{
				nombre:'Contacto',
				liga:'#',
				title:'',
			},
		],
		redes:[
			{
				nombre:'LinkedIn',
				icono:LinkedIn,
				liga:'#',
				title:'',
			},
			{
				nombre:'Vimeo',
				icono:Vimeo,
				liga:'#',
				title:'',
			},
			{
				nombre:'Instagram',
				icono:Instagram,
				liga:'#',
				title:'',
			},
			{
				nombre:'Twitter',
				icono:Twitter,
				liga:'#',
				title:'',
			},
			{
				nombre:'Facebook',
				icono:Facebook,
				liga:'#',
				title:'',
			},
		]
	}
	render(){
		return (
			<div className="App">
				<HeaderPage />
				<HomePage />
				<FooterPage menu={this.state.menu} redes={this.state.redes} />
			</div>
		);
	}
}

export default App;
