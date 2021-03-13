import { Component, OnInit } from '@angular/core';
import { InversoAditivoModel } from 'src/app/models';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inversa-aditivo',
  templateUrl: './inversa-aditivo.component.html',
  styleUrls: ['./inversa-aditivo.component.css'],
  providers: [Service]
})
export class InversaAditivoComponent implements OnInit {
  public inversoAditivoModel: InversoAditivoModel
  public xn;
  public ri;
  public inversa;
  public grafico;
  public mostrar = false
  public url = global.url;
  constructor(private _service: Service) {
    this.inversoAditivoModel = new InversoAditivoModel(null, null, null, null, null, null)
    this.grafico = false;
  }

  ngOnInit(): void {
  }

  inversaAditivo(form) {

    if (this.inversoAditivoModel.a && this.inversoAditivoModel.c &&
      this.inversoAditivoModel.landa && this.inversoAditivoModel.m &&
      this.inversoAditivoModel.n && this.inversoAditivoModel.x0) {


      this._service.inversaAditivo(this.inversoAditivoModel).subscribe(
        response => {
          this.xn = response.Xn;
          this.ri = response.ri;
          this.inversa = response.inversa;
          
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
    this.inversoAditivoModel = new InversoAditivoModel(null, null, null, null, null, null)
    // this.grafico = false

  }
  generarGrafico(){
    this.mostrar =true

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
