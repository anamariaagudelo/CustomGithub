import { Component, OnInit } from '@angular/core';
import { CandidateInterface } from '../models/candidato.model';
import { GithubService } from '../service/github.service';
import { NgForm } from '@angular/forms';

/**
 * En esta clase se capturan los datos gatos del formulario de un candidato y
 * se guardan en una cookie para luego ser accedidos y mostrados en la cabecera de
 * la pagina Web.
 */
@Component({
  selector: 'app-form-candidato',
  templateUrl: './form-candidato.component.html',
  styleUrls: ['./form-candidato.component.css']
})
export class FormCandidatoComponent implements OnInit {
  /**
   * Interfaz que perite recibir los datos de los campos inputs del formulario Html
   */
  candidate: CandidateInterface = {
    name: '',
    lastName: '',
    id: '',
    birthDate: '',
    email: '',
    userGithub: '',
  };

  constructor( private candidateService: GithubService) {

  }

  ngOnInit() {

  }

  /**
   * Método que guarda la información captuada siempre y cuando el formulario sea válido
   * mediante el método saveInfor() la guarda en una cookie y mediante el método getInfo()
   * la toma de esa cookie y la muestra en un alert... Tambien hace el mismo procedimiento
   * deguardado en localStorege
   */
  onSaveCandidate(formSaveCandidata: NgForm) {
    this.candidateService.saveInfo(formSaveCandidata.value);
    this.candidateService.getInfo();

  }

}
