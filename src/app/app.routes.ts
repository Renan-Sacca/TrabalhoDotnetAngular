import { Routes } from '@angular/router';
import { CursoAdicionarComponent } from './curso/curso-adicionar/curso-adicionar.component';
import { CursoListarComponent } from './curso/curso-listar/curso-listar.component';
import { CursoEditarComponent } from './curso/curso-editar/curso-editar.component';
import { ProfessorAdicionarComponent } from './professor/professor-adicionar/professor-adicionar.component';
import { ProfessorListarComponent } from './professor/professor-listar/professor-listar.component';
import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';

export const routes: Routes = [
    { path: 'curso/adicionar', component: CursoAdicionarComponent },
    { path: 'curso/listar', component: CursoListarComponent },
    { path: 'curso/editar/:id', component: CursoEditarComponent },
    { path: 'professor/adicionar', component: ProfessorAdicionarComponent },
    { path: 'professor/listar', component: ProfessorListarComponent },
    { path: 'professor/editar/:id', component: ProfessorEditarComponent }
];
