import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import mockFollower from "./mockData/mockFollower";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";


const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [gitHubUser, setGitHubUser] = useState(mockUser)
  const [followers, setMockFollower] = useState(mockFollower)
  const [repos, setRepos] = useState(mockRepos)
  return (
    <GithubContext.Provider value={{isLoading, gitHubUser, followers, repos}}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
