import { Component, OnInit } from '@angular/core';
import { AlisamientoExponencialModel } from 'src/app/models';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alisamiento-exponencial',
  templateUrl: './alisamiento-exponencial.component.html',
  styleUrls: ['./alisamiento-exponencial.component.css'],
  providers:[Service]
})
export class AlisamientoExponencialComponent implements OnInit {

public alisamientoExponencialModel: AlisamientoExponencialModel
public lista = [];
public x;
public sn;
public grafico = false;
public mostrar = false;
public url = global.url;
  constructor(private _service: Service) {

   this.alisamientoExponencialModel = new AlisamientoExponencialModel(null,null)
   }

  ngOnInit(): void {
  }

  alisamiento(form){
    if (this.alisamientoExponencialModel.lista && this.alisamientoExponencialModel.alfa ) {  

    this.alisamientoExponencialModel.lista.split(',').forEach((element, i) => {
      this.lista.push(+element)  
      
    });  

    this.alisamientoExponencialModel.lista = this.lista;
    
      this._service.alisamientoExponencial(this.alisamientoExponencialModel).subscribe(
        response => {
          this.x = response.X;
          this.sn = response.SN; 
             
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
    this.alisamientoExponencialModel = new AlisamientoExponencialModel(null,null)
  }
  generarGrafico(){
    this.mostrar = true
    // this._service.grafico(this.sn).subscribe(
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
