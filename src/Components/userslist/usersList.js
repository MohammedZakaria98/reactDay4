import React from 'react';

class UsersList extends React.Component {

    constructor() {
        super();
        this.state = {
            isAuth: false,
            users: [
                { name: "Mona", email: "mona@gmail.com", isAdmin: true },
                { name: "Lara", email: "lara@gmail.com", isAdmin: true },
                { name: "salma", email: "salma@gmail.com", isAdmin: false },
                { name: "engy", email: "engy@gmail.com", isAdmin: true },
            ]
        };
    }


    handleChange = () => {

        this.setState({ isAuth: !this.state.isAuth })

    }
    render() {
        return (
            <>
                {/* {this.state.isAuth &&  <ul>
             {this.state.users.map(function(user,index){
                if(user.isAdmin){

                    return <li key={index}>{user.name}</li>
                }
                

             })}
                </ul>} */}

                {(this.state.isAuth == true) ? <ul>
                    {this.state.users.map(function (user, index) {
                        if (user.isAdmin) {

                            return <li key={index}>{user.name}</li>
                        }


                    })}
                </ul> : <p>You must be Authunteticated</p>}

                <button className='btn btn-success' onClick={() => this.handleChange()}>Toggle isAuth</button>

            </>
        );
    }
}

export default UsersList;

