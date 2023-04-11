import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const RoutesPage = () => {
    return (
        <BrowserRouter>
        <main>
            <Suspense fallback={<>...</>}>
                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />

                    <Route path="*" element={
                        <NotFound />
                    } />
                </Routes>
            </Suspense>
        </main>
        </BrowserRouter>
    )
}