import React, { useState } from 'react';
import { Container, Progress } from './styleProgress';

const ProgressBar = ({ value }) => {
  
    return (
      <div>
       <Container>
      <Progress value={value} style={{ width: `${value}%` }} />
    </Container>
      </div>
    );
  };
  
  export default ProgressBar;