import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

import Icon from 'material-ui/svg-icons/maps/add-location';
export const RoleIcon = Icon;

export const RoleList = (props) => (
    <List title="All rolees" {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="deduction" />
            <EditButton />
        </Datagrid>
    </List>
);

const RoleTitle = ({ record }) => {
    return <span>Role {record ? `"${record.name}"` : ''}</span>;
};

const time_choices = [
    { id: 'days', name: 'days' },
    { id: 'hours', name: 'hours' },
];

export const RoleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <SelectInput source="name" choices={time_choices}/>
        <TextInput source="deduction" />
        </SimpleForm>
    </Create>
);

export const RoleEdit = (props) => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <SelectInput source="name" choices={time_choices}/>
            <TextInput source="deduction" />
        </SimpleForm>
    </Edit>
);
