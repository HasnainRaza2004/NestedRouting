import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack style={{marginTop:50,marginBottom:20}}  direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://cdn5.vectorstock.com/i/1000x1000/27/64/avatar-man-cartoon-vector-10622764.jpg" />
    </Stack>
  );
}
