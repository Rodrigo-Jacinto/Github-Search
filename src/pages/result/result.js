import React, { Component } from 'react';
import api from '../../services/api';
import Profile from '../../components/profile/profile.js';
import searchIcon from './img/search-Icon.svg';
import { Link } from 'react-router';
import "./result-style.css";


export default class Result extends Component {

    state =
        {
            userGit: [],
            repoGit: []
        }

    componentDidMount() {
        this.searchUser();
    }

    searchUser = async () => {
        try {
            let { user } = this.props.params;
            let responseUser = await api.get(`/${user}`);
            let responseRepos = await api.get(`/${user}/repos`);
            this.setState({ userGit: [responseUser.data], repoGit: responseRepos.data });
            console.log(responseUser);
            this.user.value = user;
        }
        catch (err) {
            this.setState({ userGit: [] });
        }

    }


    search = async (event) => {

        event.preventDefault();
        try {
            var responseUser = await api.get(`/${this.user.value}`);
            var responseRepos = await api.get(`/${this.user.value}/repos`);

            if (responseUser.status === 200) {
                this.setState({ userGit: [responseUser.data], repoGit: responseRepos.data });

            }
        }
        catch (err) {
            this.setState({ userGit: [] });
        }

    }

    loadUser = () => {

        if (this.state.userGit.length > 0) {

            return <Profile user={this.state.userGit} repos={this.state.repoGit} />
        }
        else {
            return (
                <section className="row mt-5">
                    <div className="col-md-12 text-center">
                        <h1 className="not-found-message">User not found :(</h1>
                    </div>
                </section>
            )
        }
    }

    render() {

        return (
            <main className="container m-5">

                <seciton class="row">
                    <div class="col-md-4 col-sm-12">
                        <Link to="/" className="link-home"> <h1 class="Github-Search-Title Github-Search-Title2">Github<span class="text-style-1"> Search</span></h1></Link>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <form onSubmit={this.search}>
                            <div class="row d-flex justify-content-center">
                                <input type="text" className="Search-Input" ref={(input => (this.user = input))} required />
                                <button type="submit" class="button-search"><img src={searchIcon} /></button>
                            </div>
                        </form>
                    </div>

                </seciton>

                {
                    this.loadUser()
                }

            </main>

        )

    }
}