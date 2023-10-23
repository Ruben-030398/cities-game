import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CITIES } from "../constants";
import { restart } from "./game";

const cities = createSlice({
  name: 'cities',
  initialState: { collection: CITIES },
  reducers: {
   removeCity: (state, action: PayloadAction<string>) => {
    state.collection = state.collection.filter(city => city.toLocaleLowerCase() !== action.payload.toLocaleLowerCase())
   }
  },
  extraReducers: {
    [restart.type]: (state) => {
      state.collection = CITIES;
    }
  }
});

export const { actions: { removeCity }, reducer: citiesReducer } =  cities;