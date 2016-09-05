"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { Provider } from "react-redux";
import Notes from "./container/app.jsx";
import rootReducer from "./reducer/reducer.jsx";

var loggerMiddleware = createLogger();

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

var store = createStoreWithMiddleware(rootReducer);

var unsubscribe = store.subscribe( () => console.log(store.getState()) );

var rootElement = document.getElementById("app");
ReactDOM.render(
	<Provider store = { store }>
		<Notes/>
	</Provider>,
	rootElement
);
