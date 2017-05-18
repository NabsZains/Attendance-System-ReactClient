import React from 'react';
import { ReferenceField, TextField } from 'admin-on-rest';

const UserReferenceField = (props) => (
    <ReferenceField label="User" source="user_id" reference="users" {...props}>
        <TextField source="name" />
    </ReferenceField>
);

UserReferenceField.defaultProps = {
    source: 'user_id',
    addLabel: true,
};

export default UserReferenceField;
