
const prefix = `https://api.github.com`;
const token = process.env.REACT_APP_GITSOCIAL_API_KEY;


const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': token+' OAUTH-TOKEN',
}

export const searchUsers = (q) =>
    fetch(`${prefix}/search/users?q=${q}`, {headers})
    .then(res => res.json())

export const getUser = (login) =>
fetch(`${prefix}/users/${login}`, {headers})
    .then(res => res.json())

