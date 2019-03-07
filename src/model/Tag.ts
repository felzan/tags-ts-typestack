export default class Tag {
    id: number;
    title: String;
    description: String;
    color?: String;
    backgroundColor?: String;
    
    constructor(title: String, description: String, color?: String, backgroundColor?: String ) {
        this.title = title;
        this.description = description;
        this.color = color;
        this.backgroundColor = backgroundColor;
        return this;
    }
}