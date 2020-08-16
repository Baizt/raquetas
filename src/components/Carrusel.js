import React from 'react';
import './styles/Carrusel.scss';

class Carrusel extends React.Component {
	state = {
		carrusel:{
			length:0,
			childrenLength:0,
			numChildren:0,
			posicion:0,
		}
	}
	componentDidMount(){
		const carrusel = document.getElementById(this.props.carruselID);
		const numChildren = carrusel.childNodes.length;
		const length = carrusel.offsetWidth;
		const childrenLength = length / carrusel.childNodes.length;
		this.setState({
			carrusel:{
				...this.state.carrusel,
				length,
				numChildren,
				childrenLength,
			}
		})
	}
	changeCarrusel = numLugares =>{
		const {childrenLength, posicion} = this.state.carrusel;
		const new_posicion = posicion + numLugares;
		const new_left = (childrenLength * new_posicion * -1)+ 'px';

		document.getElementById(this.props.carruselID).style.left = new_left;

		this.setState({
			carrusel:{
				...this.state.carrusel,
				posicion:new_posicion,
			}
		})
	}
	handlePrevImg = e =>{
		const {posicion} = this.state.carrusel;
		if(posicion > 0){
			this.changeCarrusel(-1)
		}
	}
	handleNextImg = e =>{
		const {numChildren, posicion} = this.state.carrusel;
		if(posicion < numChildren-1){
			this.changeCarrusel(1)
		}
	}
	render(){
		return(
			<section className="seccion-carrusel">
				<aside className="banner-carrusel">
					<div className="text-container">
						<h2>Nuestras<br/><strong>Raquetas</strong></h2>
						<p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
						<div className="posicion-carrusel">
							{this.props.raquetas.map((raqueta, index) =>{
								return(
									<div key={index} index={index} className={this.state.carrusel.posicion == index ? 'select' : ''}></div>
								)
							})}
						</div>
						<div className="controles-carrusel">
							<div className="prev" onClick={this.handlePrevImg}></div>
							<div className="next" onClick={this.handleNextImg}></div>
						</div>
					</div>
				</aside>
				<div className="carrusel-container">
					<div className="carrusel-window">
						<div className="carrusel" id={this.props.carruselID}>
							{this.props.raquetas.map((raqueta, index) =>{
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
}

export default Carrusel;