import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-editar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './curso-editar.component.html',
  styleUrl: './curso-editar.component.css'
})
export class CursoEditarComponent implements OnInit {
  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  curso: any = {
    id: '',
    nome: '',
    descricao: '',    
    periodo: 1,
    cargaHoraria: 0,
    quantidadeMaximaAlunos: 0
  }    

  periodos = [
    { id: 1, descricao: 'Manhã' },
    { id: 2, descricao: 'Tarde' },
    { id: 3, descricao: 'Noite' }
  ]    

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //Obtém o ID da URL
    if (id) {
      this.obterCurso(id);
    }
  }

  obterCurso(id: any) {
    this.cursoService.obter(id).subscribe({
      next: response => {
        this.curso = response.dados;
      },
      error: error => {
        Swal.fire({
          title: 'Sistema Acadêmico', 
          text: 'Erro ao obter o curso.',
          icon: 'error', 
          confirmButtonText: 'OK'
        })
      }
    });
  }

  atualizar(form: NgForm) {
    if (this.curso.nome.length > 50) {
      form.controls['nome'].setErrors({ maxlength: true });
      return;
    }

    this.cursoService.atualizar(this.curso).subscribe({
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
          text: 'Erro ao atuzalizar o curso', //error.dados.mensagem, 
          icon: 'error', 
          confirmButtonText: 'OK'
        })   
      }
    })
  }  

  cancelar() {
    this.router.navigate(['/curso/listar']);     
  }
}
