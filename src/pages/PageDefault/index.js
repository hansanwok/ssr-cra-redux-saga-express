import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRepos } from '../../actions';

class PageDefault extends Component {

  componentDidMount() {
    this.props.getRepos('octokit');
  }

  render() {
    const { repos } = this.props;
    console.log('repos', repos)
    return (
      <div className="App">
        <header className="App-header">
          <img src={'./images/logo.svg'} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to='/'>Page default</Link>
          <Link to='/other'>Page other</Link>
          {repos.map(r => <p key={r.id}>{r.name}</p>)}
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ Repos: { repos } }) => ({ repos });

const mapActionToProps = {
  getRepos
}

export default connect(mapStateToProps, mapActionToProps)(PageDefault);
