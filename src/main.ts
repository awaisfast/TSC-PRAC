// const getFullname = (firstName: string, lastName: string): string => {
//   return firstName + " " + lastName;
// };

// getFullname("Awais", "Ali");

// interface IUser {
//   name: string;
//   age?: number;
//   getMessage(): string;
// }

// const user_1: IUser = {
//   name: "Awais",
//   age: 22,
//   getMessage() {
//     return "Hello " + user_1.name;
//   },
// };

// const user_2: IUser = {
//   name: "Ali",
//   getMessage() {
//     return "Hello" + name;
//   },
// };

// console.log(user_1.getMessage());

// type ID = string;
// type popularTag = string;
// type maybePopularTag = popularTag | null;

// interface Iuser {
//   id: ID;
//   name: string;
//   lastName: string;
// }

// const popularTags: popularTag[] = [];

// const dragonTag: maybePopularTag = "dragon";

// let username: string = "awais";
// let pageNumber: string | number = 1;

// let errorMessage: null | string;

// let user: Iuser | null = null;

// let someProp: string | number | null;
// let doSomething = (): void => {};
// interface IUser {
//   getFullName(): string;
// }
// class User implements IUser {
//   private firstName: string;
//   private lastName: string;
//   readonly unchangeableName: string;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangeableName = firstName;
//   }
//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Admin extends User {
//   private editor: string;
//   setEditor(editor: string): void {
//     this.editor = editor;
//   }
//   getEditor(): string {
//     return this.editor;
//   }
// }

// const admin = new Admin("Awais", "Ali");
// admin.setEditor("AHMAD");
// console.log(admin.getEditor());
// const addId = (obj) => {
//   return {
//     ...obj,
//   };
// };
const addId = <T extends object>(obj: T) => {
  const id = 98;
  return {
    ...obj,
    id,
  };
};

interface UserInterface {
  name: string;
}

const user = {
  name: "awais-ali",
  age: 22,
};

const ret = addId<UserInterface>(user);
console.log(ret);
