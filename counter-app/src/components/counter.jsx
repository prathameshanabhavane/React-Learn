import React, {Component} from 'react';

class Counter extends Component {
    state = {
       count : 0,
    //    imageUrl : 'https://cdn.pixabay.com/photo/2017/07/18/15/00/autumn-2516038_960_720.jpg'
    };

    styles = {
        fontSize : 16,
        fontWeight : 'bold'
    };
    
    render() { 
        return ( 
            <div style={{ backgroundColor: 'purple', marginTop: 30}}>
                {/* <img src={this.state.imageUrl} alt="Image" /> */}
                <span style={this.styles} className="badge badge-primary m-3"> {this.fromatCount()} </span> 
                <button className="btn btn-secondary btn-sm" style={{fontSize: 20}}>Increment</button>  
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