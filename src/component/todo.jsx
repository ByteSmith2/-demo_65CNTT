import React from "react";

export default function Todo ({todo}) {
    return (
        <div>
            <div className="d-flex justify-content-between w-100 align-items">
                <span>{todo.created_at}</span>
                <div className="d-flex align-items-center gap-2">
                <button type="button" class="btn btn-outline-success">hoan thanh</button>
                <button type="button" class="btn btn-outline-success">xoa</button>
                </div>
            </div>
            <h3>{todo.content}</h3>
        </div>
    );
}