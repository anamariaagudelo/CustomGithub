import { Component, OnInit } from '@angular/core';
import { CandidateInterface } from '../models/candidato.model';
import { GithubService } from '../service/github.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-candidato',
  templateUrl: './form-candidato.component.html',
  styleUrls: ['./form-candidato.component.css']
})
export class FormCandidatoComponent implements OnInit {
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

  onSaveCandidate(formSaveCandidata: NgForm) {
    this.candidateService.saveInfo(formSaveCandidata.value);
    this.candidateService.getInfo();

  }

}
