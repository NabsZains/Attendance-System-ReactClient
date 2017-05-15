import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

import Icon from 'material-ui/svg-icons/action/book';
export const TrackIcon = Icon;

import LinkToRelatedSchedule from './LinkToRelatedSchedule';

export const TrackList = (props) => (
    <List title="All tracks" {...props}>
        <Datagrid>
            <TextField source="name" />
            <ReferenceField label="Branch" source="branch_id" reference="branches">
                <TextField source="name" />
            </ReferenceField>
            <LinkToRelatedSchedule />
            <EditButton />
        </Datagrid>
    </List>
);

const TrackTitle = ({ record }) => {
    return <span>Track {record ? `"${record.name}"` : ''}</span>;
};

export const TrackCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Branch" source="branch_id" reference="branches" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const TrackEdit = (props) => (
    <Edit title={<TrackTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <ReferenceInput label="Branch" source="branch_id" reference="branches" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
