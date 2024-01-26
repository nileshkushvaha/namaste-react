import React, {lazy, Suspense} from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import Home from './src/Pages/Home';
// import About from './src/Pages/About';
import Contact from './src/Pages/Contact';
import Error from './src/Pages/Error';
import RestaurantInfo from './src/Components/RestaurantInfo';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const About = lazy(() => import('./src/Pages/About'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <main className="main-container">
                <section className="restaurants">
                    <Outlet />
                </section>
            </main>
            <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <Suspense fallback= {<h1>Loding...</h1>}> <About /> </Suspense> 
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantInfo/>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);