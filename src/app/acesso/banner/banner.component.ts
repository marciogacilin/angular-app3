import { Component, OnInit } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'

import { Imagem } from './imagem.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  private visivel: string = 'visivel'
  private escondido: string = 'escondido'

  public estado: string = 'visivel'

  public imagens: Imagem[] = [
    { estado: this.visivel, url: '/assets/banner-acesso/img_1.png' },
    { estado: this.escondido, url: '/assets/banner-acesso/img_2.png' },
    { estado: this.escondido, url: '/assets/banner-acesso/img_3.png' },
    { estado: this.escondido, url: '/assets/banner-acesso/img_4.png' },
    { estado: this.escondido, url: '/assets/banner-acesso/img_5.png' }
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(), 3000)
  }

  private logicaRotacao(): void {
    let idx: number = 0

    for (let i:number = 0; i <= 4; i++){
      if (this.imagens[i].estado === this.visivel) {
        this.imagens[i].estado = this.escondido
        idx = i === 4 ? 0 : i + 1
        break
      }
    }

    this.imagens[idx].estado = this.visivel

    setTimeout(() => this.logicaRotacao(), 3000)
  }
}
