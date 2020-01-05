import React, { Component } from 'react';
import Repositories from '../repositories/repositories.js';
import followersIcon from './img/followers-icon.svg';
import followingIcon from './img/following.svg';
import emailIcon from './img/email.svg';
import repositorieIcon from './img/repositorie-icon.svg';

import "./profile-style.css";

export default class Profile extends Component {

    render() {

        let [userGit] = this.props.user;
        let repositories = this.props.repos;

        return (
            <section className="row mt-5">
                <div className="col-lg-4 col-md-12 col-sm-12">

                    <figure>
                        <img src={userGit.avatar_url} alt="avatar" title="foto do perfil" className="user-avatar mb-3" />
                        <figcaption>
                            <span className="user-name">{userGit.name}</span>
                            <span className="user-login"><a href={userGit.html_url} rel = "noopener noreferrer" target="_blank">{userGit.login}</a></span>
                        </figcaption>
                    </figure>

                    <blockquote className="user-bio pr-3">
                        <p>{userGit.bio}</p>
                    </blockquote>

                    <ul className="properties-user mt-2">
                        <li><img src={emailIcon}  alt="email icon" title="email"/>{userGit.email}</li>
                        <li><img src={followersIcon} alt="followers icon" title="seguidores" />{userGit.followers}</li>
                        <li><img src={followingIcon} alt="following icon" title="seguindo" />{userGit.following}</li>
                        <li><img src={repositorieIcon} alt="repositorie icon" title="repositórios" />{userGit.public_repos}</li>
                    </ul>

                </div>

                <div className="col-lg-8 col-md-12 col-sm-12">
                    <Repositories repos={repositories} />
                </div>

            </section>
        )

    }
}










