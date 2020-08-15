import React from 'react';
import './styles/FullImg.scss';

function FullImg(props){
	return(
		<section className="full-img-container">
			<img src={props.image} alt="Gaël Monfils utilizando nuestras Raquetas"/>
		</section>
	)
}

export default FullImg;