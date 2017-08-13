import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../reducers/todoReducer';
import rootSaga from '../reducers/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware     = [sagaMiddleware];

export default function configureStore (railsProps) {
    const store = compose( 
        applyMiddleware(...middleware)
    )(createStore)(todoReducer, railsProps);
    
    // sagaMiddleware.run(rootSaga);

    return store;
};



// export default configureStore;
