import { useEffect } from "react";
import { getTasks } from "../../features/products/api/api";

export default function TasksPage() {

    useEffect(() => {
        async function loadTasks() {
            const token = localStorage.getItem("token");
            
            const data = await getTasks(token!);

            console.log(data);
            console.log(localStorage.getItem("token"));
        }

        loadTasks();
    }, []);

    return (
        <div>
            <h1>Tasks Page</h1>
        </div>
    );
}