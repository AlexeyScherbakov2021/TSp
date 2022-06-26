import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

//import './custom.css'



export default class App extends Component {
  static displayName = App.name;

    constructor(props) {
        super(props);

        this.state = {
            searchText: null
        };

        this.updateData = this.updateData.bind(this);
    }

    //-----------------------------------------------------------------------------------
    componentDidUpdate() {
        this.state.searchText = null;
    }



    //-----------------------------------------------------------------------------------
    updateData = (value) => {
        this.setState({ searchText: value });
    }


    //-----------------------------------------------------------------------------------
    render() {

        return (
            <Layout updateData={this.updateData }>
                {/*<Route exact path='/' component={Home} />*/}
                <Route exact path='/' render={(props) => <Home searchText={this.state.searchText} {...props} />} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
    );
  }
}
