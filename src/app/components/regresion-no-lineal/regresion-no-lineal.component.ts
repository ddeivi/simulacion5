import { Component, OnInit } from '@angular/core';
import { RegresionNoLinealModel } from 'src/app/models';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regresion-no-lineal',
  templateUrl: './regresion-no-lineal.component.html',
  styleUrls: ['./regresion-no-lineal.component.css'],
  providers:[Service]
})
export class RegresionNoLinealComponent implements OnInit {
  public regresionNoLinealModel: RegresionNoLinealModel
  public listaX=[];
  public listaY=[];
  public xcopy;
  public xy;
  public x2;
  public ycopy;
  public x2y;
  public x3;
  public x4;
  public result;
  public grafico = false;
  
    constructor(private _service: Service) {
  
      this.regresionNoLinealModel = new RegresionNoLinealModel(null, null)
      
     }
  
    ngOnInit(): void {
    }
  
    regresionNoLineal(form){
      if (this.regresionNoLinealModel.x && this.regresionNoLinealModel.y ) {  
  
        this.regresionNoLinealModel.x.split(',').forEach((elementx) => {
          this.listaX.push(+elementx)  
          
        });    
  
  
        this.regresionNoLinealModel.y.split(',').forEach((elementy) => {
          this.listaY.push(+elementy)  
          
        });  
    
      // longitud igual de x, y
      if (this.listaX.length === this.listaY.length) {
        this.regresionNoLinealModel.x = this.listaX;
        this.regresionNoLinealModel.y = this.listaY;  
        
          this._service.regresionNoLineal(this.regresionNoLinealModel).subscribe(
            response => {
  
              this.xcopy = response.X;
              this.xy = response.XY;
              this.x2 = response.X2;
              this.x2y = response.X2Y;
              this.ycopy = response.Y;
              this.x3 = response.X3;
              this.x4 = response.X4;
              this.result = response.Result;
              this.regresionNoLinealModel.x = null;
              this.regresionNoLinealModel.y = null;
              
              this.grafico = true;
              this.limpiar()
            },
            error => {
              console.log(error)  
              this.listaX = [];
              this.listaY = [];
      
            }
          )
      }else{
        this.listaX = [];
        this.listaY = [];
        this.noIguales();

      }
        }else {
    
          this.camposVacios();
        }
    
    }
  
    limpiar(){
      this.regresionNoLinealModel = new RegresionNoLinealModel(null, null)
      
      
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
        title: 'Campos vacios',
        text: 'Asegurese de llenar todos los campos',
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
  