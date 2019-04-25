import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ]
};

constructor() {
  super();
  console.log('App - Constructor')
}

componentDidMount() {
  console.log('App - mounted')
}
//Cloning counter array
//exact array from state counters
//increments one specific counter on provided index
//Spread operator to not update the state array directly
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
};

//get all the counters except with the given id 
handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });

};
//to get each counte, reset its value to 0 and return it
handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c
    });
    this.setState({ counters });
};

  render() {
    console.log('App - render')
    return (
      //when compiling multiple route elements for the render method. Need to wrap them with React.Frament
      //3 events that are raised by this component and this.handleReset -> corresponding handlers that belong to the APP component
      //Properties of prop object Counters
      //Show total numbers of Counters which value is higher than 0
      <React.Fragment>
          <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className='container'>
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}/>
          </main>
      </React.Fragment>
    );
  }
}

export default App;
