import { all } from 'redux-saga/effects';

export function* log () {
    console.log("saga loaded");
}

export function* rootSaga () {
    yield all(
        [
            log()
        ]
    );
}