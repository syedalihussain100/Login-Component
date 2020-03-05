import React from 'react'
import "./myStyle.css";

export default class Auth extends React.Component {
    constructor()
    {
        super()
        {
         this.state={
             isRegister:false
         }
        }
    }
    login(){
        console.warn("state",this.state);
        fetch("https://reqres.in/api/login",{
            method:"POST",
         headers:{
             "Accept":"application/json",
             "Content-Type":"application/json",
         },
         body:JSON.stringify(this.state)
        }).then((result)=>{
         result.json().then((resp)=>{
          console.log(resp.token);
          localStorage.setItem("Auth",JSON.stringify(resp.token))
         })
        })
        
        
    }
    register(){
        console.warn("state",this.state);
        fetch("https://reqres.in/api/users,https://reqres.in/api/register,https://reqres.in/api/users/2",{
            method:"POST",
         headers:{
             "Accept":"application/json",
             "Content-Type":"application/json",
         },
         body:JSON.stringify(this.state)
        }).then((result)=>{
         result.json().then((resp)=>{
          console.log(resp.token);
          localStorage.setItem("Auth",JSON.stringify(resp.token))
         })
        })
        

    }

    render() {
        return (
            <div className = "three">
             {
                 !this.state.isRegister ?
                 <div className="one">
            
              Email: <input placeholder = "Enter-Name" type ="text" name = "User" onChange={(e)=>{this.setState({email:e.target.value})}}/> <br/><br/>
              password: <input placeholder = "Enter-Password" type = "password" name = "password" onChange={(e)=>{this.setState({password:e.target.value})}}/> <br/><br/>
                                     <br></br>
                <button onClick={()=>this.login()}> Login </button><br></br><br></br>
                <button onClick={()=>this.setState({isRegister:true})}>go to Register</button>


            </div>
            :
            <div className="one">
             <input placeholder = "Enter-Name" type ="text" name = "Name" onChange={(e)=>{this.setState({Name:e.target.value})}}/> <br/><br/>
             <input placeholder = "Enter-Email" type = "text" name = "Email" onChange={(e)=>{this.setState({Email:e.target.value})}}/> <br/><br/>
             <input placeholder = "Password" type = "password" name = "password" onChange={(e)=>{this.setState({password:e.target.value})}}/> <br/><br/>
             <input placeholder = "Confirm-Password" type = "password" name = "c_password" onChange={(e)=>{this.setState({c_password:e.target.value})}}/> <br/><br/>

                                     <br></br>
                  
                    
                <button onClick={()=>this.register()}> Register </button><br></br><br></br>
                <button onClick={()=>this.setState({ isRegister:false })}>go to Login</button>  
            </div>
             }
            
           
                
            </div>
        )
    };
};
