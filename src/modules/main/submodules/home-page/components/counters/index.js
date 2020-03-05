import React, { Component } from 'react'

export default class Counters extends Component {
     counters =[
        {
            number : 100,
            name : "Awords Won"
        },
        {
            number : 100,
            name : "Awords Won"
        },
        {
            number : 100,
            name : "Awords Won"
        },
        {
            number : 100,
            name : "Awords Won"
        }
]
    render() { 
        return (
            <div>
                {this.counters.map(counterItem=>{
                    return(
                        <div>
                            <h2 className="counter" data-from="50" data-to={counterItem.number}> </h2>
                            <p>{ counterItem.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
