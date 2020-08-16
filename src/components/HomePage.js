import React from 'react';
import BannerHome from './BannerHome';
import Historia from './Historia';
import Carrusel from './Carrusel';
import FullImg from './FullImg';
import homeFooterImg from '../images/homeFooter.jpg';
import BabolatAero from '../images/babolat-aero.png';
import WilsonStaff from '../images/wilson-staff.png';
import HeadSpeed from '../images/head-speed.png';
import HeadGraphene from '../images/head-graphene.png';
import BabolatDrive from '../images/babolat-drive.png';

class HomePage extends React.Component {
	state = {
		historia:{
			categoria:'Tennis',
			titulo:'Raquetas.Accesorios.Pelotas.',
			intro:'Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.',
		},
		raquetas:[
			{
				nombre:'Raqueta Babolat Pure Aero',
				imagen:BabolatAero,
			},
			{
				nombre:'Wilson Pro Staff RF 97 Autograph',
				imagen:WilsonStaff,
			},
			{
				nombre:'Raqueta Head Speed MP',
				imagen:HeadSpeed,
			},
			{
				nombre:'Head Graphene 360 Radical Pro',
				imagen:HeadGraphene,
			},
			{
				nombre:'Raqueta Babolat Pure Drive',
				imagen:BabolatDrive,
			},
		]
	}
	render(){
		return(
			<div>
				<BannerHome />
				<Historia historia={this.state.historia} />
				<Carrusel raquetas={this.state.raquetas} carruselID = 'carrusel-1' />
				<FullImg image={homeFooterImg} />
			</div>
		)
	}
}

export default HomePage;