// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';
import authClient from './authClient';

import { UserList, UserEdit , UserCreate } from './users';
import { BranchList, BranchEdit , BranchCreate } from './branches';
import { TrackList, TrackEdit , TrackCreate } from './tracks';

const App = () => (
    <Admin authClient={authClient} restClient={jsonServerRestClient('http://127.0.0.1:9990/api')}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
        <Resource name="branches" list={BranchList} edit={BranchEdit} create={BranchCreate} remove={Delete}/>
        <Resource name="tracks" list={TrackList} edit={TrackEdit} create={TrackCreate} remove={Delete}/>
    </Admin>
);

export default App;
