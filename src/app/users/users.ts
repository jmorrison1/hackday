
export class User { 

    id: string;
    name: string;
    email: string;

    constructor(json?: any) {

        if(json) {
            this.id = json.id;
            this.name = json.name;
            this.email = json.email;
        }
        else {
            this.id = this.guid();
        }        
    }

    private guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}