import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "../Actions/profileActions";

const initialState = {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    token: null, // Ajout du token ici  
};

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload }; // Mettez à jour l'utilisateur avec les nouvelles informations  
        },
        setToken: (state, action) => {
            state.token = action.payload; // Met à jour le token  
        },
        setUsername: (state, action) => {
            state.userName = action.payload.userName; // Correction du nom, devrait être userName  
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state) => initialState);
        builder.addCase(getProfile.fulfilled, (state, action) => {
            return { ...state, ...action.payload }; // Mise à jour de l'état utilisateur avec les infos récupérées  
        });
        builder.addCase(getProfile.rejected, (state) => {
            console.error("Erreur lors de la récupération du profil de l'utilisateur.");
        });
        builder.addCase(updateProfile.pending, (state) => state); // Vous pouvez choisir de ne pas mettre à jour l'état pendant le chargement  
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            return { ...state, ...action.payload }; // Mettez à jour avec les données de l'utilisateur mises à jour  
        });
        builder.addCase(updateProfile.rejected, (state) => {
            console.error("Erreur lors de la modification du profil de l'utilisateur.");
        });
    },
});

export const { setUser, setToken, setUsername } = user.actions;
export default user.reducer;