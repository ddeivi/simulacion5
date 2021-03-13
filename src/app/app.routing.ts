// imports necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AlisamientoExponencialComponent } from './components/alisamiento-exponencial/alisamiento-exponencial.component';
import { CongruencialAditivoComponent } from './components/congruencial-aditivo/congruencial-aditivo.component';
import { CongruencialMultiplicativoComponent } from './components/congruencial-multiplicativo/congruencial-multiplicativo.component';


// importar componentes
import { CuadradoMedioComponent } from './components/cuadrado-medio/cuadrado-medio.component';
import { HomeComponent } from './components/home/home.component';
import { InversaAditivoComponent } from './components/inversa-aditivo/inversa-aditivo.component';
import { InversaMultiplicativoComponent } from './components/inversa-multiplicativo/inversa-multiplicativo.component';
import { LineaEsperaComponent } from './components/linea-espera/linea-espera.component';
import { ModeloInventarioComponent } from './components/modelo-inventario/modelo-inventario.component';
import { MontecarloComponent } from './components/montecarlo/montecarlo.component';
import { PromedioMovilComponent } from './components/promedio-movil/promedio-movil.component';
import { RegresionLinealComponent } from './components/regresion-lineal/regresion-lineal.component';
import { RegresionNoLinealComponent } from './components/regresion-no-lineal/regresion-no-lineal.component';






// definir las rutas
const appRoutes: Routes = [      

       {path: '', component: HomeComponent},
      {path: 'cuadrado-medio', component: CuadradoMedioComponent},
      {path: 'congruencial-lineal', component: CongruencialAditivoComponent},
      {path: 'congruencial-multiplicativo', component: CongruencialMultiplicativoComponent},
      {path: 'promedio-movil', component: PromedioMovilComponent},
      {path: 'asilamiento-exponencial', component: AlisamientoExponencialComponent},
      {path: 'regresion-lineal', component: RegresionLinealComponent},
      {path: 'regresion-no-lineal', component: RegresionNoLinealComponent},
      {path: 'montecarlo', component: MontecarloComponent},
      {path: 'inversa-aditiva', component: InversaAditivoComponent},
      {path: 'inversa-multiplicativa', component: InversaMultiplicativoComponent},
      {path: 'linea-espera', component: LineaEsperaComponent},
      {path: 'inventario', component: ModeloInventarioComponent},


    //   {path: '**', component: HomeComponent},


];

// exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);




