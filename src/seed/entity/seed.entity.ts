import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type SeedDocument = Seed & Document;

@Schema()
export class Seed{
    @Prop()
    author:        string;

    @Prop({
        required: false
    })
    comment_text?: string;
    
    @Prop()
    created_at:    Date;
    
    @Prop()
    created_at_i:  number;
    
    @Prop()
    objectID:      string;
    
    @Prop({
        required: false
    })
    parent_id?:    number;
    
    @Prop()
    story_id:      number;
    
    @Prop({
        required: false
    })
    story_title?:  string;
    
    @Prop({
        required: false
    })
    story_url?:    string;
    
    @Prop()
    updated_at:    Date;
    
    @Prop({
        required: false
    })
    children?:     number[];
    
    @Prop({
        required: false
    })
    num_comments?: number;
    
    @Prop({
        required: false
    })
    points?:       number;
    
    @Prop({
        required: false
    })
    title?:        string;
    
    @Prop({
        required: false
    })
    url?:          string;
    
    @Prop({
        required: false
    })
    story_text?:   string;
}


export const SeedSchema = SchemaFactory.createForClass(Seed);

