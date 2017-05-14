import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="email" />
            <TextInput source="password" type="password"/>
            <BooleanInput label="Is Admin?" source="is_admin" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <LongTextInput source="email" />
            <TextInput source="password" type="password"/>
            <BooleanInput label="Is Admin?" source="is_admin" />
        </SimpleForm>
    </Edit>
);