import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';


interface DirectoryState {
    advertisements: string[],
    locations: Location[],
    status: string,
    selectedLocation: Location
}

const initialState: DirectoryState = {
    advertisements: [],
    locations: [],
    status: "",
    selectedLocation: {
        name: "",
        description: "",
        url: "",
        address1: "",
        city: "",
        state: "",
        zip: "",
        banner_img: "",
        logo_img: "",
        hours: ""
    }
}

interface Location {
    name: string,
    description: string,
    url?: string,
    address1: string,
    city: string,
    state: string,
    zip: string,
    banner_img: string,
    logo_img: string,
    hours: string
}


export const getDirectoryData = createAsyncThunk('directory/getData', async (dispatch, getState) => {
    try {
        const { data } = await axios.get("https://testapi.io/api/ndenlinger/roveiq")
        return data.data;
    } catch (error) {
        return error;
    }
})

export const DirectorySlice = createSlice({
    name: "Directory",
    initialState,
    reducers: {
        updateSelectedLocation(state, action: PayloadAction<Location>) {
            state.selectedLocation = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getDirectoryData.pending, (state, action) => {
            state.status = "Pending"
        })

        builder.addCase(getDirectoryData.fulfilled, (state, action) => {
            state.advertisements = getAdvertisementImages(action.payload.schedules)
            state.locations = action.payload.locations
            state.status = "Fulfilled"
        })

        builder.addCase(getDirectoryData.rejected, (state, action) => {
            state.status = "Rejected"
        })

    }
});

const getAdvertisementImages = (arr :any) => {
    let advertisements: string[] = []
    arr.forEach( (schedule :any) => {
        schedule.ads.forEach( (ad :any) => {
            advertisements.push(ad.img_url)
        })
    })
    return advertisements
}


export const {updateSelectedLocation} = DirectorySlice.actions;

export default DirectorySlice.reducer;
