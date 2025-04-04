// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//   acc.push(acc + item);
//   return acc;
// }, []);

// console.log(result);

// const adminPaths2 = [
//   {
//     name: 'Dashboard',
//     path: 'dashboard',
//     element: '<AdminDashboard />',
//   },
//   {
//     name: 'User Management',
//     children: [
//       {
//         name: 'Create Admin',
//         path: 'create-admin',
//         element: '<CreateAdmin />',
//       },
//       {
//         name: 'Create Faculty',
//         path: 'create-faculty',
//         element: '<CreateFaculty />',
//       },
//       {
//         name: 'Create Student',
//         path: 'create-student',
//         element: '<CreateStudent />',
//       },
//     ],
//   },
// ];

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       key: item.name,
//       label: 'Navlink',
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: child.name,
//       })),
//     });
//   }

//   return acc;
// }, []);

// console.log(JSON.stringify(newArray));

//! Understanding serializable & non-serializable object

// serializable object
const obj = {
  name: 'Mezba',
  role: 'mentor',
  age: 18,
};
console.log(JSON.stringify(obj));

// non-serializable object
const obj2 = {
  name: 'Mir',
  role: 'mentor',
  age: 18,
  greet: () => {
    return 'Hello world!';
  },
};
console.log(JSON.stringify(obj2));
