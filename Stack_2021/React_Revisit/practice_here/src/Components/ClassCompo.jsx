import { Component } from "react";

class ClassCompo extends Component{

    constructor() {
        super();

        this.state={
            Name: "Rocky",
            count:0
        }
    }


    handleName() {
        this.setState({
            Name:"Johny"
        })
    }

    handleCount() {
        this.setState({
            count: this.state.count+1
        })
    }



    render(){
        return (
            <div>
                <h3>Hello {this.state.Name}, You are inside ClassComponent</h3>
                <div><h2>Counter:{this.state.count}</h2></div>
                <button onClick={()=>{this.handleName()}}>Change Name</button>
                <button onClick={()=>{this.handleCount()}}>Increase</button>
            </div>
        )
    }


}

export default ClassCompo;