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
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;

      /*TODO: Mensaje de Error */
    },
    updateNote: (state, {payload}) => {
      state.isSaving = false;

      state.notes = state.notes.map((note) =>{
        
        if(note.id === payload.id){
          return payload
        }
        return note;
      })
    },
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
