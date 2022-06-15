import React, { Component } from "react"

class Menu extends Component {
    state={
        options:['Renting','Registration','Stock Locator','Reservation','Update Client']
    } 
    render() { 
        return (
        <React.Fragment>
            <ul>
                {this.state.options.map(option=> <button className="btn btn-outline-success me-5 btn-lg" key={option}>{option}</button>)}
            </ul>
        </React.Fragment>
        )
    }   
}
 
export default Menu;