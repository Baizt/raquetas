import React from 'react';
import './styles/Historia.scss';

function Historia(props) {
	return(
		<section className="historia-container">
			<article className="historia">
				<div className="historia-categoria">
					{props.historia.categoria}
				</div>

				<div className="historia-texto">
					<h2 className="titulo">{props.historia.titulo}</h2>
					<p className="intro">{props.historia.intro}</p>
				</div>
				
				<div className="historia-btn">
					<a href="#">
						<span className="btn-txt">Historia</span>
						<span className="flecha">→</span>
					</a>
				</div>
			</article>
		</section>
	)
}

export default Historia;