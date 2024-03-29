import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  
  state = { 
		counters : [
			{	id : 1, value : 4 },
			{	id : 2, value : 0 },
			{	id : 3, value : 0 },
			{	id : 4, value : 0 }
		]
   };
   
  constructor(props) {
    super(props);
    console.log('App - Constructor', this.props);
  }

  componentDidMount() {
    console.log('App Mounted');
  }

	handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters})
  }

	handelDelete = counterId => {
		// console.log('handele delete', counterId);
		const counters = this.state.counters.filter( c => c.id !== counterId);
		this.setState( {counters});
	};

	handelReset = () => {
		const counters = this.state.counters.map( c => {
			c.value = 0;
			return c;
		});
		this.setState({counters})
	};
  
  render(){
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar  totalCounters={this.state.counters.filter( c => c.value > 0 ).length} />
        <main className="container">
          <Counters counters={this.state.counters} 
                    onReset={this.handelReset} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handelDelete} />
        </main>
        </React.Fragment>
    );
  }
}

export default App;
