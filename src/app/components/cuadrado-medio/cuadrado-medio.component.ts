import { Component, OnInit } from '@angular/core';
import { CuadradoMedioModel } from 'src/app/models';
import { Service } from '../../services/service';
import Swal from 'sweetalert2'
import { global } from 'src/app/services/global';
@Component({
  selector: 'app-cuadrado-medio',
  templateUrl: './cuadrado-medio.component.html',
  styleUrls: ['./cuadrado-medio.component.css'],
  providers:[Service]
})
export class CuadradoMedioComponent implements OnInit {

  public cuadradoMedioModel: CuadradoMedioModel;
  public x2;
  public xi;
  public ri;

  public grafico;
  public mostrar = false;
  public url = global.url;

  constructor(private _service: Service) {
    this.cuadradoMedioModel = new CuadradoMedioModel(null,null);
    this.grafico = false;
    
   }

  ngOnInit(): void {
  }


  cuadradoMedio(form) {
   
    if (this.cuadradoMedioModel.n && this.cuadradoMedioModel.r) {
      
   
    this._service.cuadradoMedio(this.cuadradoMedioModel).subscribe(
      response => {
        this.x2 = response.X2;
        this.xi = response.Xi;
        this.ri = response.ri;
        this.grafico = true;

      },
      error => {
        console.log(error)

      }
    )
  }else{
    this.camposVacios();
  }

  }

  limpiar(){
    this.cuadradoMedioModel = new CuadradoMedioModel(null, null);
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

  camposVacios(){
    Swal.fire({
       title: 'Validacion',
      text: 'No deje campos vacios',
      icon: 'warning',
    })
  }

}
