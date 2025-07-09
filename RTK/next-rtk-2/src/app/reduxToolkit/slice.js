const { createSlice, nanoid } = require("@reduxjs/toolkit");
const { default: AddEmployees } = require("../components/AddEmployees");

const initialState = {
  employees: [],
};
const Slice = createSlice({
  name: "addEmployeeSlice",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      //   console.log(action);

      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employees.push(data);
    },
  },
});

export const { addEmployee } = Slice.actions;
export default Slice.reducer;
