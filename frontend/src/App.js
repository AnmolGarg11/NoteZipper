import React, { useState } from 'react'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import LandingPage from './screens/landingpage/LandingPage';
import {BrowserRouter, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/CreateNote/SingleNote';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

const App = () => {
 const [search , setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/createnote" component={CreateNote} exact />
        <Route path="/note/:id" component={SingleNote} exact />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
