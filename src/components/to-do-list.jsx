import { useState } from "react";
import TaskItem from "./taskitem";
function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const addTask = () => {
        if (text.trim() !== "") {
            setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]);
            setText("");
        }
    };

    const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const clearAll = () => {
        setTasks([]);
        setText("");
    };

    const notDoneTasks = tasks.filter((t) => !t.done);
    const doneTasks = tasks.filter((t) => t.done);


    return(
        <div className="bg-olive-300 rounded-xl shadow p-4 sm:p-6">
            <h1 className="sm:text-2xl text-xl font-bold text-center">To-Do List</h1>
            <p className="text-sm italic text-center mb-4">A React JS and Tailwind CSS application</p>
            <div className="flex gap-2 mb-4">
                <input className="flex-1 min-w-0 border rounded px-3 py-2" value={text} onChange={(e) => setText(e.target.value)} 
                onKeyDown={(e) => e.key === "Enter" && addTask()} placeholder="Add a task..."/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>Add</button>
            </div>
            
            <div className="border-2 border-black rounded-lg p-3 sm:p-4 mb-4">
                <h2 className="font-bold text-lg mb-2">Not Done ({notDoneTasks.length})</h2>
                {notDoneTasks.length === 0 ? ( 
                    <p className="text-gray-500 italic">No tasks to do.</p>) : (
                    <ul className="space-y-2 max-h-44 overflow-y-auto pr-1"> {notDoneTasks.map((task) => (
                        <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                      ))}
                    </ul>
                  )}
            </div>

            <div className="border-2 border-black rounded-lg p-3 sm:p-4">
                <h2 className="font-bold text-lg mb-2">Done ({doneTasks.length})</h2>
                {doneTasks.length === 0 ? (
                    <p className="text-gray-500 italic">No completed tasks.</p> ) : (
                        <ul className="space-y-2 max-h-44 overflow-y-auto pr-1"> {doneTasks.map((task) => (
                        <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                            ))}
                        </ul>
                    )}
            </div>
            {tasks.length > 0 && (
                <div className="flex justify-center mt-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={clearAll}>Clear All</button>
                </div>
                )}
        </div>
    );
}

export default ToDoList