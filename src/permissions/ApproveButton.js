import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';

import AcceptButton from 'material-ui/svg-icons/action/done';
import RejectButton from 'material-ui/svg-icons/content/clear';

import { permissionApprove as permissionApproveAction, permissionReject as permissionRejectAction } from './permissionActions';

class ApproveButton extends Component {
    handleApprove = () => {
        const { permissionApprove, record } = this.props;
        permissionApprove(record.id, record);
    };

    handleReject = () => {
        const { permissionReject, record } = this.props;
        permissionReject(record.id, record);
    };

    render() {
        const { record } = this.props;
        return (
            <span>
                <IconButton onClick={this.handleApprove} disabled={record.approved_perm === true}><AcceptButton color="green" /></IconButton>
                <IconButton onClick={this.handleReject} disabled={record.approved_perm === false}><RejectButton color="red" /></IconButton>
            </span>
        );
    }
}

ApproveButton.propTypes = {
    record: PropTypes.object,
    permissionApprove: PropTypes.func,
    permissionReject: PropTypes.func,
};

export default connect(null, {
    permissionApprove: permissionApproveAction,
    permissionReject: permissionRejectAction,
})(ApproveButton);
