import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const BranchList = (props) => (
    <List title="All branches" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
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
