type Student = {
  name: string,
  favFruit?: string,
};

type Course = {
  teacher: string,
  courseName: string,
  students: Student[],
};

export {
  Course,
  Student,
};
