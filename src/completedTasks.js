import React from "react";
import "./board2.css";
import User from "./usericon.jpeg";
import Board from "./boardimage.png";
import Project from "./projectimage.png";
import Setting from "./settingimage.png";
import task from "./tasks.png";
import backarrow from "./backarrrow.png";
import writingimage from "./writingimage.png";
import studyingimage from "./studyingimage.jpg";
import designimage from "./designingimage.jpg";
import logo from "./logo.png";
import bell from "./notification.png";
import { useNavigate } from "react-router-dom";
const CompletedTasks = () => {
  const tasks = [
    { id: 1, title: "Task-1", date: "Updated today", image: writingimage },
    { id: 2, title: "Task-4", date: "Updated yesterday", image: studyingimage },
    { id: 3, title: "Task-8", date: "Updated 2 days ago", image: designimage}

  ];
  const navigate =useNavigate();

  return (
    <div className="task-board-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"><img className="logoimage" src={logo}/> <strong className="logotext">Task Nest</strong></div>
        <ul><br></br><br></br>
          <li><img src={Board} alt="Board" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main">
      <header className="task-header">
          <h2>Task Management System</h2>
          <div className="icons">
            <img src={bell} alt="Notification" className="icon1" />
            <img src={User} alt="User" className="icon2" />
          </div>
        </header>
      <div className="icons">
      <a href="/boardPage">
          <img className="backarrrow" src={backarrow} alt="" /></a>
          </div>
        <header className="task-header">
          <h2 className="text">Completed Tasks</h2>
        </header>

        

        {/* Task Grid */}
        <div className="task-grid">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <img src={task.image} alt={task.title} />
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>{task.date}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default CompletedTasks;