import { generateContent } from "./generateContent";

class Quadra {
    nome: string;
    esporte: string;

    constructor(nome: string, esporte: string) {
        this.nome = nome;
        this.esporte = esporte;
    }
}

class Reserva {
    cliente: string;
    quadra: Quadra;
    horario: string;

    constructor(cliente: string, quadra: Quadra, horario: string) {
        this.cliente = cliente;
        this.quadra = quadra;
        this.horario = horario;
    }
}

export class SistemaBNR {
    quadras: Quadra[] = [];
    reservas: Reserva[] = [];

    listarQuadras(): Quadra[] {
        if(this.quadras.length > 0) {
            console.log("\nQuadras disponíveis para Reserva:")
            console.log("-".repeat(33));
            console.log("Nome da quadra.: Esporte.......:");
            console.log("");
            
            this.quadras.forEach((quadra) => {
                console.log(`${quadra.nome.padEnd(16)} ${quadra.esporte.padEnd(15)}`);
            });
            
            console.log("-".repeat(33));            
        }else {
            console.log("Nenhuma quadra está criada!")
        }
        return [];
    }

    listarReservas(): Reserva[] {
        if (this.reservas.length > 0) {
            console.log("\nReservas feitas por nossos usuários:");
            console.log("-".repeat(59));
            console.log("Cliente.......: Nome da quadra.: Esporte.......: Horario..:");
            console.log("");
            
            this.reservas.forEach((reserva) => {
                console.log(`${reserva.cliente.padEnd(15)} ${reserva.quadra.nome.padEnd(16)} ${reserva.quadra.esporte.padEnd(15)} ${reserva.horario.padEnd(10)}`);
            });
            console.log("-".repeat(59));
            return [];
        } else {
            console.log("Nenhuma reserva foi realizada.");
            return [];
        }
    }

    cadastrarQuadra(nome: string, esporte: string) {
        const quadraVerif = this.quadras.find(quadraArray => quadraArray.nome === nome);
        if (quadraVerif) {
            console.log("Erro! Já possui uma quadra com o mesmo nome.")
        }else {
            const quadra = new Quadra(nome, esporte);
            this.quadras.push(quadra);
            console.log("Quadra cadastrada com sucesso.")
        }
    }

    validarHorario(horario: string): boolean {
        const verifHorario = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return verifHorario.test(horario);
    }

    verificarHorario(horario: string): boolean {
        return this.reservas.some(reserva => reserva.horario === horario);
    }

    cadastrarReserva(cliente: string, quadra: string, horario: string) {
        if (!this.validarHorario(horario)) {
            console.log("Horário inválido. Use o formato HH:MM.");
            return;
        }

        if (this.verificarHorario(horario)) {
            console.log("Horário já reservado. Escolha outro horário.");
            return;
        }

        const quadraVerif = this.quadras.find(quadraArray => quadraArray.nome === quadra);
        if (quadraVerif) {
            const reserva = new Reserva(cliente, quadraVerif, horario);
            this.reservas.push(reserva);

            const indexQuadra = this.quadras.findIndex(quadraArray => quadraArray.nome === quadra);
            this.quadras.splice(indexQuadra, 1);

            console.log("Reserva feita com sucesso!");
            generateContent("Você é um robo que envia uma dieta saudável após algum usuário efetuar uma reserva de uma quadra esportivo, agradeça-o por escolher a empresa: Bola na Rede, o nome do mesmo é " + cliente + ", além disso, envie uma sugestão de nutrição esportiva.");
        } else {
            console.log("Quadra não encontrada.");
        }
    }

    excluirReserva(nomeQuadra: string) {
        const indexReserva = this.reservas.findIndex(reserva => reserva.quadra.nome === nomeQuadra);

        if (indexReserva !== -1) {
            this.reservas.splice(indexReserva, 1);

            console.log("Reserva excluída com sucesso.");
        } else {
            console.log("Reserva com o nome da quadra fornecido não encontrada.");
        }
    }
}
