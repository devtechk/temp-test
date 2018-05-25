import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
* STEPS
*
* 1. <Clock /> viene passato al ReactDOM.render() chiama il costruttore del componente ed inizializza lo stato
* dato che bisogna fare il display del current time.
*
* 2. React chiama il metodo render() del componente Clock così react viene istruito su cosa deve essere mostrato sullo shchermo.
*
* 3. Quando Clock viene inserito nel DOM react chiama componentDidMount() è un lifecycleHook.
* Qui dentro il comp. Clock chiede al browser di set up a timer per chiamare tick() ogni secondo.
*
* 4. Ogni secondo il browser chiama tick() qui dentro il componente clock programma un UI update chiamando setState,
* React così fa automaticamene il rendering perché lo state è cambiato.
*
*/


class Clock extends React.Component {
    constructor(props) {
        //Eredita le props dal padre
        super(props);
        //inizializza lo stato: current time
        this.state = {date: new Date()};
    }

    //il clock component chiede al browser di impostare un timer per chiamare il component tick() una volta a sec
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
   //lifecycle hook: If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
    // the Clock component schedules a UI update by calling setState() so by this React knows the state has changed and call again render()
        this.setState({
            date: new Date()
        });
    }

    render () {
        return (
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.state = {isToggled:true};
    }

    handleClick = () => {
        this.setState(function(prevState, props) {
            return {
                isToggled: !prevState.isToggled //il risultato sarà l'opposto del precedente stato di isToggle. il risultato di prevSt è un obj
            };
        });
    }
    render (){
        return (
            <button onClick={this.handleClick} className={this.state.isToggled ? 'active' : 'deactive'}>
                {this.state.isToggled ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function App() {
        return (
            <div className="container">
                <div className="content">
                    <Clock/>
                    <Button/>
                </div>
            </div>

        )
    }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
