/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable no-console */

import {
  Course,
  Student,
} from './types';

const students: Student[] = [
  {
    name: 'Alessandra',
    favFruit: 'raspberry',
  },
  {
    name: 'Austen',
    favFruit: 'mango',
  },
  {
    name: 'Karen',
    favFruit: 'pear',
  },
  {
    name: 'Kenny',
    favFruit: 'pineapple',
  },
  {
    name: 'Sarah',
    favFruit: 'nectarine',
  },
  {
    name: 'Rute',
    favFruit: 'banana',
  },
];

const courses: Course[] = [
  {
    teacher: 'Gabe',
    courseName: 'Tropical Fruits 101',
    students,
  },
  {
    teacher: 'Ben',
    courseName: 'Large Scale Farming of Tropical Fruits',
    students,
  },
  {
    teacher: 'Gabe',
    courseName: 'Cooking with Tropical Fruits',
    students,
  },
];

// TODO: Explain in plain high-level English each of the array functions.

/*------------------------------------------------------------------------*/
/*                             array.forEach()                            */
/*                                                                        */
/*        Executes a provided function once for each array element        */
/*------------------------------------------------------------------------*/

for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  const {
    teacher,
    courseName,
  } = course;

  const listing = courseName + ' - ' + teacher;
  // console.log(listing);
}

courses.forEach((course, i, innerCourses) => {
  const {
    teacher,
    courseName,
  } = course;
  const listing = `${courseName} - ${teacher}`;
  // console.log(listing);
});

let isEveryOther = false;
students.forEach((student) => {
  if (isEveryOther) {
    // console.log(student.name);
  }
  isEveryOther = !isEveryOther;
});

/*------------------------------------------------------------------------*/
/*                         Array.prototype.map()                          */
/*                                                                        */
/*       Creates a new array by applying a function to each element       */
/*------------------------------------------------------------------------*/

const courseNameList: string[] = [];
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  courseNameList.push(course.courseName);
}

const courseNameList2: string[] = courses.map((course: Course): string => {
  return course.courseName;
});
// console.log(courseNameList2);

const numberOfStudentsInClass: number[] = courses
  .map((course) => {
    return course.students;
  })
  .map((studentList) => {
    return studentList.length;
  });
console.log(numberOfStudentsInClass);



const studentNamesList: string[][] = [];
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  const studentsInCourse = course.students;

  const studentNames: string[] = [];
  for (let j = 0; j < studentsInCourse.length; j++) {
    const student = studentsInCourse[j];

    studentNames.push(student.name);
  }
  studentNamesList.push(studentNames);
}

/*------------------------------------------------------------------------*/
/*                         Array.prototype.some()                         */
/*                                                                        */
/*      Test whether an element in the array passes the test function     */
/*------------------------------------------------------------------------*/

let isBenTeachingACourse = false;
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  if (course.teacher === 'Ben') {
    isBenTeachingACourse = true;
  }
}

/*------------------------------------------------------------------------*/
/*                         Array.prototype.every()                        */
/*                                                                        */
/*     Test whether all elements in the array pass the test function      */
/*------------------------------------------------------------------------*/

let doesEveryoneLikeApples = true;
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if (student.favFruit !== 'apple') {
    doesEveryoneLikeApples = false;
  }
}

/*------------------------------------------------------------------------*/
/*                        Array.prototype.filter()                        */
/*                                                                        */
/*        Create an array with elements that pass the test function       */
/*------------------------------------------------------------------------*/

const coursesGabeTeaches: Course[] = [];
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  if (course.teacher === 'Gabe') {
    coursesGabeTeaches.push(course);
  }
}
// console.log(coursesGabeTeaches);

/*------------------------------------------------------------------------*/
/*                              array.find()                              */
/*                                                                        */
/*        Return the first element that satisfies the test function       */
/*------------------------------------------------------------------------*/

let studentWhoLikesApples: Student;
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if (student.favFruit === 'apple') {
    studentWhoLikesApples = student;
    break;
  }
}

/*------------------------------------------------------------------------*/
/*                             object.keys()                              */
/*                                                                        */
/*        Return the first element that satisfies the test function       */
/*------------------------------------------------------------------------*/

/*------------------------------------------------------------------------*/
/*                            object.values()                             */
/*                                                                        */
/*        Return the first element that satisfies the test function       */
/*------------------------------------------------------------------------*/
