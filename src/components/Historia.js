import React from 'react';
import './styles/Historia.scss';

function Historia(props) {
	function seccionaTexto(texto, separador) {
		return texto.split(separador).map(palabra=>{
			return (
				<span>{palabra+separador}</span>
			)
		})
	}
	return(
		<section className="historia-container">
			<article className="historia">
				<div className="historia-categoria">
					{props.historia.categoria}
				</div>

				<div className="historia-texto">
					<h2 className="titulo">{seccionaTexto(props.historia.titulo, '.')}</h2>
					<p className="intro">{props.historia.intro}</p>
				</div>
				
				<div className="historia-btn">
					<a href="#" className="btn">
						<span className="btn-txt">Historia</span>
					</a>
				</div>
			</article>
		</section>
	)
}

export default Historia;