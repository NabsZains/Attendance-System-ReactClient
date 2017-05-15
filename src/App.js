// in src/App.js
import React from 'react';
import { simpleRestClient, jsonServerRestClient, Admin, Resource, fetchUtils } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';

import authClient from './authClient';
import { Dashboard } from './dashboard';

import { UserList, UserEdit , UserCreate } from './users';
import { BranchList, BranchEdit , BranchCreate } from './branches';
import { TrackList, TrackEdit , TrackCreate } from './tracks';

import UserIcon from 'material-ui/svg-icons/social/group';
import BranchIcon from 'material-ui/svg-icons/maps/add-location';
import TrackIcon from 'material-ui/svg-icons/action/book';

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
    <Admin
        title="Attendance System"
        authClient={authClient}
        restClient={restClient}
        dashboard={Dashboard}
    >
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon}/>
        <Resource name="branches" list={BranchList} edit={BranchEdit} create={BranchCreate} remove={Delete} icon={BranchIcon}/>
        <Resource name="tracks" list={TrackList} edit={TrackEdit} create={TrackCreate} remove={Delete} icon={TrackIcon}/>
    </Admin>
);

export default App;
