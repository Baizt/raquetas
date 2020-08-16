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
	changeCarrusel = isNext =>{
		const ele = document.getElementById(this.props.carruselID);
		const {childrenLength, posicion} = this.state.carrusel;
		const old_left = (childrenLength * posicion * -1);

		const new_posicion = isNext ? posicion+1 : posicion-1;
		const new_left = (childrenLength * new_posicion * -1);

		ele.animate(
			[
				{ transform: `translateX(${old_left}px)` }, 
				{ transform: `translateX(${new_left}px)` },
			],
			{
			duration: 500,
			iterations: 1
		});
		ele.style.transform = `translateX(${new_left}px)`;

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
			this.changeCarrusel(false)
		}
	}
	handleNextImg = e =>{
		const {numChildren, posicion} = this.state.carrusel;
		if(posicion < numChildren-1){
			this.changeCarrusel(true)
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
									<div key={index} index={index} className={this.state.carrusel.posicion === index ? 'select' : ''}></div>
								)
							})}
						</div>
						<div className="controles-carrusel">
							<div className={`prev ${this.state.carrusel.posicion === 0 ? 'disabled' : ''}`} onClick={this.handlePrevImg}></div>
							<div className={`next ${this.state.carrusel.posicion === this.state.carrusel.numChildren-1 ? 'disabled' : ''}`} onClick={this.handleNextImg}></div>
						</div>
					</div>
				</aside>
				<div className="carrusel-container">
					<div className="carrusel-window">
						<div className="carrusel" id={this.props.carruselID}>
							{this.props.raquetas.map((raqueta, index) =>{
								return(
									<div key={index} data-index={index+1} className="container-raqueta noselect">
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