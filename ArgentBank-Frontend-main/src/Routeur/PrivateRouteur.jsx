import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserProfile from '../Pages/Auth/User';
import Error from '../Pages/Error';

import Layout from '../Layout/Layout';
const PrivateRouteur = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/UserProfile' element={<UserProfile />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PrivateRouteur;