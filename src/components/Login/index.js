import React from "react";
import './index.css';
import { CSVLink  } from 'react-csv';
import { useState } from "react";
export default function Login(props){

    var today = new Date().toLocaleDateString()

   const [item,setItem] = useState('');
   const [price,setPrice] = useState('');
   const [allItems,setAllItems] = useState([]);
   const [allPrice,setAllPrice] = useState([]);
   const [index,setIndex] = useState(0)
   const [date,setDate] = useState()

   const [error,setError] = useState('')
   const [moveToNextPage,setMoveToNextPage] = useState(false)
   const [moveToNextPage1,setMoveToNextPage1] = useState(false)
   const [moveToNextPage2,setMoveToNextPage2] = useState(false)
   const [moveToNextPage3,setMoveToNextPage3] = useState(false)
   const [userDetails,setUserDetails] = useState()

    const [nextPage,setNextPage] = useState(false);
    const [email,setEmail] = useState(props.email);
    const [password] = useState(props.password);
    const [name,setName] = useState(props.name);

    const [enteredemail,setEnteredEmail] = useState('');
    const [enteredpassword,setEnteredPassword] = useState('');

    const login = () =>{
        if(enteredemail === email && enteredpassword === password && enteredemail !='' && enteredpassword !=''){
          setNextPage(true)
          console.log('yes')
        }
        else if(enteredemail == null || enteredpassword == null){
          // setNextPage(false)
          console.log('no')
        }
        else{
          setNextPage(false)
          console.log('nno')
        }
        setMoveToNextPage1(true)
    }

    const logout = () =>{
            setNextPage(false)
            setMoveToNextPage1(false)
           }

      const addItem = () =>{

         const tempItem = [...allItems]
        //  const tempPrice = [...allPrice]
         tempItem.push({item,price,index,today})
        // tempItem.push({item,price})
        tempItem.sort(function(a, b) {
          var nameA = a.item.toUpperCase(); 
          var nameB = b.item.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        
        // tempItem.sort( compare );
        // tempPrice.push(price)
        // tempItem.sort((a, b) =>
        // a.localeCompare(b)
        // );
        //  tempPrice.sort((a, b) =>
        //  a.localeCompare(b)
        //   );
        setAllItems(tempItem)
        // tempPrice.push(price)
        //  setAllPrice(tempPrice)
         console.log(tempItem)
        //  console.log(tempPrice)
         setIndex((index+1))
         setItem('')
         setPrice('')
       }

       const deleteItem = (i) =>{
        allItems.splice(i,1)
        setAllItems([...allItems])
       }
        
       const headers = [
         { label : 'INDEX' , key : 'index' },
         { label : 'NAME' , key : 'item' },
         { label : 'DATE' , key : 'today' },
         { label : 'AMOUNT' , key : 'price' },
       ]
        
       const csvReport = {
         filename : 'Report.csv',
         headers : headers,
         data : allItems
       }

return(
    // <div>
         <>
     {moveToNextPage ? 
     <div>
       <h2 style={{textAlign:'center',color:'white',padding:10}}>ITEM DETAILS</h2>
       <table style={{border:'1px solid',width:1000,marginLeft:200,padding:25,borderRadius:'1.5rem'}}>
         <tr>
         <th>NUMBER</th>
         <th>NAME</th>
         <th>DATE</th>
         <th>AMOUNT</th>
         <th>DELETE YOUT ITEM</th>
         </tr>

         {allItems.map((value,i)=>{
           return(
             <>
             <tr>
               <td>{i+1}</td>
            
               <td>{value.item}</td>
          
               <td>{today}</td>

               <td>{value.price}</td>

               <td>
                 <button id='deleteButt' style={{width:100,height:50,borderRadius:'5px',border:0}} onClick={()=>deleteItem(i)}>DELETE</button>
               </td>
            
             </tr>
             </>
           )
         })}

       </table>
       <div style={{display:'flex',justifyContent:'center',marginTop:20}}>
         <div>
            <button id='deteleButt' style={{width:310,height:40,outline:'none',border: 0,borderRadius:'0.2em',backgroundColor:'#f1ece7e0'}} onClick={()=>{
              setMoveToNextPage(false)
              setMoveToNextPage2(false)
              }}>ADD MORE ITEMS</button>
         </div>
         <div style={{marginLeft:50}}>
            <CSVLink {...csvReport}>EXPORT YOUR ITEMS REPORT</CSVLink>
         </div>
        </div>
        {
        moveToNextPage3 ? 
       <></>
    :
    <div>
    <h2 style={{position:'absolute',color:'white',top:'590px'}}>Page<span>4</span></h2>
    </div>
    }

     </div>
:
(
    <>
        {
            nextPage?
            <>
               <div style={{textAlign:'center',fontSize:50,color:'white'}}>DASHBOARD</div>
               <div style={{display:'flex'}}>
                 <h3 style={{fontSize:20,padding:5,marginLeft:10,color:'white'}}>Welcome!<br /> <span style={{fontSize:40,color:'whitesmoke'}}>{props.name.toUpperCase()}</span></h3>
                 <button style={{width:100,height:50,marginLeft:900,border:0,outline:0,backgroundColor:'#ecd1d1b8',borderRadius:'.5em'}} onClick={()=>logout()}>LOGOUT</button>
               </div>
               <div style={{height:380,display:'flex'}}>
                 <div style={{height:400,width:400,alignSelf:'center',marginLeft:480}}>
                 <div style={{textAlign:'center'}}>
                   <div style={{marginTop:100}}>
                 <input required type='text' placeholder='Enter Your Item' style={{width:300,height:40,outlineStyle:'none',opacity:0.9}} onChange={(e)=>setItem(e.target.value)} value={item}/>
                   </div>
                   <div><br />
                 <input required type='text' placeholder='Enter Your Price'  style={{width:300,height:40,outlineStyle:'none',opacity:0.9}} onChange={(e)=>setPrice(e.target.value)} value={price}/>
                   </div><br />
                   <div>
                     <input type="submit" style={{width:310,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}} value='ADD ITEM' onClick={()=>addItem()} id='butt' />
                   </div><br />
                   <div>
                     <button style={{width:310,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}} onClick={()=>{
                       setMoveToNextPage(true)
                       setMoveToNextPage2(true)
                       setMoveToNextPage3(false)
                       }} id='butt'>ITEM DETAILS</button>
                   </div>
                 </div>
                 </div>
                 {
        moveToNextPage2 ? 
       <></>
    :
    <div>
    <h2 style={{position:'absolute',color:'white',top:'590px',left:'1px'}}>Page<span>3</span></h2>
    </div>
    }

               </div>
               </>
            :
            <>

        <div style={{backgroundColor:'rgb(167 164 164 / 0%)',height:625,display:'flex',alignSelf:'center',justifyContent:'center'}}>
             <div style={{justifyContent:'center',alignSelf:'center',backgroundColor:'rgb(167 164 164 / 0%)',height:500,width:400}}>
                 <div style={{textAlign:"center",marginTop:20,fontSize:50,color:'#f3bdbd',fontFamily:'none'}}>LOGIN</div>
             <form style={{textAlign:"center",marginTop:10,opacity:0.9}}>
                 <div>
                     {/* <label htmlFor="email" style={{fontSize:20}}>Email</label><br /> */}
                     <input required type='email' name='email' placeholder='Enter Your Email' onChange={(e)=>setEnteredEmail(e.target.value)} value={enteredemail} style={{width:300,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}}/>
                 </div>
                 <br />
                 <div>
                     {/* <label htmlFor="name" style={{fontSize:20}}>Password</label><br /> */}
                     <input required type='password' name='password' placeholder='Enter Your Password'onChange={(e)=>setEnteredPassword(e.target.value)} value={enteredpassword} style={{width:300,height:40,outlineStyle:'none',borderRadius:'.3em',outline:'none',borderColor:'#ffffff00'}}/>
                 </div>
                 <br />
                 <div>
                     <input required type='submit' value='LOGIN' style={{width:310,height:40,outline:'none',border: 0,borderRadius:'0.2em',backgroundColor:'#f1ece7e0'}} onClick = {()=>login()} />
                 </div>
             </form>
             </div>
             {
        moveToNextPage1 ? 
       <></>
    :
    <div>
    <h2 style={{position:'absolute',color:'white',top:'590px',left:'1px'}}>Page<span>2</span></h2>
    </div>
    }
        </div>


            </>
        }
    </>
    // </div>
    )
    }
    </>
    
    );
}
