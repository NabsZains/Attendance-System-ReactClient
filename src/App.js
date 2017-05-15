// in src/App.js
import React from 'react';
import { simpleRestClient, jsonServerRestClient, Admin, Resource, fetchUtils } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';

import authClient from './authClient';
import { Dashboard } from './dashboard';

import { UserList, UserEdit , UserCreate } from './users';
import { BranchList, BranchEdit , BranchCreate } from './branches';
import { TrackList, TrackEdit , TrackCreate } from './tracks';
import { ScheduleList } from './schedules';

import Menu from './Menu';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
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
        menu={Menu}
    >
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
        <Resource name="branches" list={BranchList} edit={BranchEdit} create={BranchCreate} remove={Delete}/>
        <Resource name="tracks" list={TrackList} edit={TrackEdit} create={TrackCreate} remove={Delete}/>
        <Resource name="schedules" list={ScheduleList}/>
    </Admin>
);

export default App;
