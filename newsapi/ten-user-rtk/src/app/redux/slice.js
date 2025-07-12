const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  newsAPIData: [],
  users: [],
};
export const fetchApiNews = createAsyncThunk("fetchApiNews", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});
const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      //   console.log(action);

      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiNews.fulfilled, (state, action) => {
      // console.log("reducer ok", action);

      (state.isloading = false), (state.newsAPIData = action.payload);
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
