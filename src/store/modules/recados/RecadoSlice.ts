import { createSlice } from "@reduxjs/toolkit";
import {RecadoType } from "../../../pages/alunos/types";

const initialState: RecadoType= {
  Recado: "",
  Descrição: "",
  Data: "00/00/00"
};

const alunoSlice = createSlice({
  name: "recado",
  initialState,
  reducers: {
    adicionar: (state, action) => {
      return action.payload;
    },
    limpar: () => initialState,
  },
});

export const { adicionar, limpar } = alunoSlice.actions;
export default alunoSlice.reducer;
