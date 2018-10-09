// resolving the current Node environment
export const NODE_ENV = process.env.NODE_ENV

// resolving the api configuration based on node environemnt
export const apiConfig = {
  env: {
    development: {
      photoProviderUrl : "http://api.giphy.com/v1/",
      apiKey           : "TKqYGJuaR0vSZQhVkXgPnLc8zszNrBQ3",
      gifPath          : "gifs/search",
      defaultKeyword   : "movies",
      defaultLimit     : 10,
      defaultOffset    : 0
    },
    development2: {
      photoProviderUrl : "http://api.giphy.com/v1/",
      apiKey           : "TKqYGJuaR0vSZQhVkXgPnLc8zszNrBQ3",
      gifPath          : "gifs/search",
      defaultKeyword   : "movies",
      defaultLimit     : 10,
      defaultOffset    : 0
    },
    production: {
      photoProviderUrl : "http://api.giphy.com/v1/",
      apiKey           : "TKqYGJuaR0vSZQhVkXgPnLc8zszNrBQ3",
      gifPath          : "gifs/search",
      defaultKeyword   : "movies",
      defaultLimit     : 10,
      defaultOffset    : 0
    }
  }
}

// resloving the defsult name of pages
export const DEFAULT_TITLE = "Magic Gallery"
