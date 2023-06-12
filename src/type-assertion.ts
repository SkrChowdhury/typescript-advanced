let emni: any ;

emni = 'Next Level Web Development';

(emni as string).length
// <string>emni.length



function kgToGram (param:string | number):string | number | undefined {
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000
        return `The Converted result is: ${value} gram`
    }
    if(typeof param === 'number'){
        const value = param * 1000;
        return value
    }
}

const resultToBeNumber = kgToGram(1000) as number
const resultToBeString = kgToGram(resultToBeNumber) as string

// const resultToBeNumber = <number>kgToGram(1000) 
// const resultToBeString = <string>kgToGram(resultToBeNumber)  Another way to declare type assertion