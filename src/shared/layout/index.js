import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'

import "./style.css"

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header inHome={this.props.inHome} />
                <main className={!this.props.inHome && "main-content"}>{this.props.children}</main>
                <Footer/>
            </div>
        )
    }
}
