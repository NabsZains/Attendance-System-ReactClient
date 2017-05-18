import { UPDATE } from 'admin-on-rest';

export const PERMISSION_APPROVE = 'PERMISSION_APPROVE';
export const PERMISSION_APPROVE_LOADING = 'PERMISSION_APPROVE_LOADING';
export const PERMISSION_APPROVE_FAILURE = 'PERMISSION_APPROVE_FAILURE';
export const PERMISSION_APPROVE_SUCCESS = 'PERMISSION_APPROVE_SUCCESS';

export const permissionApprove = (id, data, basePath) => ({
    type: PERMISSION_APPROVE,
    payload: { id, data: { action: 1 ,approved_perm : true}, basePath },
    meta: { resource: 'permissions', fetch: UPDATE, cancelPrevious: false },
});

export const PERMISSION_REJECT = 'PERMISSION_REJECT';
export const PERMISSION_REJECT_LOADING = 'PERMISSION_REJECT_LOADING';
export const PERMISSION_REJECT_FAILURE = 'PERMISSION_REJECT_FAILURE';
export const PERMISSION_REJECT_SUCCESS = 'PERMISSION_REJECT_SUCCESS';

export const permissionReject = (id, data, basePath) => ({
    type: PERMISSION_REJECT,
    payload: { id, data: { action: 0,approved_perm : false }, basePath },
    meta: { resource: 'permissions', fetch: UPDATE, cancelPrevious: false },
});
