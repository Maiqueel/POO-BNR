class Quadra {
    // Criado classe Quadra
    nome: string;
    esporte: string;

    // Constructor: Obriga que tenha o atributo nome e esporte pra criação da classe.
    constructor(nome: string, esporte: string) {
        this.nome = nome;
        this.esporte = esporte;
    }
}

class Reserva {
        // Criado classe Quadra
    cliente: string;
    quadra: Quadra;
    data: string;

    // Constructor: Obriga que tenha o atributo cliente, quadra e data pra criação da classse.
    constructor(cliente: string, quadra: Quadra, data: string) {
        this.cliente = cliente;
        this.quadra = quadra;
        this.data = data;
    }
}

export class SistemaBNR {
    // Dois atributos, sendo eles a classe Quadra e Reserva, porém em formato de Array.
    quadras: Quadra[] = [];
    reservas: Reserva[] = [];

    listarQuadras(): Quadra[] {
        // Se o tamanho do array quadras for maior que 0, ele retorna o array.
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
        // Na linha 32 tem ": Quadra[]", então a função espera o Quadra[], porém como vai retornar nada, é necessário por return [];
        return [];
    }

    // Mesma coisa que o de cima ^
    listarReservas(): Reserva[] {
        if (this.reservas.length > 0) {
            console.log("\nReservas feitas por nossos usuários:");
            console.log("-".repeat(59));
            console.log("Cliente.......: Nome da quadra.: Esporte.......: Horario..:");
            console.log("");
            
            this.reservas.forEach((reserva) => {
                console.log(`${reserva.cliente.padEnd(15)} ${reserva.quadra.nome.padEnd(16)} ${reserva.quadra.esporte.padEnd(15)} ${reserva.data.padEnd(10)}`);
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
            console.log("Abortado! Já possui uma arena com o mesmo nome.")
        }else {
            const quadra = new Quadra(nome, esporte);
            this.quadras.push(quadra);
            console.log("Quadra cadastrada com sucesso.")
        }
    }

    cadastrarReserva(cliente: string, quadra: string, data: string) {
        // Faz uma verificação na tabela quadras
        // q => q.nome === quadra
        // ^^ -- Percorre por cada linha do array pra verificar se acha algum array com o mesmo nome da variavel quadra
        const quadraVerif = this.quadras.find(quadraArray => quadraArray.nome === quadra);
        if (quadraVerif) {
            // Se encontrar algo, ele vai criar um novo objeto na array reserva
            const reserva = new Reserva(cliente, quadraVerif, data);
            // Vai dar push no objeto no array
            this.reservas.push(reserva);

            // findIndex > mesma coisa que o find, porém ele vai procurar o index pelo nome
            // Se achar o mesmo nome em algum objeto, ele vai pegar o index
            // Se quiser ver os indexs, coloca         console.table(this.quadras);
            // Abaixo da linha 41, que tu vai ver os index quando executar o codigo
            const indexQuadra = this.quadras.findIndex(quadraArray => quadraArray.nome === quadra)

            // Ele vai removar a quadra que tem o mesmo index
            // O 1 é pra limitar quantos vai remover após o index desejado, no caso 1 é pq é só o que a gente quer
            this.quadras.splice(indexQuadra, 1);

            console.log("Reserva feita com sucesso!")
        }else {
            console.log("Quadra não encontrada.")
        }

    }

    excluirReserva(nomeQuadra: string): void {
        // Encontra o índice da reserva com base no nome da quadra
        const indexReserva = this.reservas.findIndex(reserva => reserva.quadra.nome === nomeQuadra);

        if (indexReserva !== -1) {
            // Se a reserva for encontrada, remove-a da lista de reservas
            const reserva = this.reservas[indexReserva];
            this.reservas.splice(indexReserva, 1);

            // Adiciona a quadra de volta à lista de quadras disponíveis
            this.quadras.push(reserva.quadra);

            console.log("Reserva excluída com sucesso.");
        } else {
            console.log("Reserva com o nome da quadra fornecido não encontrada.");
        }
    }
    
}