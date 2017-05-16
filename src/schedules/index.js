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
import TimeInput from '../inputs/TimeInput';

export const ScheduleList = (props) => (
    <List title="Tracks Schedules" {...props}>
        <Datagrid>
            <DateField source="start_time" />
            <DateField source="end_time" />
            <EditButton />
        </Datagrid>
    </List>
);

const ScheduleTitle = ({ record }) => {
    return <span>Schedule {record ? `"${record.id}"` : ''}</span>;
};

const time_ranges = [
    { id: '9:00', name: '9:00' },
    { id: '9:30', name: '9:30' },
    { id: '10:00', name: '10:00' },
    { id: '10:30', name: '10:30' },
    { id: '11:00', name: '11:00' },
    { id: '11:30', name: '11:30' },
];

export const ScheduleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Track" source="track_id" reference="tracks" allowEmpty>
                <SelectInput optionText={( record ) => record.name + ' (' + record.branch.name + ')'} />
            </ReferenceInput>
            <DateInput source="day_date" />
            <SelectInput source="start_time" choices={time_ranges}/>
            <SelectInput source="end_time" choices={time_ranges}/>
        </SimpleForm>
    </Create>
);