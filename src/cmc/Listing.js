import React from 'react'

export default class listing extends React.Component {
    constructor()
    {
        super()
        this.state={
            items:null
        }
    }
    componentDidMount()
    {
        fetch("https://reqres.in/api/unknown").then((result)=>{
           result.json().then((data)=>{
           console.log("data",data);
           this.setState({items:data})
           })
        })
    }
    render() {
        return (
            <div className ="two">
                <h1>Listing Component</h1>
                
            </div>
        )
    }
}
