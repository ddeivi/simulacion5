import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promedio-movil',
  templateUrl: './promedio-movil.component.html',
  styleUrls: ['./promedio-movil.component.css'],
  providers:[Service]
})
export class PromedioMovilComponent implements OnInit {
  public muestra;
  public lista = [];
  
  public x;
  public MMO3;
  public MMO4;
  public eMM3;
  public eMM4;
  public grafico = false;
  public mostrar = false
  public url = global.url;


  constructor(private _service: Service) { }

  ngOnInit(): void {

  }


  aggMuestra(){

    if (this.muestra) {
      
    
 
    this.muestra.split(',').forEach((element, i) => {
      this.lista.push(+element)  
      
    });  

    this._service.promedioMovil(this.lista).subscribe(
      response => {
        this.x = response.MUESTRA;
        this.MMO3 = response.MM03;
        this.MMO4 = response.MMO4;
        this.eMM3 = response.eMM03;
        this.eMM4 = response.eMM04;
        this.lista = []
        
        this.grafico = true;
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
  limpiar(){
    this.muestra = '';

  }
  generarGrafico(){
    this.mostrar = true
    // let datos = {'x': this.x, 'm3': this.MMO3, 'm4': this.MMO4}
    // this._service.graficoPM(datos).subscribe(
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
