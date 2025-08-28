// @ts-ignore
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
} from "react";

/** ====== Types ====== */
type Todo = { id: string; name: string; completed: boolean };

type Action =
    | { type: "hydrate"; todos: Todo[] }
    | { type: "add"; name: string }
    | { type: "toggle"; id: string }
    | { type: "edit"; id: string; name: string }
    | { type: "remove"; id: string };

/** ====== LocalStorage utils (inline) ====== */
const STORE_KEY = "todos_v1";
const loadTodos = (): Todo[] => {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        return raw ? (JSON.parse(raw) as Todo[]) : [];
    } catch {
        return [];
    }
};
const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(todos));
};

/** ====== Reducer & Context (inline) ====== */
function reducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "hydrate":
            return action.todos;
        case "add":
            return [
                ...state,
                { id: crypto.randomUUID(), name: action.name.trim(), completed: false },
            ];
        case "toggle":
            return state.map((t) =>
                t.id === action.id ? { ...t, completed: !t.completed } : t
            );
        case "edit":
            return state.map((t) =>
                t.id === action.id ? { ...t, name: action.name.trim() } : t
            );
        case "remove":
            return state.filter((t) => t.id !== action.id);
        default:
            return state;
    }
}

type TodoCtx = {
    todos: Todo[];
    dispatch: React.Dispatch<Action>;
    completedCount: number;
};
const Ctx = createContext<TodoCtx | null>(null);

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        dispatch({ type: "hydrate", todos: loadTodos() });
    }, []);

    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    const completedCount = useMemo(
        () => todos.reduce((acc, t) => acc + (t.completed ? 1 : 0), 0),
        [todos]
    );

    const value = useMemo(
        () => ({ todos, dispatch, completedCount }),
        [todos, completedCount]
    );

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

function useTodos() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useTodos must be used inside Provider");
    return ctx;
}

const TodoInput: React.FC<{
    editing?: { id: string; name: string } | null;
    onFinishEdit?: () => void;
}> = ({ editing = null, onFinishEdit }) => {
    const { dispatch } = useTodos();
    const [value, setValue] = useState(editing?.name ?? "");
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [editing?.id]);

    useEffect(() => {
        setValue(editing?.name ?? "");
        setError("");
    }, [editing?.id, editing?.name]);

    const handleAdd = useCallback(() => {
        const name = value.trim();
        if (!name) {
            setError("Vui lòng nhập tên công việc!");
            return;
        }
        if (editing) {
            dispatch({ type: "edit", id: editing.id, name });
            onFinishEdit?.();
        } else {
            dispatch({ type: "add", name });
        }
        setValue("");
        setError("");
        inputRef.current?.focus();
    }, [dispatch, editing, onFinishEdit, value]);

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") handleAdd();
        },
        [handleAdd]
    );

    return (
        <>
            <div className="d-flex mb-1">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control me-2"
                    placeholder="Nhập công việc..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={onKeyDown}
                />
                <button className="btn btn-primary" onClick={handleAdd}>
                    {editing ? "Lưu" : "Thêm"}
                </button>
            </div>
            {error && (
                <p className="text-danger error-text mb-3 text-sm fs-6">{error}</p>
            )}
        </>
    );
};

const TodoItem: React.FC<{
    item: Todo;
    onEditClick: (t: Todo) => void;
}> = ({ item, onEditClick }) => {
    const { dispatch } = useTodos();

    const toggle = useCallback(() => {
        dispatch({ type: "toggle", id: item.id });
    }, [dispatch, item.id]);

    const remove = useCallback(() => {
        dispatch({ type: "remove", id: item.id });
    }, [dispatch, item.id]);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <label className="form-check d-flex align-items-center m-0">
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={item.completed}
                    onChange={toggle}
                />
                {item.completed ? (
                    <s className="task-name">{item.name}</s>
                ) : (
                    <span className="task-name">{item.name}</span>
                )}
            </label>
            <div>
                <i
                    className="fas fa-edit text-primary me-3"
                    role="button"
                    onClick={() => onEditClick(item)}
                    title="Sửa"
                ></i>
                <i
                    className="fas fa-trash text-danger"
                    role="button"
                    onClick={remove}
                    title="Xoá"
                ></i>
            </div>
        </li>
    );
};

const TodoList: React.FC = () => {
    const { todos, completedCount } = useTodos();
    const [editing, setEditing] = useState<{ id: string; name: string } | null>(
        null
    );

    const onEditClick = useCallback((t: Todo) => {
        setEditing({ id: t.id, name: t.name });
    }, []);

    const finishEdit = useCallback(() => setEditing(null), []);

    return (
        <div className="container todo-container">
            {/* inline style cho đúng UI */}
            <style>{`
        .todo-container {
          max-width: 600px;
          margin: 50px auto;
          background: #fff;
          border-radius: 15px;
          padding: 20px;
          border: 1px solid #dadada;
        }
      `}</style>

            <h3 className="text-center mb-3 fw-bold">Danh sách công việc</h3>

            <TodoInput editing={editing} onFinishEdit={finishEdit} />

            <ul className="list-group my-3">
                {todos.map((t) => (
                    <TodoItem key={t.id} item={t} onEditClick={onEditClick} />
                ))}
            </ul>
            {todos.length === 0 ? (
                <div className="text-center text-warning fw-medium">
                    Chưa có công việc nào
                </div>
            ) : completedCount === 0 ? (
                <div className="text-center text-danger fw-medium">
                    Chưa có công việc nào hoàn thành
                </div>
            ) : completedCount === todos.length ? (
                <div className="text-center text-success fw-medium">
                    Tất cả công việc đã hoàn thành
                </div>
            ) : (
                <div className="text-center text-success fw-medium">
                    {completedCount} / {todos.length} công việc đã hoàn thành
                </div>
            )}
        </div>
    );
};
const ToDoList: React.FC = () => {
    return (
        <Provider>
            <TodoList />
        </Provider>
    );
};

export default TodoList;