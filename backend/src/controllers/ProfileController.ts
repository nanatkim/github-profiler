import { Request, Response } from "express";
import { ProfileType, RepoType, UserType } from "../@types";
import api from "../services/api";

const show = async (req: Request, res: Response) => {
  let user: UserType;
  let reposData = {
    forks: 0,
    stars: 0,
    watchers: 0,
    languages: [],
  };

  await Promise.all([
    api.get<UserType>(`users/${req.params.username}`),
    api.get<RepoType[]>(`users/${req.params.username}/repos`),
  ])
    .then(async (responses) => {
      const [userResponse, reposResponse] = responses;
      user = {
        name: userResponse.data.name,
        login: userResponse.data.login,
        url: userResponse.data.url,
        followers: userResponse.data.followers,
        public_repos: userResponse.data.public_repos,
      };

      reposResponse.data.map((repo) => {
        if (!repo.fork) {
          reposData.forks = reposData.forks += repo.forks_count;
          reposData.stars = reposData.stars += repo.stargazers_count;
          reposData.watchers = reposData.watchers += repo.watchers_count;

          if (repo.language !== null) {
            const index = reposData.languages.findIndex(
              (lang) => lang.name === repo.language
            );

            if (index > -1) {
              reposData.languages[index].count += 1;
            } else {
              reposData.languages.push({
                name: repo.language,
                count: 1,
              });
            }
          }
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  const profileData: ProfileType = {
    user,
    ...reposData,
  };

  return res.json(profileData);
};

export default { show };
