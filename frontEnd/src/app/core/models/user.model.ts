export class UserModel {

    constructor(public id: number,
                public firstName: string,
                public email: string,
                public registrationDate: string,
                public role: string
    ) {}
}