'use strict';

describe("TEST FOR PERSON SERVICE", function () {
            //beforeEach(angular.mock.module('app));
            var personService;
            beforeEach(function () {
                console.log("beforeEach Test");
                angular.mock.module('appName');
                inject(function (_personService_) {
                    personService = _personService_;
                });
            });
            it("sample Test", function () {
                expect(2).toBe(2);
            });

    /*
    it("getLastName should be a function", function () {
        expect(typeof (samplePerson.getLastName)).toBe("function");
    });
    it("setFirstName should be a function", function () {
        expect(typeof (samplePerson.setFirstName)).toBe("function");
    });
    it("setLastName should be a function", function () {
        expect(typeof (samplePerson.setLastName)).toBe("function");
    });
    it("First Name should be Don by default", function () {
        expect(samplePerson.getFirstName()).toBe("Don");
    });
    it("Last Name should be Draper by default", function () {
        expect(samplePerson.getLastName()).toBe("Draper");
    });
    it("should update the first and last name", function () {
        samplePerson.setFirstName("Don");
        samplePerson.setLastName("Draper");
        expect(samplePerson.getFirstName()).toBe("Roger");
        expect(samplePerson.getLastName()).toBe("Sterling");
    });*/




})