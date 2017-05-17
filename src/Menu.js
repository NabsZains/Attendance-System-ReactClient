import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';

import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LabelIcon from 'material-ui/svg-icons/action/label';

import { translate, DashboardMenuItem } from 'admin-on-rest';

import { TrackIcon } from './tracks';
import { UserIcon } from './users';
import { BranchIcon } from './branches';
import { RoleIcon } from './roles';

const items = [
    { name: 'tracks',title : "Tracks", icon: <TrackIcon /> },
    { name: 'users',title : "Students", icon: <UserIcon /> },
    { name: 'branches',title : "Branches", icon: <BranchIcon /> },
    { name: 'roles',title : "Roles", icon: <RoleIcon /> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onTouchTap={onMenuTap} />
        {items.map(item => (
            <MenuItem
                key={item.name}
                containerElement={<Link to={`/${item.name}`} />}
                primaryText={item.title}
                leftIcon={item.icon}
                onTouchTap={onMenuTap}
            />
        ))}
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
