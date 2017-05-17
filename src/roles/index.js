import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

import Icon from 'material-ui/svg-icons/maps/add-location';
export const RoleIcon = Icon;

export const RoleList = (props) => (
    <List title="All rolees" {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="deduction" />
            <TextField source="quantity" />
            <TextField source="period" />
            <EditButton />
        </Datagrid>
    </List>
);

const RoleTitle = ({ record }) => {
    return <span>Role {record ? `"${record.name}"` : ''}</span>;
};

export const RoleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="name" />
        <TextInput source="deduction" />
        <TextInput source="quantity" />
        <SelectInput source="period" />
        </SimpleForm>
    </Create>
);

export const RoleEdit = (props) => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="deduction" />
            <TextInput source="quantity" />
            <SelectInput source="period" />
        </SimpleForm>
    </Edit>
);
