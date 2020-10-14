import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602627651037 implements MigrationInterface {

  /**
   * Realiza alterações no banco de dados.
   * Ex: Criar tabela, criar um novo campo,
   * deletar algum campo, etc. 
   *
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, // A coluna não pode ser negativa, sempre um número positivo
          isPrimary: true, // Chave primária
          isGenerated: true, // A coluna será gerada automaticamente
          generationStrategy: 'increment', // Será gerada automaticamente com uma lógica incremental
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10, // Números depois da vírgula
          precision: 2 // Números antes da vírgula
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        }
      ]
    }))
  }

  /** Desfaz o que foi feito no método UP. */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }

}
