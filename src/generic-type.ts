
// type GenericTuple <X,Y> = [X,Y]
// const relation:GenericTuple<string,string> = ['Mr. X', 'Mrs. Y']


// // type RelationWithSalaryType = {name: string, salary: number}
// interface RelationWithSalaryInterface {name: string, salary: number}


// // const relationWithSalary: GenericTuple<RelationWithSalaryType,string> =[{name: 'Mr. X', salary: 1000000},'Mrs. Y']

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface,string> =[{name: 'Mr. X', salary: 1000000},'Mrs. Y']


// type GenericArray<T> = Array<T>

// const rollNumbers1: GenericArray<number> = [1,2,3,4]
// const rollNumbers2: GenericArray<string> = ['one', 'two', 'three', 'four']
// const rollNumbers3: GenericArray<boolean> = [true, false]


// type NameRollType = {name:string, roll:number}
// const userNameAndRollNumbers: GenericArray<NameRollType> = [{name:'Mr. X', roll:1}, {name:'Mr. Y', roll:2}]