import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";
import Palette from './Palette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return(     
      <div className="PalleteList">
        <MiniPalette />
        <h1>React Colors</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette}/>
        ))}
      </div>
    )
  }
}

export default PaletteList;