import logo from './logo.svg';
import './App.css';
import React from 'react';
import Game from './components/Game';

class App extends React.Component{
  render(){
    return(
      <Game/>
    )
  }
}

// Class Based Component Method -> Statefull
// class App extends React.Component{
//   render(){
//     return(
//       <div>Class Based Component</div>
//     )
//   }
// }

// Functional Based Component Method -> Stateless
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
