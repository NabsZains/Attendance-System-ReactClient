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

export const ScheduleList = (props) => (
    <List title="Tracks Schedules" {...props}>
        <Datagrid>
            <TextField source="day_date" />
            <TextField source="start_time" />
            <TextField source="end_time" />
            <EditButton />
        </Datagrid>
    </List>
);

const ScheduleTitle = ({ record }) => {
    return <span>Schedule {record ? `"${record.start_time}"` : ''}</span>;
};

const time_ranges = [
    { id: '9:00', name: '9:00' },
    { id: '9:30', name: '9:30' },
    { id: '10:00', name: '10:00' },
    { id: '10:30', name: '10:30' },
    { id: '11:00', name: '11:00' },
    { id: '11:30', name: '11:30' },
    { id: '12:00', name: '12:00' },
    { id: '12:30', name: '12:30' },
    { id: '13:00', name: '13:00' },
    { id: '13:30', name: '13:30' },
    { id: '14:00', name: '14:00' },
    { id: '14:30', name: '14:30' },
    { id: '15:00', name: '15:00' },
    { id: '15:30', name: '15:30' },
    { id: '16:00', name: '16:00' },
    { id: '16:30', name: '16:30' },
    { id: '17:00', name: '17:00' },
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

export const ScheduleEdit = (props) => (
    <Edit title={<ScheduleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Track" source="track_id" reference="tracks" allowEmpty>
                <SelectInput optionText={( record ) => record.name + ' (' + record.branch.name + ')'} />
            </ReferenceInput>
            <DateInput source="day_date" />
            <SelectInput source="start_time" choices={time_ranges}/>
            <SelectInput source="end_time" choices={time_ranges}/>
        </SimpleForm>
    </Edit>
);
