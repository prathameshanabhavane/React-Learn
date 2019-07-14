import React, {Component} from 'react';

class Counter extends Component {
    state = {
       count : 0,
       tages : ['tag1', 'tag2', 'tag3']
    };
    
    renderTags() {
        if  (this.state.tages.length === 0) return <p>Pragraphas has no tgas! </p>

        return <ul> {this.state.tages.map( tag => <li key={tag}> {tag} </li> ) } </ul>
    }

    render() { 
        return ( 
            <div>
                {/* {this.state.tages.length === 0 && 'Please create new tag'} //another option to write condition */}
                <ul>
                   {this.renderTags()}
                </ul>
            </div>
        );
    }

}
 
export default Counter;