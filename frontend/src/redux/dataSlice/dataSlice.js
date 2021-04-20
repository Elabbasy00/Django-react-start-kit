import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk(
	'data/fetchData',
	async (_, { rejectWithValue }) => {
		// const source = axios.CancelToken.source();
		// signal.addEventListener("abort", () => {
		//   source.cancel();
		//   console.log("cancled");
		// });
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
	// {
	//   condition: (_, { getState, extra }) => {
	//     const { data } = getState();
	//     if (data.status === "loading" || data.status === "succeeded") {
	//       return false;
	//     }
	//   },
	//   dispatchConditionRejection: true,
	// }
)

const dataAdapter = createEntityAdapter()

const initialState = dataAdapter.getInitialState({
	status: 'idle',
	loading: false,
	error: null,
})

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchData.pending]: (state) => {
			state.status = 'loading'
		},
		[fetchData.fulfilled]: (state, action) => {
			state.status = 'succeeded'
			dataAdapter.upsertMany(state, action.payload)
		},
		[fetchData.rejected]: (state, action) => {
			state.status = 'failed'
			state.error = action.payload
		},
	},
})

export const {
	selectAll: selectallData,
	selectByIds: selectDataByIds,
	selectIds: selectByIds,
} = dataAdapter.getSelectors((state) => state.data)

export default dataSlice.reducer
