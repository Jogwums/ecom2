import React, { Component } from 'react'
import { Card } from '../../components/index'

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            loading: false,
            user: [],
        }
    }

    componentDidMount(){
        console.log('home component loaded');
    }


    render() {
        return (
            <div>
                Hello From Home 
                <Card />
            </div>
        )
    }
}

export default Home
