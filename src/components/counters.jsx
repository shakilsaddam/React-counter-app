import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

  
  render() { 
    const {onReset, counters, onDelete, onIncriment, onDecriment} = this.props;
    return (
    <div>
      <button 
      className="btn btn-primary btn-sm m-2"
      onClick={onReset}
      >Reset</button>
      { counters.map(counter => (
        <Counter 
        key={counter.id} 
        counter={counter} 
        onDelete={onDelete} 
        onIncriment={onIncriment} 
        onDecriment={onDecriment} 
        />
      ))}
    </div>
    );
  }
}

export default Counters;