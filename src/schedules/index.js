import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, EmailField,BooleanInput, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const ScheduleList = (props) => (
    <List title="Tracks Schedules" {...props}>
        <Datagrid>
            <TextField source="name" />
            <ReferenceField label="Branch" source="branch_id" reference="branches">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);
