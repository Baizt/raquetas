import React from 'react';
import './styles/FullImg.scss';

function FullImg(props){
	return(
		<div className="full-img-container">
			<img src={props.image} alt="Gaël Monfils utilizando nuestras Raquetas"/>
		</div>
	)
}

export default FullImg;