import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankingEntity } from "./BankingEntity";
import { Parent } from "./Parent";

@Entity()
export class Child {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => BankingEntity, entity => entity.child)
    @JoinColumn()
    entity: BankingEntity;

    @ManyToOne(type => Parent, parent => parent.children)
    parent: Parent;
}