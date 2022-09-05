
import { Trash, Check, Circle } from 'phosphor-react'
import { v4 } from 'uuid';

import style from './Tasks.module.css'

interface Task {
    id: string;
    title: string;
    isComplete: boolean;
}

interface TaskProps{
    cod: string,
    title: string,
    isComplete: boolean,
    content: Task[],
    onDeleteTask: (task: string) => void;
    onCompletedTask: (task: string) => void;
}

export function Tasks({ cod, title, isComplete, content, onDeleteTask, onCompletedTask}: TaskProps){

    function handleDeleteTask(){
        onDeleteTask(cod)
    }

    function handleCompletedTask(){
        onCompletedTask(cod)
    }

    return(

        <section className={style.teste}>

            <div className={style.withTasks}>
                <div className={style.onePart} >
                    <div onClick={handleCompletedTask}>
                    {isComplete ?  
                    <Check size={19} className={style.checked}/>
                    :
                    <Circle size={20} className={style.check}/>
                    }
                    </div>
                    
                    <div className={isComplete ? style.ok : ''}>{title}</div>
                    
                </div>
                <div>
                    <button onClick={handleDeleteTask} title='Deletar tarefa'>
                    <Trash size={24} />
                    </button>
                </div>
            </div>
            
        </section>
    )
    
}