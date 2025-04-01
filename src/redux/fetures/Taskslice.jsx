import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch tasks
export const fetchTodo = createAsyncThunk('tasks/fetchTodo', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const data = await response.json();
    return data.map((task) => ({
      id: task.id,
      title: task.title,
      body: task.body,
    }));
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Redux slice
export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
        state.tasks = state.tasks.map((task,i)=>(
        task.id === action.payload.id ? action.payload : task
      ))
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { addTask, removeTask, updateTask , editTask} = taskSlice.actions;
export default taskSlice.reducer;
