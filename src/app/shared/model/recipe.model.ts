export class Recipe{
    name : string;
    description : string;
    photo : string;

    constructor(recName : string, recDesc : string, recPhoto : string){
        this.name = recName;
        this.description = recDesc;
        this.photo = recPhoto
    }
}