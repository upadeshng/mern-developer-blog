import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getGithubRepo } from '../../../redux/action/profile';

function GithubRepo({ githubusername, getGithubRepo, github }) {
  useEffect(() => {
    getGithubRepo(githubusername);
  }, []);

  if (!github) return <></>;

  return (
    <>
      <div class='profile-github'>
        <h2 class='text-primary my-1'>
          <i class='fab fa-github'></i> Github Repos
        </h2>

        {github.map((repo, index) => (
          <div key={index} class='repo bg-white p-1 my-1'>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li class='badge badge-primary'>
                  Stars: {repo.stargazers_count}
                </li>
                <li class='badge badge-dark'>
                  Watchers: {repo.watchers_count}
                </li>
                <li class='badge badge-light'>Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

GithubRepo.propTypes = {
  getGithubRepo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  github: state.profileReducer.github,
});
export default connect(mapStateToProps, { getGithubRepo })(GithubRepo);
