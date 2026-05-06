import { useEffect, useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

    useEffect(()=>{
    const savedTodo = localStorage.getItem("todos");

    if(savedTodo){
      setTodos(JSON.parse(savedTodo))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  function addTodo() {

    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function deleteTodo(id) {
    const deletedTodo = todos.find((todo) => todo.id === id);
    const updatedTodo = todos.filter((todo) => todo.id !== id);

    setHistory([...history, deletedTodo]);
    setTodos(updatedTodo);
  }

  function restoreTodo() {
    if (history.length === 0) return;

    const lastDeleted = history[history.length - 1];

    setTodos([...todos, lastDeleted]);
    setHistory(history.slice(0, history.length - 1));
  }

  return (
    <div style={styles.app}>
      <div style={styles.card}>
        <h2 style={styles.heading}>To Do</h2>

        <div style={styles.inputWrap}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            style={styles.input}
          />
          <button onClick={addTodo} style={styles.addBtn}>
            Add
          </button>
        </div>

        <button onClick={restoreTodo} style={styles.undoBtn}>
          Undo Last Delete
        </button>

        <div style={styles.list}>
          {todos.map((todo) => (
            <div key={todo.id} style={styles.todoItem}>
              <span style={styles.todoText}>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#222",
  },

  inputWrap: {
    display: "flex",
    gap: "10px",
    marginBottom: "14px",
  },

  input: {
    flex: 1,
    padding: "12px",
    border: "1px solid #dcdfe6",
    borderRadius: "10px",
    outline: "none",
    fontSize: "14px",
  },

  addBtn: {
    padding: "12px 16px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  undoBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#f59e0b",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
    border: "1px solid #eef1f5",
  },

  todoText: {
    color: "#333",
    fontSize: "15px",
  },

  deleteBtn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ef4444",
    color: "#fff",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
  },
};