import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Définir une fonction pour interagir avec l'API  
export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await axios.get('http://localhost:3000/api/endpoint'); // Remplacez par l'URL de votre API  
    return response.data;
});

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default apiSlice.reducer;