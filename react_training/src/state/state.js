let rerender = () => {
}

const state = {
  profilePage: {
    postsData: [
      { name: 'Anton', message: 'HI, im new', likes: 10, dislikes: 1 },
      { name: 'Jack', message: 'Yo', likes: 120, dislikes: 3 },
      { name: 'John', message: 'HELLO', likes: 13, dislikes: 4 },
      { name: 'kai', message: 'I like programming', likes: 410, dislikes: 2 },
      { name: 'An', message: 'react-redux there is learning', likes: 4130, dislikes: 2 }
    ],
    newPostText: ''
  },
    messagesPage: {
    dialogsData: [
      { id: '1', name: 'Anton' },
      { id: '2', name: 'Andrey' },
      { id: '3', name: 'Anya' },
      { id: '4', name: 'Alena' },
      { id: '5', name: 'Anastasia' },
      { id: '6', name: 'Anastasia' },
      { id: '7', name: 'Anastasia' },
      { id: '8', name: 'Anastasia' }
    ],
    messagesData: [
      { id: '1', message: 'Hello' },
      { id: '2', message: 'Sup Bro' },
      { id: '3', message: 'Hey hey hey' },
      { id: '4', message: 'Hey hey hey' },
      { id: '5', message: 'Hey hey hey' },
      { id: '6', message: 'Hey hey hey' },
      { id: '7', message: 'Hey hey hey' },
      { id: '8', message: 'React is nice' }
    ]
  }
}

export let addPosts = (props) => {
  let newPost = {
    name: 'Anton',
    message: state.profilePage.newPostText,
    likes: 10,
    dislikes: 2
  }
  debugger;
  state.profilePage.postsData.push(newPost);
  updateTextArea(''); // обнуляем textarea после добавления поста
  rerender(state)
}



export let updateTextArea = (newText) => {
  state.profilePage.newPostText = newText;
  rerender(state)
}
export const subscribe = (observer) => {
  rerender = observer;
}

window.state = state;
export default state;