import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Exercise-Tracker</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="x nav-link active" aria-current="page" to="/">Exercises</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/create">Create Exercise Log</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


