import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parent } from "./Parent";

@Entity()
export class RelationshipType {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Parent, parent => parent.relationshipType)
    parent: Parent;
}