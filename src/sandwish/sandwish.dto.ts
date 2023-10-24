import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsString } from "class-validator";

export class SandwishDto {
    @ApiProperty({
        description: "The sandwish's ID.",
        type: Number,
        example: 1,
    })
    @IsNumber()
    id: number;

    @ApiProperty({
        description: "Number of bread",
        type: Number,
        example: 2
    })
    @IsString()
    bread: number;

    @ApiProperty({
        description: "Number of meat",
        type: Number,
        example: 2
    })
    @IsString()
    meat: number;

    @ApiProperty({
        description: "Number of salad",
        type: Number,
        example: 2
    })
    @IsString()
    salad: number;
}