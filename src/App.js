import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskNest from "./frontpage.js";
import SignIn from "./signin.js";
import LoginIn from "./login.js";
import Signin from "./signinpage.js";
import LoginPage from "./loginpage.js";
import TaskBoard from "./board.js";
import OverdueTask from "./overdueTask.js";
import AddTask from "./addTask.js";
import Tasks from "./tasks.js";
import Projects from "./projects.js";
import Account from "./account.js";
import CompletedTasks from "./completedTasks.js";
import InProgress from "./inprogressTasks.js";
import Settings from "./settingPage.js";
import TodoList from "./todoListPage.js";
import AboutPage from "./AboutPage.js";
import ContactPage from "./contactPage.js";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskNest />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/login" element={<LoginIn />} />
                <Route path="/signInPage" element={<Signin />} />
                <Route path="/logInPage" element={<LoginPage />} />
                <Route path="/boardPage" element={<TaskBoard />} />
                <Route path="/addTask" element={<AddTask />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/account" element={<Account />} />
                <Route path="/overdueTasks" element={<OverdueTask />} />
                <Route path="/completedTasks" element={<CompletedTasks />} />
                <Route path="/inprogressTasks" element={<InProgress />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/todoList" element={<TodoList />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/contactPage" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
