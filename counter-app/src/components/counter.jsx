import React, {Component} from 'react';

class Counter extends Component {
    state = {
       count : 0
    };
    render() { 
        return ( 
            <div>
                <span> {this.fromatCount()} </span> 
                <button>Increment</button>  
            </div>
        );
    }

    fromatCount() {
        const { count } = this.state; // using object destructuring
        // return this.state.count === 0 ? 'Zero' : this.state.count
            return count === 0 ? 'Zero' : count;
        // return count === 0 ? <h1>Zero </h1> : count;
    }
}
 
export default Counter;