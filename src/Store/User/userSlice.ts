import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from './types';
const initialState: UserState = {
  name: '',
  ageRange: '',
  guardianEmail: '',
  agreeToTerms: false,
  nameOfSchool: '',
  educationLevel: '',
  grade: '',
  examTypes: [''],
  goalDescription: '',
  learningGoals: [''],
  learningTime: '',
  canNotify: false,
  email: '',
  devices: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),
    resetUserSlice: () => initialState,
  },
});

export const {setUser, resetUserSlice} = userSlice.actions;
export default userSlice.reducer;
