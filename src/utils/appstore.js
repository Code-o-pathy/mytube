import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from  "./chatSlice"

const appstore = configureStore({
  reducer: {
    search:searchSlice,
    app: appSlice,
    liveChat:chatSlice,
  }
});
export default appstore;
