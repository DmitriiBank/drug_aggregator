import {
    createAsyncThunk,
    createSlice,
    type PayloadAction
} from "@reduxjs/toolkit";
import type {Drug} from "../../domain/Drug.ts";
import {repository} from "../../data/SearchDrugLocalRepository.ts";


export interface DrugState {
    list: Drug[];
    isLoading: boolean;
    error?: string;
}

const initialState: DrugState = {
    list: [],
    isLoading: false,
};
export const searchByName = createAsyncThunk<Drug[], string>(
    'drag/searchByName',
    async (query, thunkAPI) => {
        try {
            // const response = await fetch(`/api/drugs?search=${encodeURIComponent(query)}`);
            // if (!response.ok) throw new Error('Failed to fetch');
            // const data: Drug[] = await response.json();
            // return data;

            const res = repository.searchByName(query);
            return res;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Unknown error');
        }
    }
);

const drugSlice = createSlice({
    name: 'drug',
    initialState,
    reducers: {
        clearList: (state) => {
            state.list = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchByName.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(searchByName.fulfilled, (state, action: PayloadAction<Drug[]>) => {
                state.list = action.payload;
                state.isLoading = false;
            })
            .addCase(searchByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const {clearList} = drugSlice.actions;
export const drugReducer = drugSlice.reducer;
