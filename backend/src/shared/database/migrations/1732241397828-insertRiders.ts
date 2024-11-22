import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertRiders1732241397828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO motoristas(nome, descricao, carro, avaliacao, taxa, minimokm) 
            VALUES 
            ('Homer Simpson', 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios)', 'Plymouth Valiant 1973 rosa e enferrujado', '2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts', 'R$ 2,50/km', 1),
            ('Dominic Toretto', 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.', 'Dodge Charger R/T 1970 modificado', '4/5 Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!', 'R$ 5,00/km', 5),
            ('James Bond', 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.', 'Aston Martin DB5 clássico', '5/5 Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.', 'R$ 10,00/km', 10)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete from users where nome in ('Homer Simpson', 'Dominic Toretto', 'James Bond')`);
    }

}
