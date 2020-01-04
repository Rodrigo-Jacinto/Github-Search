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

            <main class="container d-flex h-100">

                <div class="row justify-content-center align-self-center">

                    <seciton class="row">
                        <div class="col-md-12 col-sm-12 text-center">
                            <h1 class="Github-Search-Title">Github<span class="text-style-1"> Search</span></h1>
                        </div>
                    </seciton>

                    <form onSubmit={this.searchUser}>
                        <div class="row d-flex justify-content-center">
                            <input type="text" className="Search-Input" ref={(input => (this.user = input))} required />
                            <button type="submit" class="button-search"><img src={searchIcon} /></button>
                        </div>
                    </form>
                </div>
            </main>

        );
    }
}
