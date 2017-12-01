import React from 'react'
import Menu from '../menu/menu'

class NavBar extends React.Component{	
	render(){
		let menuColor = 'nav-wrapper ' + this.props.menuColor;
		let menu = [
			{titulo: 'Menu1', link:'#menu1'},
			{titulo: 'Menu2', link:'#menu2'},
			{titulo: 'Menu3', link:'#menu3'},
			{titulo: 'Menu4', link:'#menu4'}
		]
		return(
			<nav>
				<div className={menuColor}>
					<div className="container">
						<a href="#" className="brand-logo">{this.props.titulo}</a>
						<Menu lista={menu}/>
					</div>
				</div>
		  	</nav>
		)
	}
}

export default NavBar;