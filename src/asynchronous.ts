// Mocking
const makePromise = () => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

type DataType = {
  data: string;
};

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "Data is Fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

// Json Place Holder API Fetching

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();
