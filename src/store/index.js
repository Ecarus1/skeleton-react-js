import { configureStore } from "@reduxjs/toolkit";
import Services from "../services";
import config from "../config";

const services = new Services(config);

const store = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      thunk: {
        extraArgument: services 
      }
    }
  )
});

export default store;