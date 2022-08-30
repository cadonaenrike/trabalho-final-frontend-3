
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  {MyPaper} from '../../components/ButtonPink/ButtonPink';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addOne, removeOne, selectAll, updateOne } from '../../store/modules/recados/AlunosSlice';
import {RecadoType, RecadosType} from './types';

const Alunos: React.FC = () => {

const alunosRedux = useAppSelector(selectAll);
// const [alunosLocal, setAlunosLocal] = useState<AlunosType>([]);
const [Recado, setRecado] = useState<string>("");
const [Descricao, setDescriçao] = useState<string>("");
const [Data, setData] = useState<string>("");

const dispatch = useAppDispatch();

const [open, setOpen] = React.useState(false);
const [openEditar, setOpenEditar] = React.useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const abrirModalEditar = () => {
    setOpenEditar(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRecado("");
    setDescriçao("");
    setData("");
  };

  const fecharModalEditar = () => {
    setOpenEditar(false);
    setRecado("");
    setDescriçao("");
    setData("");
  };

function cadastrarAluno() {

  const aluno:RecadoType = {
    Recado: Recado,
    Descrição: Descricao,
    Data: Data,
  }

  // setAlunosLocal([...alunosLocal, aluno]);
  dispatch(addOne(aluno));

    setRecado("");
    setDescriçao("");
    setData("");
}

function excluirAluno(Recado: string) {
  dispatch(removeOne(Recado));
}

function Lido(Recado: string, Data: string ) {
  dispatch(updateOne({id: Recado, changes: {Data: Data + " visualizado"}}))
}

function editarAluno(item: RecadoType) {
  setRecado(item.Recado);
  setDescriçao(item.Descrição + '');
  setData(item.Data + "");

  abrirModalEditar();
}

function atualizar() {
  dispatch(updateOne({id: Recado, changes: {Recado: String(Recado),Descrição: String(Descricao),Data: String(Data)}}))
}

  return (
    <React.Fragment>
      <TituloPagina titulo='Pagina de Recados' tamanhoTitulo='h3'/>
      <Button onClick={abrirModal} variant='outlined'>Cadastrar</Button>

      {alunosRedux.map((item ) => {
        return (
          <div key={item.Recado} className="mt-5">
            <Typography>Recado: {item.Recado}</Typography>
            <Typography>Descrição: {item.Descrição}</Typography>
            <Typography>Data: {item.Data}</Typography>
            <Button onClick={()=> Lido(item.Recado, item.Data)} variant='outlined'>Visualizado</Button>
            <Button onClick={()=> editarAluno(item)} variant='outlined'>Editar</Button>
            <Button onClick={()=> excluirAluno(item.Recado)} variant='outlined'>Excluir</Button>
          </div>
        )
      })}
      <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Cadastrar Recado
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para adicionar um recado, utilize o formulário abaixo.
          </DialogContentText>
          <Grid container spacing={2} className="mt-5">
            <Grid item xs={12}>
              <TextField value={Recado} onChange={(e) => setRecado(e.target.value)} label="Digite um Recado" fullWidth color="secondary" focused />
            </Grid>
            <Grid item xs={12}>
              <TextField value={Descricao} onChange={(e) => setDescriçao(e.target.value)} label="Digite uma descrição" fullWidth color="secondary" />
            </Grid>
            <Grid item xs={12}>
              <TextField value={Data} onChange={(e) => setData(e.target.value)} label="Data atual: utilize o padrão (dia/mes/ano)" fullWidth color="secondary" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant='contained' onClick={()=> cadastrarAluno()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      {/* MODAL DE EDITAR */}
      <Dialog
        open={openEditar}
        onClose={fecharModalEditar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Editar Recado
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para editar um Recadoo, utilize o fomrulário abaixo.
          </DialogContentText>
          <Grid container spacing={2} className="mt-5">
            <Grid item xs={12}>
              <TextField value={Recado} onChange={(e) => setRecado(e.target.value)} label="Digite o novo Titulo" fullWidth color="secondary" focused />
            </Grid>
            <Grid item xs={12}>
              <TextField value={Descricao} onChange={(e) => setDescriçao(e.target.value)} label="Digite uma nova descrição" fullWidth color="secondary" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={fecharModalEditar}>Cancelar</Button>
          <Button variant='contained' onClick={()=> atualizar()}>
            Atualizar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </React.Fragment>
  );
};

export default Alunos;