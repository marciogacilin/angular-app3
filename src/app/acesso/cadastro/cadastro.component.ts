import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public eventExibirPainelLogin: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainelLogin(): void {
    this.eventExibirPainelLogin.emit('login')
  }
}
