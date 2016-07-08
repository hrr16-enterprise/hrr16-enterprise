import React, { Component } from 'react';

export default class Sidebar extends Component {
  componentDidMount() {
    // this.props.showSidebar();
  }

  render () {	
  		console.log(this.props.auth);
		return (

	    <div className={this.props.sidebar.visible ? 'sidebar-open sidebar' : 'sidebar-close sidebar'}>
	    	<div className={ this.props.ui.animation ? "burger-container" : "burger-container-hidden"}>
	    		<div onTouchTap={this.props.sidebar.visible ? this.props.hideSidebar : this.props.showSidebar} className={this.props.sidebar.visible ? 'open hamburger' : 'close hamburger'}>
	    	</div>
	    		{this.props.sidebar.visible && this.props.auth.data &&
            <div className="favorited-items">
              <ul>
                 {this.props.auth.data.data.map((data) =>
                   <li>
                      <a href = {data.image_url} target='_blank'><img src = {data.favorite_url}/></a>
                    </li>
                  )} 
               </ul>
            </div>
          }
	    	</div>
	    </div>
	  )
  }
}
