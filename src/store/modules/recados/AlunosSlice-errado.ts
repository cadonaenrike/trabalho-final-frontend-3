import { createSlice } from "@reduxjs/toolkit";
import { RecadosType } from "../../../pages/alunos/types";

const initialState: RecadosType = [];

const recadosSlice = createSlice({
  name: "Recados",
  initialState,
  reducers: {
    adicionar(state, action) {
      return [...state, action.payload];
    },
    excluir(state, action) {
      console.log(action.payload);
      const novoEstado = [...state];
      novoEstado.splice(action.payload, 1);
      return novoEstado;
    },
    clear() {
      return initialState;
    },
  },
});

export const { adicionar, clear, excluir } = recadosSlice.actions;
export default recadosSlice.reducer;
