import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item spacing={0} container xs={12}>
        Acesse a pagina recados para adicionar ou remover recados!
      </Grid>
    </Grid>
  );
};

export default Home;
