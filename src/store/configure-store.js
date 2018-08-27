import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer, initialState } from './root-reducer';
import { rootSaga } from './root-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true, // config.log.reduxLogger.collapsed,
      duration: true, // config.log.reduxLogger.duration,
    });
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
