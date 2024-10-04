import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const appstore = configureStore({
  reducer: {
    search:searchSlice,
    app: appSlice,
  }
});
export default appstore;
