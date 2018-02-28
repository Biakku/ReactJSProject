import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <table id='all'>
          <tr><td id='header'>
            <div id='menu'>
            <input type="text" id="fname" name="search" placeholder="Szukaj kategorii"/>
            </div>
          </td></tr>
          <td id='center'>
            <h1 id='randomProjectText'>Losowy projekt</h1>
          </td>
      </table>
    );
  }
}

export default App;
