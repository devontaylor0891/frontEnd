export class Producer {
    public id: number;
    public name: string;
    public location: string;
    public province: string;
    public description: string;
    public email: string;
    public logo: string;
    public longitude: number;
    public latitude: number;
    public firstName: string;
    public registrationDate: string;
    
    constructor(id: number,
                name: string,
                location: string,
                province: string,
                description: string,
                email: string,
                logo: string,
                longitude: number,
                latitude: number,
                firstName: string,
                registrationDate: string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.province = province;
        this.description = description;
        this.email = email;
        this.logo = logo;
        this.longitude = longitude;
        this.latitude = latitude;
        this.firstName = firstName;
        this.registrationDate = registrationDate;
    }
}