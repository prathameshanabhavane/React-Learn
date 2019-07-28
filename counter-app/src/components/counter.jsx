import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('PrevProps', prevProps);
        console.log('PrevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server
        }
    }
    render() { 
        console.log('Counter - Rendred');
        return ( 
            <div>
               <h4>Counter {this.props.counter.id} </h4>
                <span className={this.getBadgeClasses()}> {this.fromatCount()} </span> 
                <button onClick = { () => this.props.onIncrement( this.props.counter ) } className="btn btn-secondary btn-sm">Increment</button>
                <button type="button" onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm ml-3">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    fromatCount() {
        const { value } = this.props.counter; // using object destructuring
        // return this.state.value === 0 ? 'Zero' : this.state.value
            return value === 0 ? 'Zero' : value;
        // return count === 0 ? <h1>Zero </h1> : count;
    }
}
 
export default Counter;