import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import {Editor, DrawPolygonMode, EditingMode} from 'react-map-gl-draw';

import ControlPanel from './control-panel';
import {getFeatureStyle, getEditHandleStyle} from './style';
import {
  Card,
   CardContent,
   CardHeader
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
 
      
  _updateViewport = viewport => {
    this.setState({viewport});
    console.log(viewport);
  };

  _onSelect = options => {
    this.setState({selectedFeatureIndex: options && options.selectedFeatureIndex});
  };

  _onDelete = () => {
    const selectedIndex = this.state.selectedFeatureIndex;
    if (selectedIndex !== null && selectedIndex >= 0) {
      this._editorRef.deleteFeatures(selectedIndex);
    }
  };

  _onUpdate = ({editType}) => {
    if (editType === 'addFeature') {
      this.setState({
        mode: new EditingMode()
      });
    }
  };
      _renderDrawTools = () => {
        // copy from mapbox
        return (
          <div className="mapboxgl-ctrl-top-left">
            <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
              <button
                className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
                title="Polygon tool (p)"
                onClick={() => this.setState({mode: new DrawPolygonMode()})}
              />
              <button
                className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
                title="Delete"
                onClick={this._onDelete}
              />
            </div>
          </div>
        );
      };
    
      _renderControlPanel = () => {
        const features = this._editorRef && this._editorRef.getFeatures();
        let featureIndex = this.state.selectedFeatureIndex;
        if (features && featureIndex === null) {
          featureIndex = features.length - 1;
        }
        const polygon = features && features.length ? features[featureIndex] : null;
        return <ControlPanel containerComponent={this.props.containerComponent} polygon={polygon} />;
      };

      render(){
        const {viewport, mode} = this.state;
          return(
            <Card  >
          <CardHeader
        title="Ajouter un champ d'agriculture sur la carte"
      />
            <CardContent>
              <div id="map" className="mapContainer">
                   <ReactMapGL {...viewport} 
                   mapStyle="mapbox://styles/mapbox/outdoors-v11" 
                   onViewportChange={(viewport =>
                   this.setState({viewport}))} 
                   mapboxApiAccessToken="pk.eyJ1Ijoic2FteWxtcyIsImEiOiJja2J1YXZvcXkwM21jMnlwZzZpOWU2aG1wIn0.E7E4xlfZunVo-RqW6fAD6Q">
                    <Editor
                    ref={_ => (this._editorRef = _)}
                    style={{width: '100%', height: '100%'}}
                    clickRadius={12}
                    mode={mode}
                    onSelect={this._onSelect}
                    onUpdate={this._onUpdate}
                    editHandleShape={'circle'}
                    featureStyle={getFeatureStyle}
                    editHandleStyle={getEditHandleStyle}
                    />
                     {this._renderDrawTools()}
                     {this._renderControlPanel()}
                   </ReactMapGL>
              </div>
               
            </CardContent>          
          </Card>
          )
      }
  }
  

export default Map;