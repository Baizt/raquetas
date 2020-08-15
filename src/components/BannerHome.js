import React from 'react';
import './styles/BannerHome.scss';

function BannerHome(){
	return(
		<section className="banner-home">
			<div className="container-banner">
				<div className="content-banner">
					<h1>Las mejores raquetas para jugar <strong>Tennis</strong></h1>
					<a href="#" className="btn">Acerca de Nosotros</a>
				</div>
			</div>
		</section>
	)
}

export default BannerHome;