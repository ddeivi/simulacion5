import { Component, OnInit } from '@angular/core';
import { InventarioModel } from 'src/app/models';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modelo-inventario',
  templateUrl: './modelo-inventario.component.html',
  styleUrls: ['./modelo-inventario.component.css'],
  providers:[Service]
})
export class ModeloInventarioComponent implements OnInit {
public inventarioModel: InventarioModel;
public Q;
public costoOrdenar;
public costoMantenimiento;
public costoMinimo;
public diferencia;
public result;


  constructor(private _service: Service) { 

    this.inventarioModel =  new InventarioModel(null, null, null, null, null, null)

  }

  ngOnInit(): void {
  }

  inventario(form){

    if (this.inventarioModel.Ch && this.inventarioModel.Co &&
      this.inventarioModel.D && this.inventarioModel.DiasAno &&
      this.inventarioModel.P && this.inventarioModel.Tespera) {



    this._service.inventario(this.inventarioModel).subscribe(
      response => {
        this.Q = response.Q_return;
        this.costoOrdenar = response.Co_return;
        this.costoMantenimiento = response.Ch_return;
        this.costoMinimo = response.MO_return;
        this.diferencia = response.Diferencia_total_return;
        this.result = response.Resultado;
        
        this.limpiar()
             
      },
      error => {
        console.log(error)

      }
    )
      }else{
        this.camposVacios()

      }

  }

  limpiar(){
    this.inventarioModel =  new InventarioModel(null, null, null, null, null, null)


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
