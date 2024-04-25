import { IsString } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "news" })
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar"})
  @IsString()
  title_uz: string;

  @Column({ type: "varchar"})
  @IsString()
  title_en: string;

  @Column({ type: "varchar"})
  @IsString()
  title_ru: string;

  @Column({ type: "varchar"})
  @IsString()
  description_uz: string;

  @Column({ type: "varchar"})
  @IsString()
  description_en: string;

  @Column({ type: "varchar"})
  @IsString()
  description_ru: string;

  @Column({ type: "varchar"})
  @IsString()
  image: string;

  @Column({ type: "varchar"})
  @IsString()
  link: string;

  @Column({ type: "varchar"})
  @IsString()
  type: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: Date;
}
