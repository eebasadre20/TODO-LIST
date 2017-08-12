import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* createNewTodo(action) {
    try {
        console.log( 'Attempting to call API' );
        const response = yield call( axios.post, 'https://jsonplaceholder.typicode.com/posts', { text: action.text });
        yield put( {type: 'ADD_TODO_SUCCESS', response: response.data });
    } catch ( e ) {
        console.log( e );
    }
}

export function* watchCreateTodo() {
    console.log('Redux Saga is running on ADD_TODO.');
    yield takeEvery('ADD_TODO', createNewTodo);
}

export default function* rootSaga() {
    yield [
        watchCreateTodo(),
    ]
}
