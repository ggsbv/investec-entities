import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankingEntity } from "./BankingEntity";
import { Child } from "./Child";
import { RelationshipType } from "./RelationshipType";

@Entity()
export class Parent {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => BankingEntity, entity => entity.parent)
    @JoinColumn()
    entity: BankingEntity;

    @OneToOne(type => RelationshipType, relationshipType => relationshipType.parent)
    @JoinColumn()
    relationshipType: RelationshipType;

    @OneToMany(type => Child, child => child.parent)
    children: Child[];
}