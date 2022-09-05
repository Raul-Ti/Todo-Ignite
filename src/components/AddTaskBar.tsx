
import styles from './AddTaskBar.module.css'
import clipBoard from '../assets/Clipboard.svg'

import { PlusCircle, TrashSimple } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, Key, useState } from 'react'
import { Tasks } from './Tasks'
import { Infotasks } from './InfoTasks'
import { v4 } from 'uuid';


interface Task {
    id: string;
    title: string;
    isComplete: boolean;
}

export function AddTaskBar(){

    const [tasks, setTasks] = useState<Task[]>([]);


    const [ newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()



        setTasks([...tasks, {id: v4(), title: newTaskText, isComplete: false}])
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){

        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteTask(taskTodelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task=>{
            return task.id != taskTodelete
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function completedTask(taskToComplete: string){
        const newTaskList = tasks.map(task => task.id === taskToComplete ? {...task, isComplete : !task.isComplete} : task);
        setTasks(newTaskList);
    }

    return(

        <div className={styles.container}>
            <div className={styles.addTaskBar}>
                <form onSubmit={handleCreateNewTask} className={styles.taskBar}>
                    <textarea 
                        name="tarefa"
                        value={newTaskText}
                        placeholder='Adicione uma nova tarefa'
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        required
                    />
                    <button>
                        <div>
                        Criar
                        </div>
                        <div className={styles.icone}>
                        <PlusCircle />
                        </div>
                    </button>
                </form>
            </div>

            
            <main>
                <Infotasks 
                    total={tasks.length}
                    completed={tasks.filter(task => task.isComplete).length}
                />
                
                {tasks.length>=1? (
                    <div>
                        {tasks.map( task=>{
                            return(
                                <Tasks
                                    cod={task.id}
                                    title={task.title}
                                    isComplete={task.isComplete}
                                    content={tasks}
                                    onDeleteTask={deleteTask}
                                    onCompletedTask={completedTask}
                                />
                            )
                        })}
                    </div>
                ) 
                
                : (
                        <section className={styles.teste}>
                
                            <div className={styles.noTasks}>
                                <img src={clipBoard} alt="Logotipo to-do"/>
                                <div>
                                    <strong>Você ainda não tem tarefas cadastradas</strong>
                                    <br />
                                    <div>
                                        <span>Crie tarefas e organize seus itens a fazer</span>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                )}
            
            </main>
        </div>
    )
}

