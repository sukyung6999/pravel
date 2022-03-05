import {produce} from "immer";
import {Action, handleActions} from "redux-actions";
import {QueryActionType} from "./actions";
import {ActionPayload, ActionType} from "./actions";
import {QueryState, TaskData} from "./types";
import {CreateDocumentData, DeleteDocumentData, GetDocumentData} from "utils/firebase";
import {putValueInNestedObject} from "utils/others/putValueInNestedObject";



// {
//   [ActionType.CREATE_TASK]: Record<string, 
//     QueryState & {
//       response: CreateDocumentData<TaskData> | undefined
//     }
//   >,
//   [ActionType.DELETE_TASK]: Record<string, 
//     QueryState & {
//       response: DeleteDocumentData | undefined
//     }
//   >,
//   [ActionType.GET_TASK]: Record<string, 
//     QueryState & {
//       response: GetDocumentData<TaskData> | undefined
//     }
//   >,
// }
export type State = Record<string, QueryState>

const initialState: State = {};

export const queryReducer = handleActions<State, any>(
  {
    [ActionType.REPLACE]: (previousState, action: Action<ActionPayload[ActionType.REPLACE]> ) => {
      return produce(previousState, (newState) => {
        if (action.payload === undefined) {
          return;
        } else {
          const path: (string | number)[] = action.payload.path;

          try {
            putValueInNestedObject(newState, path, action.payload.replacement);
          } catch {
            return;
          }
        }
      });
    },
    [ActionType.SET_QUERY_STATUS]: (previousState, action: Action<ActionPayload[ActionType.SET_QUERY_STATUS]>) => {
      return ({
        ...previousState,
        [action.payload.key]: {
          ...previousState[action.payload.key as QueryActionType],
          status: action.payload.status
        }
      })
    },
    [ActionType.SET_QUERY_RESPONSE]: (previousState, action: Action<ActionPayload[ActionType.SET_QUERY_RESPONSE]>) => {
      return ({
        ...previousState,
        [action.payload.key]: {
          ...previousState[action.payload.key as QueryActionType],
          response: action.payload.response
        }
      })
    },
  },
  initialState,
);