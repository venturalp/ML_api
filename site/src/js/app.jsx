import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo'
import NavBar from './navbar/navbar'

let app = (
	<div>
		<NavBar menuColor="blue" titulo="Meu Menu"/> 	
		<div className="container">
			<Titulo teste="variávaaael" />
		</div>
	</div>
);

ReactDOM.render(app, document.getElementById('meuApp'));