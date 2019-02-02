import React, { Component } from 'react';

class Counter extends Component {



  render() { 
    return(
      
    <div className="row">
      <div className="col-1">
        <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
      </div>
      <div className="col">
      <button onClick={() => this.props.onIncriment(this.props.counter)} className="btn btn-secondary btn-sm m-2">+</button>
      <button onClick={() => this.props.onDecriment(this.props.counter)} className="btn btn-secondary btn-sm" disabled={ this.props.counter.value === 0 ? true : "" } >-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>X</button>
      </div>
    </div>
    );
      
    
    
  }

  getBadgeClasses(){
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning":"primary";
    return classes;
  }

  disableButton(){
    let classes = "btn btn-sm btn-";
    classes += this.props.counter.value === 0 ? "secondary disabled":"secondary";
    return classes;
  }

  formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

}

export default Counter;
