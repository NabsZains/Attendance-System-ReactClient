import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    DateField,
    DateInput,
    ReferenceField,
    EmailField,
    BooleanInput,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput } from 'admin-on-rest';

import UserReferenceField from '../users/UserReferenceField';
import ApproveButton from './ApproveButton';
import rowStyle from './rowStyle';

import Icon from 'material-ui/svg-icons/communication/comment';
export const PermissionIcon = Icon;

export const PermissionList = (props) => (
    <List {...props} sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid rowStyle={rowStyle}>
            <UserReferenceField />
            <ApproveButton style={{ padding: 0 }} />
        </Datagrid>
    </List>
);
