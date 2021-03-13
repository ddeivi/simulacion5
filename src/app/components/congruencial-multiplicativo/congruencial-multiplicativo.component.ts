import { Component, OnInit } from '@angular/core';
import { CongruencialMultiplicativoModel } from 'src/app/models';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-congruencial-multiplicativo',
  templateUrl: './congruencial-multiplicativo.component.html',
  styleUrls: ['./congruencial-multiplicativo.component.css'],
  providers:[Service]
})
export class CongruencialMultiplicativoComponent implements OnInit {

public congruencialMultiplicativoModel: CongruencialMultiplicativoModel
public xn;
public ri;
public grafico;
public mostrar = false
public url = global.url

constructor(private _service: Service) {
  this.congruencialMultiplicativoModel = new CongruencialMultiplicativoModel(null, null, null, null);
  this.grafico = false;

  }

 ngOnInit(): void {
 }

 congruencialMultiplicativo(form){
  if (this.congruencialMultiplicativoModel.a && this.congruencialMultiplicativoModel.x0 &&
        this.congruencialMultiplicativoModel.m && this.congruencialMultiplicativoModel.n) {

   this._service.congruencialMultiplicativo(this.congruencialMultiplicativoModel).subscribe(
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

 limpiar(){
  this.congruencialMultiplicativoModel = new CongruencialMultiplicativoModel(null, null, null, null);
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
    title: 'Campos vacios',
    text: 'Asegurese de llenar todos los campos',
    icon: 'warning',
  })
}

 

}
