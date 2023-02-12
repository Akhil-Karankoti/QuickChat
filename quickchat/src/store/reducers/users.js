import { createSlice } from '@reduxjs/toolkit';
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image9.jpeg";
import image4 from "../../images/image4.webp";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";
import image8 from "../../images/image8.jpeg";


const usersInitialState = [
    {
        id: 1,
        name: "Bill Bradford",
        profileUrl: image1,
        owner: true,
        isActive: true
    },
    {
        id: 2,
        name: "Henry Boyd",
        profileUrl: image2,
        email: "henryboyd@gmail.com",
        isSelected: false,
        isArchived: false,
        isActive: true
    },
    {
        id: 3,
        name: "Marth Curtis",
        profileUrl: image3,
        email: "marthcurtis@gmail.com",
        isSelected: false,
        isArchived: false,
        isActive: false
    },
    {
        id: 4,
        name: "Philip Tucker",
        profileUrl: image4,
        email: "philiptucker@gmail.com",
        isSelected: false,
        isArchived: false,
        isActive: true
    },
    {
        id: 5,
        name: "Christine Reid",
        profileUrl: image5,
        email: "christinereid@gmail.com",
        isSelected: false,
        isArchived: false,
        isActive: false
    },
    {
        id: 6,
        name: "Jerry Guzzman",
        profileUrl: image6,
        email: "jerryguzzman@gmail.com",
        isSelected: false,
        isArchived: false,
        isActive: true
    },
    {
        id: 7,
        name: "Russel Williams",
        profileUrl: image8,
        email: "russelwilliams@gmail.com",
        isSelected: false,
        isArchived: false,
        isActive: false
    },
    {
        id: 8,
        name: "Dary Mitchel",
        profileUrl: image8,
        email: "darrymitchel@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: true
    },
    {
        id: 9,
        name: "Kane Williamson",
        profileUrl: image8,
        email: "kanewillianson@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    },
    {
        id: 10,
        name: "Ben Stokes",
        profileUrl: image8,
        email: "benstokes@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    },
    {
        id: 11,
        name: "Joe Root",
        profileUrl: image8,
        email: "joeroot@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: true
    },
    {
        id: 12,
        name: "Kevin Peterson",
        profileUrl: image8,
        email: "kevinpeterson@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    },
    {
        id: 13,
        name: "Alastair Cook",
        profileUrl: image8,
        email: "alastaircook@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    },
    {
        id: 14,
        name: "Glenn Philips",
        profileUrl: image8,
        email: "gelnnphilips@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: true
    },
    {
        id: 15,
        name: "Kagiso Rabada",
        profileUrl: image8,
        email: "kagisorabada@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    },
    {
        id: 16,
        name: "Darren Sammuels",
        profileUrl: image8,
        email: "darrensammuels@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: true
    },
    {
        id: 17,
        name: "Sanath Jayasurya",
        profileUrl: image8,
        email: "sanathjayasurya@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    },
    {
        id: 18,
        name: "Sachin Tendulkar",
        profileUrl: image8,
        email: "sachintendulkar@gmail.com",
        isSelected: false,
        isArchived: true,
        isActive: false
    }
]

const users = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    userSelected: (state, action) => {
        state = state.map(user => {
            user.isSelected = user.id === action.payload ? true: false;
            return user
        })
    },
    userChangeIsArchived: (state, action) => {
        for(const user of state) {
            if(user.id === action.payload) {
                user.isArchived = !user.isArchived
                break;
            }
        }
    },
    toggleUserActiveState: (state) => {
        state[0].isActive = !state[0].isActive;
    }
  }
})

// Action creators are generated for each case reducer function
export const { userSelected, userChangeIsArchived, toggleUserActiveState } = users.actions

export default users.reducer