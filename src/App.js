import React from 'react';
import Menu from './components/Menu'
import Container from './components/Container'

const App = (props) => {
  const {
    children
  } = props;
  return (
    <div className="App">
      <Menu/>
      <Container content={children}/>
    </div>
  );
}

export default App;
