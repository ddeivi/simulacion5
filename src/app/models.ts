export class CuadradoMedioModel {
    constructor(
        public n: number, //semilla
        public r: number,   //interacciones
    ) {}
}

export class CongruencialAditivoModel {
    constructor(
        public m: number, //modulo
        public x0: number,   //semilla
        public a: number, //multiplicador
        public c: number,   //incremento
        public n: number, //interacciones
    ) {}
}

export class CongruencialMultiplicativoModel {
    constructor(
        public m: number, //modulo
        public x0: number,   //semilla
        public a: number, //multiplicador
        public n: number, //interacciones
    ) {}
}
// promedioMovil sin modelo

export class AlisamientoExponencialModel {
    constructor(
        public lista: any,   //muestra
        public alfa: number //modulo
      
    ) {}
}


export class RegresionLinealModel {
    constructor(
        public x: any,   //valores en x
        public y: any //valores en y
      
    ) {}
}

export class RegresionNoLinealModel {
    constructor(
        public x: any,   //valores en x
        public y: any //valores en y
      
    ) {}
}

export class MontecarloModel {
    constructor(
        public m: number, //modulo
        public x0: number,   //semilla
        public a: number, //multiplicador
        public c: number,   //incremento
        public n: number, //interacciones
        public lista: any // muestra 
      
    ) {}
}

export class InversoAditivoModel {
    constructor(
        public m: number, //modulo
        public x0: number,   //semilla
        public a: number, //multiplicador
        public c: number,   //incremento
        public n: number, //interacciones
        public landa: number // landa
    ) {}
}

export class InversoMultiplicativoModel {
    constructor(
        public m: number, //modulo
        public x0: number,   //semilla
        public a: number, //multiplicador
        public n: number, //interacciones
        public landa: number // landa
    ) {}
}

export class LineaEsperaModel {
    constructor(
        public nu: number, //modulo       
        public landa: number, // landa
        public clientes: number // numero clientes

    ) {}
}

export class InventarioModel {
    constructor(
        public D: number, //       
        public Co: number, // 
        public Ch: number, // 
        public P: number, // 
        public Tespera: number, // 
        public DiasAno: number // 

    ) {}
}