import React, { Component } from 'react';
import starIcon from './img/star-icon.svg';
import "./repositories-style.css";

export default class Repositorio extends Component {


    render() {
        let repositories = this.props.repos;

        return (
            repositories.map(repos => {
                return (

                    <div class="mb-5">
                        <h1 className="repo-name">{repos.name}</h1>
                        <span className="repo-description">{repos.description}</span>
                        <span className="star-count">
                            <img src={starIcon} />
                            {repos.stargazers_count}
                        </span>
                    </div>

                )
            })

        )
    }
}