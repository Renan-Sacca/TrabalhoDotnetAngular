import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CursoService } from '../../services/curso.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-adicionar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './curso-adicionar.component.html',
  styleUrl: './curso-adicionar.component.css'
})
export class CursoAdicionarComponent {
  constructor(
    private cursoService: CursoService,
    private router: Router) { }

  curso = {
    nome: '',
    descricao: '',
    periodo: '',
    cargaHoraria: 0,
    quantidadeMaximaAlunos: 0
  }

  periodos = [
    { id: 1, descricao: 'Manhã' },
    { id: 2, descricao: 'Tarde' },
    { id: 3, descricao: 'Noite' }
  ]

  adicionar(form: NgForm) {
    if (this.curso.nome.length > 50) {
      form.controls['nome'].setErrors({ maxlength: true });
      return;
    }
        
    this.cursoService.adicionar(this.curso).subscribe({
      next: response => {
        Swal.fire({
          title: 'Sistema Acadêmico',
          text: response.dados.mensagem,
          icon: 'success',
          confirmButtonText: 'OK'
        });  
        
        this.router.navigate(['/curso/listar']);
      },
      error: error => {
        Swal.fire({
          title: 'Sistema Acadêmico', 
          text: 'Erro ao salvar o curso.', //error.dados.mensagem, 
          icon: 'error', 
          confirmButtonText: 'OK'
        })
      }
    });
  }

  cancelar() {
    this.router.navigate(['/curso/listar']);     
  }  
}