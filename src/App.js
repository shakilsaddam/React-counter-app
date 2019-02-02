import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
  state = { 
    counters : [ 
      {id:1, value:4},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0}
  ]
  };

  handleIncriment = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleDecriment = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }

  handleReset = () =>{
    const counters = this.state.counters.filter(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }
  handleDelete =(CounterId) => {
    const counters = this.state.counters.filter(c => c.id !== CounterId);
    this.setState({counters});
  }
  render() {
    return (
    <React.Fragment>
    <Navbar totalCounter ={this.state.counters.filter(c => c.value > 0).length} />
    <main className="container">
      <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncriment={this.handleIncriment}
      onDecriment={this.handleDecriment}
      />
    </main>
    </React.Fragment>
    );
  }
}

export default App;
