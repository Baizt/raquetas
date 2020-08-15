import React from 'react';
import Historia from './Historia';
import Carrusel from './Carrusel';
import FullImg from './FullImg';
import homeFooterImg from '../images/homeFooter.jpg';

class HomePage extends React.Component {
	state = {
		historias:[
			{
				categoria:'Tennis',
				categoria:'Raquetas.Accesorios.Pelotas.',
				categoria:'Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.',
			}
		],
		raquetas:[
			//modelos de raquetas
		]
	}
	render(){
		return(
			<div>
				<Historia/>
				<Carrusel/>
				<FullImg image={homeFooterImg} />
			</div>
		)
	}
}

export default HomePage;