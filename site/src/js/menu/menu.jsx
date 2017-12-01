import React from 'react'

class Menu extends React.Component{
	
	render(){
		let lista = this.props.lista.map(function(value, index){
			return (
				<li key={index}><a href={value.link}>{value.titulo}</a></li>
			)
		});
		return(
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				{lista}
		  	</ul>
		)
	}
}

export default Menu;