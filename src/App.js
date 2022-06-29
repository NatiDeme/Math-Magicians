import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" />
//       <Calculator />
//     </div>
//   );
// }

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
