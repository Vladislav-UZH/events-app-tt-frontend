import { lazy } from 'react';

// Components

// styles
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

//___APP___
const HomePage = lazy(() => import('../../pages/Home'));
const ProfilePage = lazy(() => import('../../pages/Profile'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute component={<ProfilePage />} redirectTo="/login" />
          }
        />
        <Route
          path="/reg"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />}
        />
      </Route>
    </Routes>
  );
};
//* <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<HomePage />} /> */}
//       {/* <Route
//         path="/reg"
//         element={
//           <RestrictedRoute
//             redirectTo="/contacts"
//             component={<RegisterPage />}
//           />
//         }
//       />
//       <Route
//         path="/login"
//         element={
//           <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//         }
//       />
//       <Route
//         path="/contacts"
//         element={
//           <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//         }
//       /> */}
//     {/* </Route>
//   </Routes> */}
// {/* ); */}
