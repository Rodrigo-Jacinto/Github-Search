import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './home-style.css';

export default class Home extends Component {


    searchUser = (event) => {
        event.preventDefault();
        browserHistory.push(`/result/${this.login.value}`);
    }

    render() {

        return (

            <main>
                <div className="Github-Search">
                    <h1>Github <span className="text-style-1">Search</span></h1>
                </div>
                <form onSubmit={this.serachUser}>
                    <input type="text" className="Search-Input" ref={(input => (this.login = input))} required />
                    <button type="submit">Pesquisar</button>
                </form>
            </main>

        );
    }
}
