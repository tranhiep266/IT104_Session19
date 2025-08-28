// @ts-ignore
import React, { useReducer, useState } from "react";
interface State {
  loading: boolean;
  success: boolean;
  error: string | null;
}

type Action =
  | { type: "SUBMIT" }
  | { type: "SUCCESS" }
  | { type: "ERROR"; payload: string }
  | { type: "RESET" };

const initialState: State = {
  loading: false,
  success: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SUBMIT":
      return { loading: true, success: false, error: null };
    case "SUCCESS":
      return { loading: false, success: true, error: null };
    case "ERROR":
      return { loading: false, success: false, error: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function Ex8() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username.trim() || !password.trim()) {
      dispatch({ type: "ERROR", payload: "Vui lòng nhập đầy đủ username và password" });
      return;
    }

    dispatch({ type: "SUBMIT" });

    setTimeout(() => {
      if (password === "123456") {
        dispatch({ type: "SUCCESS" });
      } else {
        dispatch({ type: "ERROR", payload: "Đăng nhập thất bại. Sai thông tin." });
      }
    }, 900);
  };

  const reset = () => {
    setUsername("");
    setPassword("");
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ maxWidth: 420, margin: "32px auto", fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: 16 }}> Đăng nhập</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Tên người dùng</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên..."
            disabled={state.loading}
            style={{ padding: 10, borderRadius: 8, border: "1px solid #e5e7eb" }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Mật khẩu</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            disabled={state.loading}
            style={{ padding: 10, borderRadius: 8, border: "1px solid #e5e7eb" }}
          />
        </label>

        <button
          type="submit"
          disabled={state.loading}
          style={{
            padding: "10px 14px",
            border: "none",
            borderRadius: 8,
            background: state.loading ? "#9ca3af" : "#2563eb",
            color: "#fff",
            cursor: state.loading ? "not-allowed" : "pointer",
            fontWeight: 600,
          }}
        >
          {state.loading ? "Đang đăng nhập…" : "Đăng nhập"}
        </button>

        {state.error && (
          <div style={{ color: "#b91c1c", background: "#fee2e2", padding: 10, borderRadius: 8 }}>
            {state.error}
          </div>
        )}

        {state.success && (
          <div style={{ color: "#065f46", background: "#d1fae5", padding: 10, borderRadius: 8 }}>
            🎉 Đăng nhập thành công!
          </div>
        )}

        {(state.success || state.error) && (
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Làm lại
          </button>
        )}
      </form>
    </div>
  );
}