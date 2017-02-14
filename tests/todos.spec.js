import $ from "jquery";
import sinon from "sinon";
import todos from "../js/todos";

describe("get method", () => {
    let testService = new todos();
    
    afterEach(() => $.get.restore() );

    it("gets todo with id 1", () => {
        sinon.stub($, "get");

        testService.get(1);

        expect($.get.calledWithMatch("/api/todos/1")).toBeTruthy();
    });

    it("gets todo with id 2", () => {
        sinon.stub($, "get");

        testService.get(2);

        expect($.get.calledWithMatch("/api/todos/2")).toBeTruthy();
    });

    it("calls provided callback", () => {
        let callback = sinon.spy();
        sinon.stub($, "get");

        testService.get(1, callback);

        setTimeout(() => expect(callback.called).toBeTruthy(), 0);
        expect(callback.called).toBeFalsy();      
    });
});

describe("post method", () => {
    let testService = new todos();

    afterEach(() => $.post.restore() );

    it("posts todo with supplied object", () => {
        let newTodo = {};
        
        sinon.stub($, "post");

        testService.post(newTodo);

        expect($.post.calledWithMatch("/api/todos", newTodo)).toBeTruthy();
    });
});

describe("put method", () => {
    let testService = new todos();

    afterEach(() => $.ajax.restore() );

    it("updates altered todo with id 1", () => {
        let todo = {
            id: 1
        }

        sinon.stub($, "ajax");

        testService.put(todo);

        expect($.ajax.calledWithMatch({ 
            url: "/api/todos/1", 
            method: "PUT", 
            data: "{\"id\":1}"
        })).toBeTruthy();
    });

    it("updates altered todo with id 2", () => {
        let todo = {
            id: 2
        }

        sinon.stub($, "ajax");

        testService.put(todo);

        expect($.ajax.calledWithMatch({ 
            url: "/api/todos/2", 
            method: "PUT", 
            data: "{\"id\":2}"
        })).toBeTruthy();
    });

    it("updates altered todo with different data", () => {
        let todo = {
            id: 1,
            name: "todo"
        }

        sinon.stub($, "ajax");

        testService.put(todo);

        expect($.ajax.calledWithMatch({
            url: "/api/todos/1",
            method: "PUT",
            data: "{\"id\":1,\"name\":\"todo\"}"
        })).toBeTruthy();
    });
});