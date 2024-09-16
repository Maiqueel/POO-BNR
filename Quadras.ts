export class Quadras {
    nomeQuadra: string;
    tipoEsporte: string;
    hora: number[] = [];
    nomeCliente: string;
   
    constructor(nomeQuadra: string, tipoEsporte: string) {
        this.nomeQuadra = nomeQuadra;
        this.tipoEsporte = tipoEsporte;
        this.hora = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        this.nomeCliente = "";
    }

    validacaoHorario() : void {

    }

}