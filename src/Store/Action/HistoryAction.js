export const HISTORY_USER_FETCH = 'HISTORY_USER_FETCH';
export const HISTORY_USER_SUCCES = 'HISTORY_USER_SUCCES';
export const HISTORY_USER_FAIL = 'HISTORY_USER_FAIL';

export const userHistoryAction = {
    fetch: (payload) => ({
      type: HISTORY_USER_FETCH,
      payload
    }),
    success: (payload) => (
      {
        type: HISTORY_USER_SUCCES,
        payload
      }),
    failure: (error) => ({
      type: HISTORY_USER_FAIL,
      payload:{
        error
      }
    }),
}
