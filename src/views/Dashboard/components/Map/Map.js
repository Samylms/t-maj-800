import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
 
import {
  Card,
   CardContent,
 } from '@material-ui/core';
import './Map.css';
 
 
  class Map extends Component{

    
    state = {
        viewport: {
          width: "50vw",
          height: "50vh",
          latitude: 48.8534,
          longitude: 2.35999,
          zoom: 10
        }
        
      };
 
      
        
      render(){
          return(
            <Card  >
          
            <CardContent>
              <div id="map" className="mapContainer">
                   <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/outdoors-v11" onViewportChange={(viewport =>
                   this.setState({viewport}))} mapboxApiAccessToken="pk.eyJ1Ijoic2FteWxtcyIsImEiOiJja2J1YXZvcXkwM21jMnlwZzZpOWU2aG1wIn0.E7E4xlfZunVo-RqW6fAD6Q">
                   </ReactMapGL>
              </div>
              <div className="calculation-box">
            <p>Draw a polygon using the draw tools.</p>
            <div id="calculated-area"></div>
            </div>
            </CardContent>          
          </Card>
          )
      }
  }
 
 
 

export default Map;