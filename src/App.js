// in src/App.js
import React from 'react';
import { simpleRestClient, jsonServerRestClient, Admin, Resource, fetchUtils } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';
import authClient from './authClient';

import { UserList, UserEdit , UserCreate } from './users';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    console.log(token);
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const restClient = jsonServerRestClient('http://127.0.0.1:9991/api', httpClient);


const App = () => (
    <Admin authClient={authClient} restClient={restClient}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
    </Admin>
);

export default App;
