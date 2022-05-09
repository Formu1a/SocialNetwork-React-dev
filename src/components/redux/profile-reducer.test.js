import profileReducer, {
    addPostActionCreator,
    deletePost,
} from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Hey,why nobody love me ?", likeCounts: 23 },
        { id: 2, message: "Its our new program! Hey!", likeCounts: 4 },
    ],
};

test("new post should be added", () => {
    let action = addPostActionCreator("Test");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test("messgae of new should be `Test`", () => {
    let action = addPostActionCreator("Test");

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("Test");
});

test("after deleting length of messages should be decrement ", () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

test(`after deleting length should't be decrement if id incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
