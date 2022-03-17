'use strict';

const expect = require('chai').expect;

const PhoneRegister = require('../phoneRegister');

const phones = require('../phones.json');

describe('Testing constructor', function(){
    it('Missing parameter throw an exception', function(){
        expect(function(){
            new PhoneRegister()
        }).to.throw('phone data missing');
    });
});

describe('Test getTypes', function(){
    it('Using default data', function(){
        const phoneregister = new PhoneRegister(phones);
        expect(phoneregister.getTypes()).to.deep.equal(['home','work','mobile']);
    });
});

describe('Testing method getPersonsNumbersByType', function(){
    const phoneregister = new PhoneRegister(phones);

    it('Is getPersonsNumbersByType defined?', function(){
        expect(phoneregister).to.have.a.property('getPersonsNumbersByType')
    });

    const testCases = [
        {firstname:'Leila', lastname:'Hökki',   type: 'work',   result:['87654321','05040302']  },
        {firstname:'Matt',  lastname:'River',   type: 'mobile', result:['04123456']             },
        {firstname:'Matt',  lastname:'River',   type: 'z',      result:[]                       }
    ];

    testCases.forEach(function(testCase){
        it(`getPersonsNumbersByType(${testCase.firstname},${testCase.lastname},${testCase.type}) returns [${testCase.result}]`,function(){
            expect(phoneregister.getPersonsNumbersByType(testCase.firstname,testCase.lastname,testCase.type))
                .to.deep.equal(testCase.result);
        });
    });

});