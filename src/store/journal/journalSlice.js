import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  saveMessage: "",
  notes: [],
  active: null,
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
      state.active = payload;
    },
    setNotes: (state, {payload}) => {
      state.notes = payload;
    },
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNoteById: () => {},
  },
});

export const {
    setSavigNewNote,
  addEmptyNotes,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
