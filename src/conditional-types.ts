//a type is dependent on another type

type a1 = string;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

// Will Check if Sheikh has wife property or not returning true or false

// 'wife1' extends 'wife1' | 'wife2'
type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<Sheikh, "wife1">;

// Matha Nosto Example\

type Bandhobi = "Monica" | "Rachel" | "Pheobe";

type RemoveBandhobi<T, K> = T extends K ? never : T;

type CurrentBandhobi = RemoveBandhobi<Bandhobi, "Monica">;
