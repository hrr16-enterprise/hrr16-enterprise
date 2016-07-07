import React, { Component } from 'react';
import {Button, Card, Row, Col, Table} from 'react-materialize';

export default class About extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className={this.props.about.visible ? 'about-open about' : 'about-close about'}>
        <div className="about-container">
        <i onTouchTap={this.props.about.visible ? this.props.hideAbout : this.props.showAbout} className={this.props.about.visible ? 'fa fa-rocket fa-4x' : 'fa fa-rocket fa-4x fa-flip-horizontal'} aria-hidden="true" ></i>
        
        {this.props.about.visible &&
        <div>
          <div className="profileContainer">Meet the Team!</div>
            <Table className='centered'>
              <tbody>
                <tr>
                  <td className="td-img">
                    <img className="profile-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/06f/102/0d4fc75.jpg" />
                  </td>
                  <td className="td-img">
                    <img className="profile-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAftAAAAJGRkOWViMTE5LTIyYTktNDMzYS1hODBhLTNiYmQzYWIzNDM4OA.jpg" />
                  </td>
                  <td className="td-img">
                    <img className="profile-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAd-AAAAJGRmZDNkMzU3LTI4MTMtNGVjNC1hY2NmLTRiYWNlOWIyNDI2OQ.jpg" />
                  </td>
                  <td className="td-img">
                    <img className="profile-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/17f/25d/3122bec.jpg" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="profile-name">Gabriel Schrock</p>
                    <p className="profile-role">Product Owner</p>
                    <p className="profile-role">Software Engineer</p>
                    <a href="https://github.com/gschrock"> 
                      <i className="fa fa-github-square fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gschrock">
                      <i className="fa fa-linkedin-square fa-3x"></i>
                    </a>
                  </td>
                  <td>
                    <p className="profile-name">{"Matthew D\'Alessandro"}</p>
                    <p className="profile-role">Scrum Master</p>
                    <p className="profile-role">Software Engineer</p>
                    <a href="https://github.com/mDalessandro"> 
                      <i className="fa fa-github-square fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mtdalessandro">
                      <i className="fa fa-linkedin-square fa-3x"></i>
                    </a>        
                  </td>
                  <td>
                    <p className="profile-name">Brendan Pelletier</p>
                    <p className="profile-role">Development Team</p>
                    <p className="profile-role">Software Engineer</p>
                    <a href="https://github.com/bdpellet"> 
                      <i className="fa fa-github-square fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bdpellet">
                      <i className="fa fa-linkedin-square fa-3x"></i>
                    </a>        
                  </td>
                  <td>
                    <p className="profile-name">Chris Weaver</p>
                    <p className="profile-role">Development Team</p>
                    <p className="profile-role">Software Engineer</p>
                    <a href="https://github.com/MagWeaver"> 
                      <i className="fa fa-github-square fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/chweaver">
                      <i className="fa fa-linkedin-square fa-3x"></i>
                    </a>        
                  </td>
                </tr>
              </tbody>
            </Table> 
          </div>
        }
        </div>
      </div>
    )
  }
}

        // <div onTouchTap={this.props.about.visible ? this.props.hideAbout : this.props.showAbout} className={this.props.about.visible ? 'open sandwich' : 'close sandwich'}>
        // </div>
