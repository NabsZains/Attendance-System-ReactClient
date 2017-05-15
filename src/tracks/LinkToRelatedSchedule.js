import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';

import ScheduleIcon from 'material-ui/svg-icons/action/schedule';

const LinkToRelatedSchedule = ({ record }) => (
    <FlatButton
        primary
        label="Schedule"
        icon={<ScheduleIcon />}
        containerElement={<Link to={{
            pathname: '/schedules',
            search: stringify({ filter: JSON.stringify({ category_id: 1 }) }),
        }} />}
    />
);

export default LinkToRelatedSchedule;
