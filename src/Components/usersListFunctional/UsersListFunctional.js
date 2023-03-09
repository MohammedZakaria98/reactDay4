import {useState,useEffect} from 'react'

const UsersListFunctional=()=>{
   
   const [users , setUsers] = useState([
        { name: "Mona", email: "mona@gmail.com", isAdmin: true },
        { name: "Lara", email: "lara@gmail.com", isAdmin: true },
        { name: "salma", email: "salma@gmail.com", isAdmin: false },
        { name: "engy", email: "engy@gmail.com", isAdmin: true },
    ])

    const [isAuth,setIsAuth]=useState(true)

   const handleToggle=()=>{
    setIsAuth(!isAuth)
   }

   //Mounting

   useEffect(()=>{
     
      console.log("Component did mount");
      

   //unMounting
      return function(){//un mounting  cleanup method
         console.log("will un mount");
      }

   },[])

   //updating

   useEffect(()=>{

   console.log("component did update isAuth");
  
   },[isAuth])

   useEffect(()=>{
    console.log("component did update users");

   },[users])


    return <>

    {(isAuth==true)?   <ul>
        {users.map(function(user,index){
               if(user.isAdmin){

                return <li key={index}>{user.name}</li>
               }
            
        })}
    </ul>:<p>you must Login first</p>}

    <button className='btn btn-primary' onClick={()=>handleToggle()}>Toggle</button>
 
    </>
}

export default UsersListFunctional