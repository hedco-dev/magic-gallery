export const NODE_ENV = process.env.NODE_ENV

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
