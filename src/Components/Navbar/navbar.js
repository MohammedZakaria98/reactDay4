import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default class Header extends React.Component {

    constructor() {//1
        super()
        console.log("from constructor");
        this.state = {
            name: "Mohammed",
            title: "Instructor",
            products: [],
            address: {},
            id: 1
        }
    }
    componentDidMount() {//3
        console.log("from componentDidMount");


    }

    componentDidUpdate() {//updating
        console.log("from componentDidUpdate");

    }

    componentWillUnmount() {
        //Clean up method
        console.log("from componentWillUnmount");
    }

    handleChange = (num) => {
        this.setState({ name: "Salma", title: "web developer" })
        console.log(num);
    }


    render() {//2
        console.log("from render");
        console.log(this.props);
        return <>
            <nav class="navbar bg-warning text-white navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/" >Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/movies">Movies</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/favoriteMovies">Favorite Movies</Link>
                            </li>
                        </ul>
                        {/* <Nav className="me-auto">
                            <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to="/">Home</NavLink>
                            <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to="/about" className="mx-3">About Us</NavLink>
                            <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to="/contact">Contact Us</NavLink>
                            <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to="/movies" className="mx-3">Products</NavLink>
                        </Nav> */}
                    </div>
                </div>
            </nav>
        </>
    }


}