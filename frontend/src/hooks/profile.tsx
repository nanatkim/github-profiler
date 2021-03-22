import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

export interface UserData {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
  forks: number;
  stars: number;
  watchers: number;
}

interface LanguagesData {
  name: string;
  count: number;
}

interface ProfileContextData {
  user: UserData;
  languages: LanguagesData[];
  getUser(username: string): void;
}

const ProfileContext = createContext<ProfileContextData>(
  {} as ProfileContextData
);

export const ProfileProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as UserData);
  const [languages, setLanguages] = useState([]);

  const getUser = useCallback((username: string) => {
    api.get(`users/${username}`).then((response) => {
      setUser({
        ...response.data.user,
        forks: response.data.forks,
        stars: response.data.stars,
        watchers: response.data.watchers,
      });

      setLanguages(response.data.languages)
    });
  }, []);

  return (
    <>
      <ProfileContext.Provider value={{ user, languages, getUser }}>
        {children}
      </ProfileContext.Provider>
    </>
  );
};

export function useProfile(): ProfileContextData {
  return useContext(ProfileContext);
}
