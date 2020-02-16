import React, { Fragment } from 'react';
import UserEntry from './UserEntry';

const UserList = props => (
  <Fragment>
    <UserEntry />
    <UserEntry />
    <UserEntry />
  </Fragment>
);

export default UserList;
