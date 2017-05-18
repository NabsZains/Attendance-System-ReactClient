import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import { translate } from 'admin-on-rest';

import ApplyRolesButton from './ApplyRolesButton';

export default translate(({ style, translate }) => (
    <Card style={style}>
        <CardHeader
            title="Attendance System"
            subtitle="Attendance System Using React & Symfony "
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
        <CardActions>
            <ApplyRolesButton />
        </CardActions>
    </Card>
));
