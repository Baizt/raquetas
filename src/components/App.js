import React from 'react';
import HeaderPage from './HeaderPage';
import HomePage from './HomePage';
import FooterPage from './FooterPage';
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
				liga:'#',
				title:'',
			},
			{
				nombre:'Vimeo',
				liga:'#',
				title:'',
			},
			{
				nombre:'Instagram',
				liga:'#',
				title:'',
			},
			{
				nombre:'Twitter',
				liga:'#',
				title:'',
			},
			{
				nombre:'Facebook',
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
