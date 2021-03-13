import { Component, OnInit } from '@angular/core';
import { InversoMultiplicativoModel } from 'src/app/models';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inversa-multiplicativo',
  templateUrl: './inversa-multiplicativo.component.html',
  styleUrls: ['./inversa-multiplicativo.component.css'],
  providers: [Service]
})
export class InversaMultiplicativoComponent implements OnInit {
  public inversoMultiplicativoModel: InversoMultiplicativoModel
  public xn;
  public ri;
  public inversa;
  public grafico;
  public mostrar = false
  public url = global.url


  constructor(private _service: Service) {
    this.inversoMultiplicativoModel = new InversoMultiplicativoModel(null, null, null, null, null)
    this.grafico = false
  }
  ngOnInit(): void {
  }

  inversaMultiplicativo(form) {
    if (this.inversoMultiplicativoModel.a && this.inversoMultiplicativoModel.landa
      && this.inversoMultiplicativoModel.m && this.inversoMultiplicativoModel.n
      && this.inversoMultiplicativoModel.x0) {
      this._service.inversaMultiplicativo(this.inversoMultiplicativoModel).subscribe(
        response => {
          this.xn = response.Xn;
          this.ri = response.ri;
          this.inversa = response.Inversa;
          
          this.grafico = true
          this.limpiar()

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
    this.inversoMultiplicativoModel = new InversoMultiplicativoModel(null, null, null, null, null)
    // this.grafico = false

  }
  generarGrafico(){
    this.mostrar = true

    // this._service.grafico(this.ri).subscribe(
    //   response => { 
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
      showConfirmButton: false,
    });
  }

  camposVacios() {
    Swal.fire({
       title: 'Validacion',
      text: 'No deje campos vacios',
      icon: 'warning',
    });
  }

}
