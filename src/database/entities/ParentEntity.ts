import { Entity, Index, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ChildEntity } from "./ChildEntity";

@Entity()
export class ParentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    @Index({ unique : true })
    entityId: number;

    @Column("text")
    name: string;

    @OneToMany(type => ChildEntity, childEntity => childEntity.parent)
    children : ChildEntity[];
}