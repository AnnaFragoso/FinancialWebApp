import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  email!: string;

  @Column("varchar")
  username!: string;
  
  @Column("varchar")
  linkId?: string;

  @Column("boolean")
  active!: boolean;  

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at!: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at?: Date;
}