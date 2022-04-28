import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you', name: 'Vasa', likesCount: '30' },
        { id: 2, message: 'Im fine, sanks', name: 'Lena', likesCount: '52' },
        { id: 3, message: 'Hi', name: 'Slava', likesCount: '14' },
    ],
}

it('length array Posts should will incremented', () => {
    //1. data for test
    let action = addPostActionCreator('testing message')

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(4)
})

it('posts array element number 3 should be "testing message" ', () => {
    //1. data for test
    let action = addPostActionCreator('testing message')

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts[3].message).toBe('testing message')
})

it('after deleting length message array should be 2', () => {
    //1. data for test
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(2)
})

it('after deleting element  length array  should`t be decrement if id is incorrect', () => {
    //1. data for test
    let action = deletePost(1000)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(3)
})


