// in src/App.js
import React from 'react';
import { simpleRestClient, jsonServerRestClient, Admin, Resource, fetchUtils } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';

import { Config } from './config';

import authClient from './authClient';
import { Dashboard } from './dashboard';
import { RoleList, RoleEdit , RoleCreate } from './roles';
import { UserList, UserEdit , UserCreate } from './users';
import { BranchList, BranchEdit , BranchCreate } from './branches';
import { TrackList, TrackEdit , TrackCreate } from './tracks';
import { ScheduleList, ScheduleCreate, ScheduleEdit } from './schedules';
import { PermissionList } from './permissions';

import Menu from './Menu';
import sagas from './sagas';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const restClient = jsonServerRestClient(Config.apiURL + '/api', httpClient);

const App = () => (
    <Admin
        title="Attendance System"
        customSagas={sagas}
        authClient={authClient}
        restClient={restClient}
        dashboard={Dashboard}
        menu={Menu}
    >
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
        <Resource name="permissions" list={PermissionList}/>
        <Resource name="branches" list={BranchList} edit={BranchEdit} create={BranchCreate} remove={Delete}/>
        <Resource name="tracks" list={TrackList} edit={TrackEdit} create={TrackCreate} remove={Delete}/>
        <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} remove={Delete}/>
        <Resource name="schedules" list={ScheduleList} create={ScheduleCreate} edit={ScheduleEdit} remove={Delete}/>
    </Admin>
);

export default App;
