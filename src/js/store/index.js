import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const buildStore = function (additionalMiddleware = []) {
  let store = createStore(
    rootReducer,
    storeEnhancers(
      applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware, ...additionalMiddleware)
    )
  );
  initialiseSagaMiddleware.run(apiSaga);

  return store;
};


export default buildStore;
