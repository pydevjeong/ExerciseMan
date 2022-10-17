import { CircularProgress } from '@mui/material';
import React from 'react';

const ErrorLoadingPage = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <CircularProgress color="inherit"/>
    </div>
  );
};

export default ErrorLoadingPage;