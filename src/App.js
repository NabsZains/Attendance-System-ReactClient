// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';
import authClient from './authClient';

import { UserList, UserEdit , UserCreate } from './users';

const App = () => (
    <Admin authClient={authClient} restClient={jsonServerRestClient('http://127.0.0.1:9990')}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
    </Admin>
);

export default App;
