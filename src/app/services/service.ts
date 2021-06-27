import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';



@Injectable()
export class Service {
    public url: string;
  

    constructor(private _http: HttpClient) {
        this.url = global.url;
    }


    cuadradoMedio(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'cuadrado-medio/', datos, { headers: headers });

    }

    congruencialAditivo(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'congruencial-lineal/', datos, { headers: headers });

    }
    congruencialMultiplicativo(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'congruencial-multiplicativo/', datos, { headers: headers });

    }

    promedioMovil(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'promedio-movil/', datos, { headers: headers });

    }

    alisamientoExponencial(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'alisamiento-exponencial/', datos, { headers: headers });

    }

    regresionLineal(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'regresion-lineal/', datos, { headers: headers });

    }

    regresionNoLineal(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'regresion-no-lineal/', datos, { headers: headers });

    }

    montecarlo(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'montecarlo/', datos, { headers: headers });

    }
    inversaAditivo(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'inversa-aditivo/', datos, { headers: headers });

    }
    inversaMultiplicativo(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'inversa-multiplicativo/', datos, { headers: headers });

    }

    lineaEspera(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'linea-espera/', datos, { headers: headers });

    }

    inventario(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'modelo-inventario/', datos, { headers: headers });

    }

    estadisticos(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'estadisticos/', datos, { headers: headers });

    }


    // GRAFICOS

    grafico(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'grafico/', datos, { headers: headers });

    }
    graficoPM(datos): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        return this._http.post(this.url + 'graficopm/', datos, { headers: headers });

    }






}