import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { MyContext } from '../App';

 const PrivateRoute = ({children,...rest}) => {
   const [newUser,setNewUser] = useContext(MyContext);
  // console.log(newUser);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          newUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;