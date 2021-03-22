export interface UserType {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}

export interface RepoType {
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
}

interface LanguageType {
  language: string;
  count: number;
}

export interface ProfileType {
  user: UserType;
  stars: number;
  watchers: number;
  forks: number;
  languages: LanguageType[];
}
