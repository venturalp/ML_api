import React from 'react';

class Titulo extends React.Component {
	render(){
		return (<h1>Curso de React! {this.props.teste}</h1>);
	};
}

export default Titulo;