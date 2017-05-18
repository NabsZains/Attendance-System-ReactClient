import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    EmailField,
    BooleanInput,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SimpleForm,
    TextInput,
    SelectInput,
    Filter,
    AutocompleteInput,
    DateInput,
} from 'admin-on-rest';

import Icon from 'material-ui/svg-icons/social/group';
export const UserIcon = Icon;

export const ReviewFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Track" source="track_id" reference="tracks">
            <AutocompleteInput optionText={choice => `${choice.name} ( ${choice.branch.name} )`} />
        </ReferenceInput>
    </Filter>
);

export const UserList = (props) => (
    <List title="All users" filters={<ReviewFilter />} {...props}>
        <Datagrid>
            <TextField source="name" />
            <EmailField source="email" />
            <ReferenceField label="Track" source="track_id" reference="tracks">
                <TextField source="name" />
            </ReferenceField>
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
            <TextInput source="username" />
            <LongTextInput source="email" />
            <TextInput source="password" type="password"/>
            <ReferenceInput label="Track" source="track_id" reference="tracks" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <BooleanInput label="Is Admin?" source="is_admin" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <LongTextInput source="email" />
            <TextInput source="password" type="password"/>
            <ReferenceInput label="Track" source="track_id" reference="tracks" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <BooleanInput label="Is Admin?" source="is_admin" />
        </SimpleForm>
    </Edit>
);
