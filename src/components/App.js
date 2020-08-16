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
		menu:{
			selected:'Inicio',
			elems:[
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
			]
		},
		langs:{
			selected:'ES',
			elems:[
				{
					nombre:'ES',
					liga:'#',
					title:'',
				},
				{
					nombre:'EN',
					liga:'#',
					title:'',
				},
			]
		},
		redes:[
			{
				nombre:'LinkedIn',
				icono:LinkedIn,
				liga:'https://www.linkedin.com/',
				title:'',
			},
			{
				nombre:'Vimeo',
				icono:Vimeo,
				liga:'https://vimeo.com/es',
				title:'',
			},
			{
				nombre:'Instagram',
				icono:Instagram,
				liga:'https://www.instagram.com/?hl=es-la',
				title:'',
			},
			{
				nombre:'Twitter',
				icono:Twitter,
				liga:'https://twitter.com/?lang=es',
				title:'',
			},
			{
				nombre:'Facebook',
				icono:Facebook,
				liga:'https://es-la.facebook.com/',
				title:'',
			},
		],
	}
	render(){
		return (
			<div className="App">
				<HeaderPage menu={this.state.menu} langs={this.state.langs} />
				<HomePage />
				<FooterPage menu={this.state.menu} redes={this.state.redes} />
			</div>
		);
	}
}

export default App;
