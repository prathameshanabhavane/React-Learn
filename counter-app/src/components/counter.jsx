import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('PrevProps', prevProps);
        console.log('PrevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter Unmount');
    }

    render() { 
        console.log('Counter - Rendred');
        return ( 
            <div>
                <h4>Counter {this.props.counter.id} </h4>
                <div className="row">
                    <div className="col-12 col-md-1">
                        <span className={this.getBadgeClasses()}> {this.fromatCount()} </span>  
                    </div>
                    <div className="col-12 col-md-11">
                        <button 
                            onClick = { () => this.props.onIncrement( this.props.counter ) } 
                            className="btn btn-secondary btn-sm m-2">
                            +
                        </button>
                        <button 
                            onClick = { () => this.props.onDecrement( this.props.counter ) } 
                            className="btn btn-secondary btn-sm m-2" 
                            disabled = { this.props.counter.value === 0 ? "disabled" : "" }>
                            -
                        </button>
                        <button type="button" 
                            onClick={() => this.props.onDelete(this.props.counter.id)} 
                            className="btn btn-danger btn-sm ml-2">
                            Delete
                        </button>
                    </div>
                </div>
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