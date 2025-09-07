import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export const DividerText=()=> {
  const content = (
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
  )
}

export default Root

