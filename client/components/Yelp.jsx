import React, { Component } from 'react';


export default class Yelp extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    if (this.props.yelp.result.data) {
      
      const YelpData = this.props.yelp.result.data;
      
     for(let i = 0; i < YelpData.length; i++){
       this.props.pingGlobe("<h3>" + 
        "<a href=" + "'" + YelpData[i].url + "'" + "target='_blank'" + ">" + YelpData[i].name + "</a>" + 
        "<div><img src =" + YelpData[i].image_url +"></div>" + 
        "<div><img src =" + YelpData[i].rating_img_url +"></div>" +
        "<div>" + YelpData[i].deals[0].options[0].title + "</div>" +  
        "" + (Math.floor(YelpData[i].distance)*0.0006).toFixed(2) + "" + " mi",
        this.props.yelp.globe,
        YelpData[i].location.coordinate.latitude, 
        YelpData[i].location.coordinate.longitude)
     }       
    }    
  }
  
  render() {
    return false;
  }
}
