import React from "react";

export class Car  extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return (
            <div>
                <h2>Hi, I am a {this.state.color} Car!</h2>
                <p>ref-link -- https://www.w3schools.com/react/react_class.asp</p>
            </div>
           
        );
    }
};
export default Car ;