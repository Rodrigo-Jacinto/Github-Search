import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './home-style.css';
import searchIcon from './img/search-Icon.svg';

export default class Home extends Component {


    searchUser = (event) => {
        event.preventDefault();
        browserHistory.push(`/result/${this.user.value}`);
    }

    render() {

        return (

            <main className="container d-flex h-100">

                <div className="row justify-content-center align-self-center">

                    <seciton className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h1 className="Github-Search-Title">Github<span className="text-style-1"> Search</span></h1>
                        </div>
                    </seciton>

                    <form onSubmit={this.searchUser}>
                        <div className="row d-flex justify-content-center">
                            <input type="text" className="Search-Input" ref={(input => (this.user = input))} required />
                            <button type="submit" className="button-search"><img src={searchIcon} /></button>
                        </div>
                    </form>
                </div>
            </main>

        );
    }
}
