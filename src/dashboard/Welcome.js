import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';
import { translate } from 'admin-on-rest';

export default translate(({ style, translate }) => (
    <Card style={style}>
        <CardHeader
            title="Attendance System"
            subtitle="Attendance System Using React & Symfony "
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
        </CardActions>
    </Card>
));
