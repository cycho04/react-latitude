import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { latitude: null, errorMessage: '' };
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        ); 
    }

    render(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude} />    
        }
         
        return <Spinner message='Please accept the location request..'/>;
    }
};

ReactDOM.render(<App />, document.getElementById('root'));