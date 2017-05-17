import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

import LinkToQRCode from './LinkToQRCode';

import Icon from 'material-ui/svg-icons/maps/add-location';
export const BranchIcon = Icon;

export const BranchList = (props) => (
    <List title="All branches" {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <LinkToQRCode />
            <EditButton />
        </Datagrid>
    </List>
);

const BranchTitle = ({ record }) => {
    return <span>Branch {record ? `"${record.name}"` : ''}</span>;
};

export const BranchCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />
        </SimpleForm>
    </Create>
);

export const BranchEdit = (props) => (
    <Edit title={<BranchTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
        </SimpleForm>
    </Edit>
);
