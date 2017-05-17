import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';

import QRCodeIcon from 'material-ui/svg-icons/action/fingerprint';

import { Config } from '../config';


const LinkToQRCode = ({ record }) => (
    <FlatButton
        primary
        label="QRCode Link"
        icon={<QRCodeIcon />}
        href={Config.apiURL + '/web/qrcode/' + record.id}
        target="_blank"
    />
);

export default LinkToQRCode;
