import React from 'react';

import * as TYPE from '../../../constants/types';
import PeopleIcon from 'material-ui/svg-icons/social/people'
import HelpIcon from 'material-ui/svg-icons/action/help'

export default [
  {
    type: TYPE.USERS,
    label: 'Users',
    icon: <PeopleIcon />,
  },
  {
    type: TYPE.QUESTIONS,
    label: 'Questions',
    icon: <HelpIcon />,
  },
];