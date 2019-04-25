import React, { Component } from 'react';

//instead of count -> value for naming conventions. Counter has a value insteaf of count
//Counter has props
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log('counter-unmount')
  }
  //Invisible to other components
  //Add .counter to get give access to Counters props 
  //No need for state anymore since we will remove Local State and make it as Controlled Component
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl:
  //   //   "https://images.unsplash.com/photo-1553901901-6914c727802c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  //   tags: ['tag1', 'tag2', 'tag3']
  // };


  //************ */Binding Event Handlers**********************
  //Bind method is going to give a new instance of the object
  //This always reference to that object 
  //super() -> base constructor
  //When using arrow function -> no need to use THIS CONSTRUCTOR
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // Binds directly with arrow function
  //
  //parameter = product = to handleIncrement based on products ID 
  //******** No need since we dont have STATE *********
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 })
  // };

  //Instead adding this arrow function to render methods
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };


  //****************Conditional Rendering*********************
  // renderTags() {
  //   if (this.props.counter.tags.length === 0) return <p>There're no tags!</p>;
  //   return (
  //     <ul>
  //       {this.props.counter.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }




  //*************************jsx expression*************************
  //Babel can't compile 2 jsx elements. Can't compile long expression. With two jsx elements in one line
  //between span any expression within {}
  //Virtual DOM updates basen on span element --- badge which number changes based on Increment clicks
  //onClick method we pass function reference no argument in onClick method
  //inline functions
  render() {
    console.log('Counter -rendered ')
    //dont need becauce using props 
    //console.log('props', this.props);
    //Raising delete by Counters props -> coumter.id
    //On Delete -> raising delete to counters.jsx--> which is handling / deleting the Counter onClick (delete) but WITH REACT setState()!!
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
        {/* <div>
          {this.props.counter.tags.length === 0 && 'Please create a new tag'}
          {this.renderTags()}
        </div> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes
  }

  //assign count to state, so you dont have to repeat this.state.count ----> Embedding expressions
  //from state to props
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
