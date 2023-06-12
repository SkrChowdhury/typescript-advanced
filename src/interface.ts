type User ={
    name: string;
    age: number
}

interface IUser{
    name:string;
    age: number
}

interface IExtendedUser extends IUser {
    role: string
}

const user : IExtendedUser ={
    name: 'Hello',
    age: 2000,
    role: 'admin'
}

const userWithTypeAlias: User = {
    name:'Type Alias',
    age: 100
}

const userWithInterface: IUser = {
    name:'Interface',
    age: 200
}

//For Function

type addNumbersType = (num1:number,num2:number) => number
interface IAddNumbers{
    (num1:number,num2:number): number
}

const addNumbers: IAddNumbers = (num1,num2) => num1 + num2 // Using Interface
const addNumbers2: addNumbersType = (num1,num2) => num1 + num2 // using Type Alias


//For Arrays
type rollNumbersType = number[]
interface IRollNumbers{
    [index:number] : number | string
}
// const rollNumbers :rollNumberType = [1,4,5]
const rollNumbers :IRollNumbers = [1,4,'Hello']