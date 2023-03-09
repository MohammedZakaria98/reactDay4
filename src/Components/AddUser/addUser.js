import React, { useState } from 'react';
import UsersListFunctional from './../usersListFunctional/UsersListFunctional';

const AddUser = () => {

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const [errors, sererrors] = useState({
        nameError: "",
        emailError: "",
    })

    const handleForm = (evt) => {
        //    console.log(evt.target);
        //    console.log(evt.target.value);
        // switch (evt.target.name) {
        //     case "name":
        //         setUser({...user, name: evt.target.value});
        //         break;
        //     case "email":
        //         setUser({ ...user, email: evt.target.value });
        //         break;
        //     default:
        //         return;


        // }

        setUser({ ...user, [evt.target.name]: evt.target.value });

        if (evt.target.name == "name") {

            sererrors({
                ...errors,
                nameError: (evt.target.value.length == 0) ?
                    "Name is Required" : (evt.target.value.length <= 3) ?
                        "Name must be at least 4 characters" : ""
            })
        } else if (evt.target.name == "email") {

            sererrors({ ...errors, emailError: (evt.target.value.length == 0) 
                ? "Email is Required" :
                 (evt.target.value.includes("@") ?
                  "" : "Email must include @") })
        }


    }

    const hadleSubmit=(e)=>{
   e.preventDefault()

    }



    return (
        <>
        {/* <UsersListFunctional/> */}
            <div className="p-5">
                <form autoComplete='off' onSubmit={(evt)=>hadleSubmit(evt)}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input type="text" 
                         name="name" className={`form-control shadow-none ${(errors.nameError)?'border-danger':''}`}
                          value={user.name}  id="formGroupExampleInput" placeholder="Name" onChange={(e) => handleForm(e)} />
                        <p className='text-danger'>{errors.nameError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                        <input type="text" name="email" className="form-control"
                           value={user.email} id="formGroupExampleInput2" placeholder="Email" onChange={(e) => handleForm(e)} />

                        <p className="text-danger">{errors.emailError}</p>
                    </div>
                    <button  className='btn btn-primary' type='submit'>Submit</button>
                    {/* {(errors.emailError)?<button disabled className='btn btn-primary' type='submit'>Submit</button>:
                    <button  className='btn btn-primary' type='submit'>Submit</button>} */}
                  
                </form>


            </div>

        </>
    );
}

export default AddUser;
