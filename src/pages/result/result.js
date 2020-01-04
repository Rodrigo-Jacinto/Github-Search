import React, { Component } from 'react';
import api from '../../services/api';
import Profile from '../../components/profile/profile.js';
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
            return <div>Nada encontrado</div>

        }
    }

    render() {

        return (
            <main className="contaier m-5">

                <seciton class="row">
                    <div class="col-md-4 col-sm-12 text-center">
                        <h1 class="Github-Search-Title Github-Search-Title2">Github<span class="text-style-1"> Search</span></h1>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <form onSubmit={this.search}>
                            <input type="text" className="Search-Input" ref={(input => (this.user = input))} required />
                            <button type="submit" className="button-search">Pesquisar</button>
                        </form>
                    </div>

                </seciton>

                <div className="mt-5">

                    {
                        this.loadUser()
                    }
                </div>

            </main>

        )

    }
}