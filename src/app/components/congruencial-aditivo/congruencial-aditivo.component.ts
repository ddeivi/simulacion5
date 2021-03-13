import { Component, OnInit } from '@angular/core';
import { CongruencialAditivoModel } from 'src/app/models';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-congruencial-aditivo',
  templateUrl: './congruencial-aditivo.component.html',
  styleUrls: ['./congruencial-aditivo.component.css'],
  providers: [Service]

})
export class CongruencialAditivoComponent implements OnInit {

  public congruencialAditivoModel: CongruencialAditivoModel;
  public xn;
  public ri;
  public grafico;
  public mostrar = false
  public url = global.url

  constructor(private _service: Service) {

    this.congruencialAditivoModel = new CongruencialAditivoModel(null, null, null, null, null);
    this.grafico = false;

  }

  ngOnInit(): void {
  }

  congruencialAditivo(form) {
    if (this.congruencialAditivoModel.a && this.congruencialAditivoModel.c &&
      this.congruencialAditivoModel.m && this.congruencialAditivoModel.n &&
      this.congruencialAditivoModel.x0) {

      this._service.congruencialAditivo(this.congruencialAditivoModel).subscribe(
        response => {
          this.xn = response.Xn;
          this.ri = response.ri;
          
          this.grafico = true;
          
        },
        error => {
          console.log(error)

        }
      )
    } else {
      this.camposVacios()

    }

  }

  limpiar() {
    this.congruencialAditivoModel = new CongruencialAditivoModel(null, null, null, null, null);
    this.grafico = false;

  }

  generarGrafico(){
    this.mostrar = true
    // this._service.grafico(this.ri).subscribe(
    //   response => { 
    //     this.limpiar()
    //   },
    //   error => {
    //     console.log(error)

    //   }
    // ) 

  }

  success() {
    Swal.fire({
      title: 'Correcto',
      icon: 'success',
      timer: 600,
      showConfirmButton: false
    })
  }

  camposVacios() {
    Swal.fire({
       title: 'Validacion',
      text: 'No deje campos vacios',
      icon: 'warning',
    })
  }

}
