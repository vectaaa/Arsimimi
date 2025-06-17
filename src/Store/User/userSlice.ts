import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from './types';
const initiateState: UserState = {
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
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        
    }
}) 