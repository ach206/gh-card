const prefix = `https://api.github.com`;
const token = `7b437fd9f08e68b41b15763bb3f57a027fb18217`;

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

