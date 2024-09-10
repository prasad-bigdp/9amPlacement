import { Component } from "react";

export class MyChild2 extends Component
{
    pro;
    constructor(props)
    {
        super()
     this.pro=props
    }
    render ()
    {
        return ( <h1>{this.pro.name}</h1>   )
    }
}
