import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IRide } from "../../domain/models/IRide";

@Entity("rides")
export class Ride implements IRide {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "text"})
    customer_id: string;

    @Column({type: "text"})
    origin: string;
    
    @Column({type: "text"})
    destination: string;
    
    @Column({type: "integer"})
    distance: number;
    
    @Column({type: "text"})
    duration: string;
    
    @Column({type: "integer"})
    driver: number;
    
    @Column({type: "decimal"})
    value: number;

    @CreateDateColumn({type: "timestamptz"})
    date: Date;
    
}