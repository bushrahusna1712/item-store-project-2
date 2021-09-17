import React from "react";
import './index.css'
import Login from "../Login";
import { useState } from "react";
export default function SignUp(){
    const [nextPage,setNextPage] = useState(false);
    const [nextPage1,setNextPage1] = useState(false);
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
return(
    <div>
    {
        nextPage? <div style={{display:"flex",flexDirection:'column'}}>
            <Login name={fullName} email={email} password = {password} />
    </div> 
    :
    <div style={{height:625,display:'flex',alignSelf:'center',justifyContent:'center'}}>
             <div style={{justifyContent:'center',alignSelf:'center',backgroundColor:'rgb(167 164 164 / 0%)',height:500,width:400}}>
                 <div style={{textAlign:"center",marginTop:20,fontSize:50,color:'#f3bdbd',fontFamily:'none'}}>SIGN UP</div>
             <div style={{textAlign:"center",marginTop:10,opacity:0.9}}>
                 <div>
                     {/* <label htmlFor="name" style={{fontSize:20}}>Username</label><br /> */}
                     <input type='text' placeholder='Enter Your Name' onChange={(e)=>setFullName(e.target.value)} value={fullName} style={{width:300,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}} required/>
                 </div>
                 <br />
                 <div>
                     {/* <label htmlFor="email" style={{fontSize:20}}>Email</label><br /> */}
                     <input type='email' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} value={email} style={{width:300,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}} required/>
                 </div>
                 <br />
                 <div>
                     {/* <label htmlFor="name" style={{fontSize:20}}>Password</label><br /> */}
                     <input type='password' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} value={password} style={{width:300,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}} required/>
                 </div>
                 <br />
                 <div>
                     <input required type='submit' value='SIGN UP' style={{width:310,height:40,outline:'none',border: 0,borderRadius:'0.2em',backgroundColor:'#f1ece7e0'}} onClick = {()=>{
                         setNextPage(true)
                         setNextPage1(true)
                         }}/>
                 </div>
             </div>
             </div>
        </div>
    }
    {
        nextPage1 ? 
       <></>
    :
    <div>
    <h2 style={{position:'absolute',color:'white',top:'590px'}}>Page<span>1</span></h2>
    </div>
    }
    </div>
)
}