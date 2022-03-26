import HoomScreen from './Screens/HoomScreen/HoomScreen'

const App = () => {
  return (
    <>
      <HoomScreen />

    </>
  );
}

export default App;




















/* 
import React, { Component } from 'react';
 
class App extends Component {
  constructor(){
    super();
    this.state ={
      users: ['abc',"pdsa","eccs","koi"],
      input: '',
    }
  }
  
  onChangeHandler(e){
    this.setState({
      input: e.target.value,
    })
  }
  
  render (){
      const list = this.state.users
        .filter(item => item.includes(this.state.input))
        .map((item, index) => <li key={index}>{item}</li>);
  
    return (<div>
      <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
        <ul>{list}</ul>
      </div>)
  }
  }
   
export default App

 */











/* import HoomScreen from './Screens/HoomScreen/HoomScreen'
import InputSearch from './Example'

const App = () => {
  return (
    <>
      <HoomScreen />

    </>
  );
}

export default App;
 */