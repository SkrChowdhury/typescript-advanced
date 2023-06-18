// // Generic Interface

// interface CrushInterface<T,U = null>{
//     name:string,
//     husband:T,
//     wife?: U
// }

// const crush1: CrushInterface<boolean, string> = {name:'Kate Winslet', husband: true, wife: 'Walfie'}

// const crush2: CrushInterface<string> = {name:'Kate Winslet', husband: 'Jack'}

// interface HusbandInterface {
// name:string,
//  age:number
// }

// const crush3: CrushInterface<HusbandInterface> = {name:'Kate Winslet', husband: {name:'Jack', age: 32}}

// interface PersonInterface {
//     name:string, age: number
// }

// const crush4: CrushInterface<PersonInterface, PersonInterface> = {name:'Kate Winslet', husband: {name:'Jack', age: 32}, wife:{name: 'Walfie', age: 25}}

