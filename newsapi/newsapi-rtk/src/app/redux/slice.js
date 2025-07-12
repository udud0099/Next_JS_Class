const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  newsAPIData: [],
  users: [],
};
export const fetchApiNews = createAsyncThunk("fetchApiNews", async () => {
  const result = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=a1a1b5d26459422db879675f36b9b253"
  );
  return result.json();
});
const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);

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
      (state.isloading = false), (state.newsAPIData = action.payload.articles);
      console.log("reducer ok", action.payload.articles);
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
