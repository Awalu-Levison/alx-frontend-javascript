/// <reference path="./Teacher.ts" />

namespace Subjects {

  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

   getAvailableTeacher(): string {
     const myvar = this.teacher.experienceTeachingC;
     if (myvar > 0) {
       return "Available Teacher: ${this.teacher.firstName}";
     } else {
        return "No available teacher";
     }
      
    }
  }
}
