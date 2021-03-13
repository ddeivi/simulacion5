import { Component, OnInit } from '@angular/core';
import { MontecarloModel } from 'src/app/models';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-montecarlo',
  templateUrl: './montecarlo.component.html',
  styleUrls: ['./montecarlo.component.css'],
  providers: [Service]
})
export class MontecarloComponent implements OnInit {
  public montecarloModel: MontecarloModel
  public lista = []
  public FPA;
  public max;
  public min;
  public muestra;
  public probabilidad;
  public simulacion;
  public ri;
  public grafico = false;

  constructor(private _service: Service) {

    this.montecarloModel = new MontecarloModel(null, null, null, null, null, null)
  }

  ngOnInit(): void {
  }

  montecarlo(form) {
    if (this.montecarloModel.a && this.montecarloModel.c &&
      this.montecarloModel.lista && this.montecarloModel.m &&
      this.montecarloModel.m && this.montecarloModel.n &&
      this.montecarloModel.x0) {


      this.montecarloModel.lista.split(',').forEach((elementx) => {
        this.lista.push(+elementx)

      });
      this.montecarloModel.lista = this.lista;



      this._service.montecarlo(this.montecarloModel).subscribe(
        response => {

          this.FPA = response.FPA;
          this.max = response.Max;
          this.min = response.Min;
          this.muestra = response.Muestra;
          this.probabilidad = response.Probabilidad;
          this.simulacion = response.Simulacion;
          this.ri = response.ri;
          this.lista = [];
          
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
    this.montecarloModel = new MontecarloModel(null, null, null, null, null, null)


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
