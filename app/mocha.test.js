import { expect } from "chai";
import { describe } from "mocha";
import { initializeNames } from "./sujetg";

describe("Présence de plusieurs prénoms dans un string", () => {
    describe("devrait retourner si est seulement si le prénom est supérieur ou égale 2", () => {
        if(array.length-1>=2)
        it("Il devrait retourner  ", () => {
            expect(initializeNames("Rakoto M. Jean")).to.be.true;
            expect(initializeNames("Lois M. K. R. Lane")).to.be.true;
            expect(initializeNames("Ramaroson F. Miranto")).to.be.true;
        })
    })
    describe("Il devrait retourner tout de suite le strig si est seulement si le prénom est inférieur ou égale 1 ", () => {
        it("il devrait tout de suite retouner la valeur initiale",()=>{
            expect(initializeNames("Rakoto Danny")).to.be.true;
            expect(initializeNames("Ramahery Njaka")).to.be.true;
            expect(initializeNames("Rasoa")).to.be.true;
        })
    })
})