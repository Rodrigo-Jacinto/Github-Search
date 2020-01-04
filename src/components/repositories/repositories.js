import React, { Component } from 'react';
import "./repositories-style.css";

export default class Repositorio extends Component {


    render() {
        let repositories = this.props.repos;

        return (
            repositories.map(repos => {
                return (

                    <div class="mb-5 border">
                        <h1 className="repo-name">{repos.name}</h1>
                        <span className="repo-description">{repos.description}</span>
                        <span className="star-count">{repos.stargazers_count}</span>
                    </div>

                )
            })

        )
    }
}