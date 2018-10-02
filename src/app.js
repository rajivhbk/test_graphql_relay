import * as React from 'react';
import ReactDOM from 'react-dom';
import API from './API';

export default class App extends React.Component {
    componentDidMount () {
        console.log("App mounted");
        API.fetchLinks();
    }
    render () {
        return <div>Hello World!</div>
    };
}
