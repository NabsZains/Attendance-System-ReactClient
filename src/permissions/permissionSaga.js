import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import {
    PERMISSION_APPROVE_SUCCESS,
    PERMISSION_APPROVE_FAILURE,
    PERMISSION_REJECT_SUCCESS,
    PERMISSION_REJECT_FAILURE,
} from './permissionActions';

export default function* permissionSaga() {
    yield [
        takeEvery(PERMISSION_APPROVE_SUCCESS, function* () {
            yield put(showNotification('Permissions Approved'));
            yield put(push('/permissions'));
        }),
        takeEvery(PERMISSION_APPROVE_FAILURE, function* ({ error }) {
            yield put(showNotification('ERROR', 'warning'));
            console.error(error);
        }),
        takeEvery(PERMISSION_REJECT_SUCCESS, function* () {
            yield put(showNotification('Permissions Rejected'));
            yield put(push('/permissions'));
        }),
        takeEvery(PERMISSION_REJECT_FAILURE, function* ({ error }) {
            yield put(showNotification('error', 'warning'));
            console.error(error);
        }),
    ];
}
