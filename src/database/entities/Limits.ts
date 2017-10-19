import { Entity, Index, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { ChildEntity } from "./ChildEntity";

@Entity()
export class Limit {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column("int")
    // entityId: number;

    @Column("text")
    riskTakerGroupName: string;

    @Column("text")
    riskTakerName: string;

    @Column("int")
    facilityId: number;

    @Column("text")
    facilityType: string;

    @Column("int")
    limitId: number;

    @Column("text")
    limitType: string;

    @Column("text")
    product: string;

    @ManyToOne(type => ChildEntity, childEntity => childEntity.limits, {
        cascadeInsert: true, // Allow to insert a new album on photo save
        cascadeUpdate: true // Allow to update an album on photo save
    })
    entity: ChildEntity;
}