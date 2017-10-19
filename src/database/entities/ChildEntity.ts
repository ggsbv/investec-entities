import { Entity, Index, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { ParentEntity } from "./ParentEntity";
import { Limit } from "./Limits";

@Entity()
export class ChildEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column("int")
    entityId : number;

    @Column("text")
    name : string;

    @ManyToOne(type => ParentEntity, parentEntity => parentEntity.children, {
        cascadeInsert: true, // Allow to insert a new album on photo save
        cascadeUpdate: true // Allow to update an album on photo save
    })
    parent : ParentEntity;

    @OneToMany(type => Limit, limit => limit.entity)
    limits: Limit[];
}