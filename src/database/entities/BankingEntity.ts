import { Entity, Index, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Parent } from "./Parent";
import { Child } from "./Child";

@Entity()
export class BankingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    @Index({ unique : true })
    entityId: number;

    @Column("text")
    name: string;

    @OneToOne(type => Parent, parent => parent.entity)
    parent: Parent;

    @OneToOne(type => Child, child => child.entity)
    child: Child;
}