// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//   acc.push(acc + item);
//   return acc;
// }, []);

// console.log(result);

const adminPaths2 = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    element: '<AdminDashboard />',
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: '/admin/create-admin',
        element: '<CreateAdmin />',
      },
      {
        name: 'Create Faculty',
        path: '/admin/create-faculty',
        element: '<CreateFaculty />',
      },
      {
        name: 'Create Student',
        path: '/admin/create-student',
        element: '<CreateStudent />',
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);

console.log(newArray);
