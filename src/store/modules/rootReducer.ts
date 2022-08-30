import { combineReducers } from "@reduxjs/toolkit";


import aluno from "./recados/RecadoSlice";
import alunos from "./recados/AlunosSlice";
import posts from "./posts/PostsSlice";
export default combineReducers({
  
  aluno,
  alunos,
  posts,
});
