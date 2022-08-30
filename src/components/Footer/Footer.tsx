import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        padding: '25px',
        textAlign: 'center',
        color: 'white',
        minHeight: '100px',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            Aplicação desenvolvida pelo aluno Éverton Henrique Cadona com mentoria da equipe Growdev 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
