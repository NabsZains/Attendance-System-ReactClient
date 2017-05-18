import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import UpdateButton from 'material-ui/svg-icons/action/done';

import { rolesUpdate as rolesUpdateAction } from './applyRolesActions';

class ApplyRolesButton extends Component {
    handleUpdate = () => {
        const { rolesUpdate } = this.props;
        rolesUpdate("none");
    };
    render() {
        const { record } = this.props;
        return (
            <span>
                <FlatButton label="Apply Deduction Roles" onClick={this.handleUpdate} icon={<UpdateButton color="green" />} />
            </span>
        );
    }
}

ApplyRolesButton.propTypes = {
    rolesUpdate: PropTypes.func,
};

export default connect(null, {
    rolesUpdate: rolesUpdateAction,
})(ApplyRolesButton);
