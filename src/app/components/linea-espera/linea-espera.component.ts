import { Component, OnInit } from '@angular/core';
import { LineaEsperaModel } from 'src/app/models';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-linea-espera',
  templateUrl: './linea-espera.component.html',
  styleUrls: ['./linea-espera.component.css'],
  providers: [Service]
})
export class LineaEsperaComponent implements OnInit {
  public lineaEsperaModel:LineaEsperaModel;
  public ALL;
  public TILL;
  public TISE;
  public TIRLL;
  public TIISE;
  public TIFSE;
  public TIESP;
  public TIESA;
  public numClientes;
  public grafico = false;
  public mostrar = false
  public url = global.url


  constructor(private _service: Service) {

    this.lineaEsperaModel = new LineaEsperaModel (null, null, null)

   }

  ngOnInit(): void {
  }

  calcular() {

    if (this.lineaEsperaModel.clientes && this.lineaEsperaModel.landa && this.lineaEsperaModel.nu )
     {


    this._service.lineaEspera(this.lineaEsperaModel).subscribe(
      response => {
        this.ALL = response.ALL
        this.TILL = response.TILL
        this.TISE = response.TISE
        this.TIRLL = response.TIRLL
        this.TIISE = response.TIISE
        this.TIFSE = response.TIFSE
        this.TIESP = response.TIESP
        this.TIESA = response.TIESA
        this.numClientes = response.numClientes
        
        this.grafico = true;
        this.limpiar()
       
      },
      error => {
        console.log(error)

      }
    )
     }else {
       this.camposVacios()

     }


  }

  limpiar(){
    this.lineaEsperaModel = new LineaEsperaModel (null, null, null)

  }
  generarGrafico(){
    this.mostrar = true
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
