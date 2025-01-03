import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios') 
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  nome!: string;

  @Column({ type: 'varchar', length: 150, unique: true, nullable: false })
  email!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  senha!: string;

  @Column({ type: 'boolean', default: true })
  status!: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;
}
