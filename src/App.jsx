import { useEffect, useState } from "react";
import Task from "/src/components/Task";
import Button from "/src/components/Button";

function App() {
    const [taskInp, setTaskInp] = useState("");
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    const [confirmDeletion, setConfirmDeletion] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setConfirmDeletion(false);
    }, [tasks]);

    function addTask(e) {
        e.preventDefault();
        setTasks((prevTasks) => {
            let newTasks = [
                ...prevTasks,
                { id: Date.now(), name: taskInp, checked: false },
            ];
            return newTasks;
        });
        setTaskInp("");
    }

    function editTask(id) {
        const newName = prompt("Please enter the new task name: ");
        setTasks((prevTasks) => {
            let newTasksArray = [];
            prevTasks.forEach((task) => {
                if (task.id === id) {
                    newTasksArray.push({ ...task, name: newName });
                } else {
                    newTasksArray.push(task);
                }
            });
            return newTasksArray;
        });
    }

    function removeTask(id) {
        setTasks((prevTasks) => {
            let newTasks = [];
            prevTasks.forEach((task) => {
                if (task.id === id) return;
                newTasks.push(task);
            });
            return newTasks;
        });
    }

    function updateCheckedBox(id, checked) {
        setTasks((prevTasks) => {
            let newTasksArray = [];
            prevTasks.forEach((task) => {
                if (task.id === id) {
                    newTasksArray.push({ ...task, checked: checked });
                } else {
                    newTasksArray.push(task);
                }
            });
            return newTasksArray;
        });
    }
    return (
        <main className="flex justify-center items-center h-screen py-4">
            <div className="bg-blue-500 rounded p-5 flex flex-col gap-4 max-w-[90%] min-w-[60%] max-h-full overflow-y-auto border-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-white">TODO App</h1>
                    <button className="text-white font-bold py-4 px-8 text-xl bg-red-600 rounded-full hover:bg-red-700" onClick={e => {
                        if (confirmDeletion) {
                            setTasks([]);
                            return;
                        } 
                        setConfirmDeletion(true);
                    }}>
                        {confirmDeletion ? 'Are you sure?' : 'Delete All'}
                    </button>
                </div>
                <form
                    className="flex gap-2 flex-wrap justify-center"
                    onSubmit={addTask}>
                    <input
                        type="text"
                        value={taskInp}
                        onChange={(e) => {
                            setTaskInp(e.target.value);
                        }}
                        placeholder="Task Name.."
                        className="border text-sm rounded-lg grow p-2.5 focus:outline-blue-400 outline-offset-4"
                        size={1}
                    />
                    <Button color="teal" icon="plus" type="submit" />
                    {/* bg-teal-400 shadow-teal-500/20 hover:shadow-teal-500/40 */}
                </form>

                <ul className="flex flex-col gap-4">
                    {tasks.map((task) => (
                        <Task
                            task={task.name}
                            key={task.id}
                            id={task.id}
                            updateCheckedBox={updateCheckedBox}
                            checked={task.checked}
                            removeTask={removeTask}
                            editTask={editTask}
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default App;
