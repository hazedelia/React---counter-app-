import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    //Each has their own state
    render() {
        console.log('Counters - rendered')
        //to not use props.onReset; onDelete, onIncrement
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'>Reset</button>
                {counters.map(counter =>
                    //don't need to have value 'selected={true}' - no need for this attribute. By default = true
                    //Inside this counter 
                    //'key' used internaly by React
                    //counter={counter} has all the data about Counter component 
                    //Raising to parent --> App.js

                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    // value={counter.value}
                    // id={counter.id}
                    >
                        <h4>Title</h4>
                        <h5>Counter #{counter.id}</h5>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;