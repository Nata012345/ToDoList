import { useState } from 'react';
import InputPlus from "./components/InputPlus/InputPlus.jsx";
import InputTask from "./components/InputTask/InputTask.jsx";
import CleanTasks from "./components/CleanALLTasks/CleanTasks.jsx";
import DoneTasks from "./components/DoneTasks/DoneTasks.jsx";
import './styles/common.css';
import './styles/reset.css';
import styles from './app.module.css';

export const generatedId = () => {
   return Math.random().toString(16).slice(2) + new Date().getTime().toString(36);
}
export default function App() {
    const [tasks, setTasks] = useState([]);
    // const [doneTasks, setDoneTasks] = useState([]);
    // console.log(doneTasks);

  return (
    <article className={styles.article}>
          <h1 className={styles.articleTitle}>To Do App</h1>
          <section className={styles.articleSection}>
              <InputPlus onAdd={(title) => {
                  if (!title) return;
                  setTasks([
                      ...tasks,
                      {
                          id: generatedId(),
                          title,
                      }])
              }} />
          </section>
          <section className={styles.articleSection}>
              {
                  tasks.length <= 0 &&
                    (<p className={styles.articleText}>These is no one task.</p>)
              }
              {
                  tasks.map((task) => (
                      <InputTask
                          id={task.id}
                          key={task.id}
                          title={task.title}
                          onDone={(id) => {
                              setTasks(tasks.filter((task) => task.id !== id));
                              // const taskDone = tasks.find((task) => task.id === id);
                              // doneTasks.push(taskDone);
                          }}

                          onRemove={(id) => {
                              setTasks(tasks.filter((task) => task.id !== id));
                          }}
                          onEdited={(id, value) => {
                              setTasks(tasks.map((task) => task.id === id ? {
                                  ...task,
                                  title: value
                              } : task))
                          }}
                      />
                  ))
              }
              {
                 tasks.length > 0 ? <CleanTasks onClear={() => setTasks([])}/> : ''
              }
          </section>
          {/*<section className={styles.articleSection}>*/}
          {/*    {*/}
          {/*        doneTasks.length <= 0 && ''*/}
          {/*    }*/}
          {/*    {*/}
          {/*        <>*/}
          {/*            <p className={styles.articleText}>Completed tasks</p>*/}
          {/*            {doneTasks.map((doneTask) => (*/}
          {/*              <DoneTasks*/}
          {/*                  id={doneTask.id}*/}
          {/*                  key={doneTask.key}*/}
          {/*                  title={doneTask.title}*/}
          {/*              />*/}
          {/*            ))}*/}
          {/*        </>*/}
          {/*    }*/}
          {/*</section>*/}
    </article>
  );
}

