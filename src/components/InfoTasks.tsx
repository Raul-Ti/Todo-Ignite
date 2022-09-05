
import style from './InfoTasks.module.css'


interface InfoTaskProps{
    total:number,
    completed:number
}


export function Infotasks({total, completed}: InfoTaskProps){
    return(
    <section>
    <div className={style.infoTasks}>
                <div className={style.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <span>{total}</span>
                </div>
                <div className={style.finishedTasks}>
                    <strong>Concluídas</strong>
                    <span>{completed} de {total}</span>
                </div>
    </div>
    </section>
    )
}