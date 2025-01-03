import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('produtos') 
export class Produto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  nome!: string;

  @Column({ type: 'text', nullable: false })
  descricao!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  foto!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco_diario!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco_semanal!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco_quinzenal!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco_mensal!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;
}
