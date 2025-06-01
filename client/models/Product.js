export class Product{
    constructor({id,title, description, price, images, category, properties, timestamps}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
        this.category = category;
        this.properties = properties;
        this.timestamps = timestamps;
    };
}

