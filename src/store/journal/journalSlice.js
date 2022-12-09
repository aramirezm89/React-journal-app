import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  saveMessage: "",
  notes: [],
  activeNote: null,
  /* active:{
    id:'123',
    title:'',
    body:'',
    date:123413,
    imageUrls:[]
} */
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    setSavigNewNote: (state, { payload }) => {
      state.isSaving = true;
    },
    addEmptyNotes: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload;
      state.saveMessage = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.saveMessage = "";

      /*TODO: Mensaje de Error */
    },
    updateNote: (state, { payload }) => {
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return payload;
        }
        return note;
      });

      state.isSaving = false;
      state.saveMessage = `${payload.title}, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, { payload }) => {
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...payload];
      state.isSaving = false;
    },

    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.saveMessage = "";
      state.notes = [];
      state.activeNote = null;
    },
    deleteNoteById: (state,{payload}) => {
      state.activeNote = null;
      state.notes = state.notes.filter(note => note.id !== payload)
    },
  },
});

export const {
  setSavigNewNote,
  addEmptyNotes,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  clearNotesLogout,
  deleteNoteById,
} = journalSlice.actions;
