import { UPDATE } from 'admin-on-rest';

export const ROLES_UPDATE = 'ROLES_UPDATE';
export const ROLES_UPDATE_LOADING = 'ROLES_UPDATE_LOADING';
export const ROLES_UPDATE_FAILURE = 'ROLES_UPDATE_FAILURE';
export const ROLES_UPDATE_SUCCESS = 'ROLES_UPDATE_SUCCESS';

export const rolesUpdate = (id, data, basePath) => ({
    type: ROLES_UPDATE,
    payload: { id, data: { action: 0 }, basePath },
    meta: { resource: 'attendances', fetch: UPDATE, cancelPrevious: false },
});