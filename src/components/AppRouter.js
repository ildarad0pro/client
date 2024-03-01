import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';


function AppRouter() {
    const {user} = useContext(Context)

    console.log(user)
    //const isAuth = true
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component}) =>
            <Route key={path} path={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component}) =>
            <Route key={path} path={path} Component={Component} exact/>
            )}
            {/* Перенос на главную в случае не нахождения пути */}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
        </Routes>
    )
}

export default AppRouter;

