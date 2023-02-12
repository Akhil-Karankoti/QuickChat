import { createSlice } from '@reduxjs/toolkit';


const messagesInitialState = {
    2: [
        {
            text: "Hello!",
            sentBy: 2
        },
        {
            text: "Hey! How are you doing?",
            sentBy: 1
        },
        {
            text: "I'm doing good. How about you?",
            sentBy: 2
        },
        {
            text: "Listen, I heard that Riktam Technologies is hiring.",
            sentBy: 2
        },
        {
            text: "Give it a try.",
            sentBy: 2
        },
        {
            text: "Thanks buddy. Will try.",
            sentBy: 1
        }
    ],
    3: [
        {
            text: "Ready for movie night?",
            sentBy: 1
        },
        {
            text: "I think im not gona make this weekend.",
            sentBy: 3
        },
        {
            text: "why?",
            sentBy: 1
        },
        {
            text: "lot of work pending.",
            sentBy: 3
        }
    ]
};

const messages = createSlice({
    name: 'messages',
    initialState: messagesInitialState,
    reducers: {
        newMessage: (state, action) => {
            if (state[action.payload.id]) {
                state[action.payload.id].push({
                    text: action.payload.message || "",
                    sentBy: action.payload.sentBy || 1,
                    time: action.payload.time,
                    imageUrl: action.payload.imageUrl
                })
            }
            else {
                state[action.payload.id] = [{
                    text: action.payload.message,
                    sentBy: action.payload.sentBy || 1,
                    time: action.payload.time,
                    imageUrl: action.payload.imageUrl
                }]
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { newMessage } = messages.actions

export default messages.reducer