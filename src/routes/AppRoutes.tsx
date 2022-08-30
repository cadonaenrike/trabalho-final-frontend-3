import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../config/layout/Default';
import Home from '../pages/home/Home';
import Alunos from '../pages/alunos/Alunos';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route path="/recados" element={<LayoutDefault component={Alunos} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
