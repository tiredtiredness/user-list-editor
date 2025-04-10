import { User } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
  users: User[];
  isUpdating: boolean;
  isLoading: boolean;
}

const initialState: UsersState = {
  users: [],
  isUpdating: false,
  isLoading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    appendUsers(state, action: PayloadAction<User[]>) {
      state.users.push(...action.payload);
      console.log(state.users.length);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        user => user.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { setUsers, updateUser, setIsLoading, appendUsers } =
  usersSlice.actions;
export default usersSlice.reducer;
