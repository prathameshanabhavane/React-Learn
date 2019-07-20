import React, {Component} from 'react';

class Counter extends Component {
    state = {
       value : this.props.counter.value
    };

    // constructor() {
    //     super();
    //     this.handleIncreament = this.handleIncreament.bind(this);
    // }

    //second option to use arrow function get this  because arrow function dose not rebind

    handleIncreament = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1});
    }

    // handleIncreament() {
    //     console.log('Handling Increament', this);
    // }
    
    render() { 
        return ( 
            <div>
               <h4>Counter {this.props.counter.id} </h4>
                <span className={this.getBadgeClasses()}> {this.fromatCount()} </span> 
                <button onClick = { () => this.handleIncreament( {id:1} ) } className="btn btn-secondary btn-sm">Increment</button>
                <button type="button" onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm ml-3">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    fromatCount() {
        const { value } = this.state; // using object destructuring
        // return this.state.value === 0 ? 'Zero' : this.state.value
            return value === 0 ? 'Zero' : value;
        // return count === 0 ? <h1>Zero </h1> : count;
    }
}
 
export default Counter;