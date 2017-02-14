import $ from "jquery";

export default class todos {
    get(id) {
        $.get(`/api/todos/${id}`);
    } 

    post(data) {
        $.post("/api/todos", data);
    }

    put(data) {
        $.ajax({ 
            url: `/api/todos/${data.id}`,
            method: "PUT",
            data: JSON.stringify(data)
        });
    }
}