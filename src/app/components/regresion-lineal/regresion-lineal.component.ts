import { Component, OnInit } from '@angular/core';
import { RegresionLinealModel } from 'src/app/models';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regresion-lineal',
  templateUrl: './regresion-lineal.component.html',
  styleUrls: ['./regresion-lineal.component.css'],
  providers: [Service],
})
export class RegresionLinealComponent implements OnInit {
  public regresionLinealModel: RegresionLinealModel;
  public listaX = [];
  public listaY = [];
  public xcopy;
  public xy;
  public x2;
  public ycopy;
  public y2;
  public result;
  public grafico = false;

  constructor(private _service: Service) {
    this.regresionLinealModel = new RegresionLinealModel(null, null);
  }

  ngOnInit(): void { }

  regresionLineal(form) {

    if (this.regresionLinealModel.x && this.regresionLinealModel.y) {

      
      this.regresionLinealModel.x.split(',').forEach((elementx) => {
        this.listaX.push(+elementx);
      });

      this.regresionLinealModel.y.split(',').forEach((elementy) => {
        this.listaY.push(+elementy);
      });

      // longitud igual de x, y
      if (this.listaX.length === this.listaY.length) {
        this.regresionLinealModel.x = this.listaX;
        this.regresionLinealModel.y = this.listaY;
  
        this._service.regresionLineal(this.regresionLinealModel).subscribe(
          (response) => {
            this.xcopy = response.X;
            this.xy = response.XY;
            this.x2 = response.X2;
            this.ycopy = response.Y;
            this.y2 = response.Y2;
            this.result = response.Result;
            this.regresionLinealModel.x = null;
            this.regresionLinealModel.y = null;
            
            this.grafico = true;
            this.limpiar()

          },
          (error) => {
            console.log(error);
            this.listaX = [];
            this.listaY = [];

          }
        );
      } else {
        this.listaX = [];
        this.listaY = [];
        this.noIguales();
      }
    } else {
      this.camposVacios();

    }
  }

  limpiar() {
    this.regresionLinealModel = new RegresionLinealModel(null, null);
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
  noIguales() {
    Swal.fire({
      title: 'Advertencia',
      text: 'Los valores no tienen la misma longitud',
      icon: 'warning',
    });
  }
}
