import { User } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
  selectedUser: User | null;
}

const initialState: EditorState = {
  selectedUser: null,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setSelectUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUser: state => {
      state.selectedUser = null;
    },
  },
});

export const { setSelectUser, clearSelectedUser } = editorSlice.actions;
export default editorSlice.reducer;
