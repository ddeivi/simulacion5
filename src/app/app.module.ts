import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders  } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CuadradoMedioComponent } from './components/cuadrado-medio/cuadrado-medio.component';
import { CongruencialAditivoComponent } from './components/congruencial-aditivo/congruencial-aditivo.component';
import { CongruencialMultiplicativoComponent } from './components/congruencial-multiplicativo/congruencial-multiplicativo.component';
import { PromedioMovilComponent } from './components/promedio-movil/promedio-movil.component';
import { AlisamientoExponencialComponent } from './components/alisamiento-exponencial/alisamiento-exponencial.component';
import { RegresionLinealComponent } from './components/regresion-lineal/regresion-lineal.component';
import { RegresionNoLinealComponent } from './components/regresion-no-lineal/regresion-no-lineal.component';
import { MontecarloComponent } from './components/montecarlo/montecarlo.component';
import { InversaAditivoComponent } from './components/inversa-aditivo/inversa-aditivo.component';
import { InversaMultiplicativoComponent } from './components/inversa-multiplicativo/inversa-multiplicativo.component';
import { LineaEsperaComponent } from './components/linea-espera/linea-espera.component';
import { ModeloInventarioComponent } from './components/modelo-inventario/modelo-inventario.component';
import { HomeComponent } from './components/home/home.component';
import { EstadisticosComponent } from './components/estadisticos/estadisticos.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoMedioComponent,
    CongruencialAditivoComponent,
    CongruencialMultiplicativoComponent,
    PromedioMovilComponent,
    AlisamientoExponencialComponent,
    RegresionLinealComponent,
    RegresionNoLinealComponent,
    MontecarloComponent,
    InversaAditivoComponent,
    InversaMultiplicativoComponent,
    LineaEsperaComponent,
    ModeloInventarioComponent,
    HomeComponent,
    EstadisticosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
