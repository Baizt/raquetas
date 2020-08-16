import React from 'react';
import './styles/Carrusel.scss';

function Carrusel(params) {
	return(
		<section className="seccion-carrusel">
			<aside className="banner-carrusel">
				<div className="text-container">
					<h2>Nuestras<br/><strong>Raquetas</strong></h2>
					<p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
					<div className="posicion-carrusel">
						{params.raquetas.map((raqueta, index) =>{
							return(
								<div key={index}></div>
							)
						})}
					</div>
					<div className="controles-carrusel">
						<div className="prev"></div>
						<div className="next"></div>
					</div>
				</div>
			</aside>
			<div className="carrusel-container">
				<div className="carrusel-window">
					<div className="carrusel">
						{params.raquetas.map((raqueta, index) =>{
							return(
								<div key={index} data-index={index+1} className="container-raqueta">
									<img src={raqueta.imagen} alt={raqueta.nombre}/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Carrusel;