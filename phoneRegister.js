'use strict';

module.exports=class PhoneRegister{
    constructor(data){
        if (!data) throw new Error('phone data missing');
        this.phoneRegister= data; //can be tested with to.equal
        // this.phoneRegister= [...data]; //must be tested with to.deep.equal
    }

    getTypes(){
        const types=[];
        for(let person of this.phoneRegister){
            if(person.phones){
                for (let phone of person.phones) {
                    if (phone.type && phone.type.length > 0) {
                        if (!types.includes(phone.type)) {
                            types.push(phone.type);
                        }
                    }
                }
            } 
        }
        return types;
    } //end of getTypes

    getPersonsNumbersByType(firstname,lastname,type){
        if(firstname && lastname &&  type){
            const numbersFound=[];
            for (let person of this.phoneRegister){
                if(person.firstname===firstname && person.lastname==lastname){
                    for(let phone of person.phones){
                        if(phone.type===type){
                            numbersFound.push(phone.number);
                        }
                    }
                }
            }
            return numbersFound;
        }
        else {
            throw new Error('missing parameter');
        }
    } //end of getPersonsNumbersByType

    getAllNumbersByType(type){
        if (!type) throw new Error('missing parameter');

        const found=[];
        for(let person of this.phoneRegister){
            for(let phone of person.phones){
                if(phone.type===type){
                    found.push({
                        firstname:person.firstname,
                        lastname:person.lastname,
                        number:{
                            type:phone.type,
                            tel:phone.number
                        }
                    });
                }
            }
        }
        return found;
    } //end of getAllNumbersByType

    getAllNumbers(){
        const found=[];
        for(let person of this.phoneRegister){
            if(person.phones && person.phones.length>0){
                found.push(person);
            }
        }
        return found;
    } //end of getAllNumbers

    getName(number){
        if(number){
            for (let person of this.phoneRegister) {
                for (let phone of person.phones) {
                    if (phone.number === number) {
                        return {
                            firstname: person.firstname,
                            lastname: person.lastname
                        };
                    }
                }
            }
        }
         //end of outer for-loop
        return null;
    }

}//end of class

