import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import MusicPage from "../pages/MusicPage/MusicPage";
import MusicDetailsPage from "../pages/MusicDetailsPage/MusicDetailsPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddMusic from "../pages/AddMusic/AddMusic";
import Header from "../components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/signup">
                    <SignupPage/>
                </Route>

                <Route exact path="/">
                    <MusicPage/>
                </Route>

                <Route exact path="/add-music">
                    <AddMusic/>
                </Route>

                <Route exact path="/music-details/:id">
                    <MusicDetailsPage/>
                </Route>

                <Route exact path="">
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router