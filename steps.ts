/**
 * --------------------
 * Basic Installations
 * ---------------------
 *    1. npm create vite
 *    2. framework: React
 *    3. variant: Typescript
 *    4. npm i
 *    5. npm i react-router-dom
 *    6. npm i react-hook-form
 *    7. npm i antd
 *
 * -----------------------------
 * Routing paths (role based)
 * -----------------------------
 *    www.maindomain/admin/create-stuent
 *
 * -----------------
 *  Redux Toolkit
 * -----------------
 *    1. npm install @reduxjs/toolkit react-redux
 *    2. create and connect store, Infer the `RootState` and `AppDispatch` types from the store itself, create hooks
 *
 *--------------
 *  jwt-decode
 *--------------
 *    npm i jwt-decode
 *
 * ==========================
 *  Set data to local state
 * ==========================
 *  Step 1: hit '/auth/login/' from authApi injected in baseApi fetchBaseQuery from baseQuery baseUrl: 'http://localhost:5000/api/v1' from RTK Query,
 *  Step 2: get accessToken and keep in local state
 *  Step 3: decode accessToken get the user and set user in local state
 *
 */
