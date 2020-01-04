import React, { Component } from 'react';
import Repositories from '../repositories/repositories.js';
import "./profile-style.css";

export default class Profile extends Component {

    render() {

        let [userGit] = this.props.user;
        let repositories = this.props.repos;

        return (
            <section className="row">
                <div class="col-md-4">

                    <figure>
                        <img src={userGit.avatar_url} class="user-avatar mb-3" />
                        <figcaption>
                            <span class="user-name">{userGit.name}</span>
                            <span class="user-login">{userGit.login}</span>
                        </figcaption>
                    </figure>

                    <ul>
                        <li>{userGit.followers}</li>
                        <li>{userGit.following}</li>
                        <li>{userGit.email}</li>
                    </ul>

                </div>

                <div class="col-sm-8">
                    <Repositories repos={repositories} />
                </div>
            </section>




        )

    }
}










