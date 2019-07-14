import React, {Component} from 'react';

class Counter extends Component {
    state = {
       count : 0,
       tages : ['tag1', 'tag2', 'tag3']
    };
    
    render() { 
        return ( 
            <div>
                <span className={this.getBadgeClasses()}> {this.fromatCount()} </span> 
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tages.map( tag => <li key={tag}> {tag} </li> ) }
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "dadge m-3 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    fromatCount() {
        const { count } = this.state; // using object destructuring
        // return this.state.count === 0 ? 'Zero' : this.state.count
            return count === 0 ? 'Zero' : count;
        // return count === 0 ? <h1>Zero </h1> : count;
    }
}
 
export default Counter;