import React, { Component } from 'react';

export default class Sidebar extends Component {
  componentDidMount() {
    // this.props.showSidebar();
  }

  render () {		
		return (
	    <div className={this.props.sidebar.visible ? 'sidebar-open sidebar' : 'sidebar-close sidebar'}>
	    	<div className="burger-container">
	    		<div onTouchTap={this.props.sidebar.visible ? this.props.hideSidebar : this.props.showSidebar} className={this.props.sidebar.visible ? 'open hamburger' : 'close hamburger'}>
	    	</div>
	    		{this.props.sidebar.visible &&
				    <div className="favorited-items">
	    				<span>Articles</span>
	    				<ul>
	    					<li>......</li>
	    					<li>......</li>
	    					<li>......</li>
	    				</ul>
	    				<span>Events</span>
	    				<ul>
	    					<li>......</li>
	    					<li>......</li>
	    					<li>......</li>
	    				</ul>
	    				<span>Flickr</span>
	    				<ul>
	    					<li>......</li>
	    					<li>......</li>
	    					<li>......</li>
	    				</ul>
	    				<span>Youtube</span>
	    				<ul>
	    					<li>......</li>
	    					<li>......</li>
	    					<li>......</li>
	    				</ul>
	    				<span>Yelp</span>
	    				<ul>
	    					<li>......</li>
	    					<li>......</li>
	    					<li>......</li>
	    				</ul>
	    				<span>EarthQuakes</span>
	    				<ul>
	    					<li>......</li>
	    					<li>......</li>
	    					<li>......</li>
	    				</ul>
	    			</div>
				  }
	    	</div>
	    </div>
	  )
  }
}