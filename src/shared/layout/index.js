import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header inHome={this.props.inHome} />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
