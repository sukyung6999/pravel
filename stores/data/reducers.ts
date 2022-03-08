import {Action, handleActions} from "redux-actions";
import {DataActionPayload, DataActionType} from "./actions";
import {DataSagaState, GoalData, TaskData, UserData} from "./types";

export type State = {
  [DataActionType.GET_LOGGED_IN_USER_DATA]: Record<string, DataSagaState & {data: UserData | undefined}>,
  [DataActionType.GET_TASKS_BY_DAYS]: Record<string, DataSagaState & {data: TaskData[] | undefined}>,
  [DataActionType.CREATE_TASK]: Record<string, DataSagaState & {data: TaskData | undefined}>,
  [DataActionType.UPDATE_TASK]: Record<string, DataSagaState & {data: TaskData | undefined}>,
  [DataActionType.DELETE_TASK]: Record<string, DataSagaState & {data: undefined}>,
  [DataActionType.GET_GOALS]: Record<string, DataSagaState & {data: GoalData[] | undefined}>,
  [DataActionType.CREATE_GOAL]: Record<string, DataSagaState & {data: GoalData | undefined}>,
  [DataActionType.UPDATE_GOAL]: Record<string, DataSagaState & {data: GoalData | undefined}>,
  [DataActionType.DELETE_GOAL]: Record<string, DataSagaState & {data: undefined}>,
}

const initialState: State = {
  [DataActionType.GET_LOGGED_IN_USER_DATA]: {},
  [DataActionType.GET_TASKS_BY_DAYS]: {},
  [DataActionType.CREATE_TASK]: {},
  [DataActionType.UPDATE_TASK]: {},
  [DataActionType.DELETE_TASK]: {},
  [DataActionType.GET_GOALS]: {},
  [DataActionType.CREATE_GOAL]: {},
  [DataActionType.UPDATE_GOAL]: {},
  [DataActionType.DELETE_GOAL]: {},
};

export const dataReducer = handleActions<State, any>(
  {
    [DataActionType.SET_DATA_STATUS]: (previousState, action: Action<DataActionPayload[DataActionType.SET_DATA_STATUS]>) => {
      const key =  action.payload.key
      const dataDataActionType = action.payload.type

      return ({
        ...previousState,
        [dataDataActionType]: {
          ...previousState[dataDataActionType],
          [key]: {
            ...previousState[dataDataActionType][key],
            status: action.payload.status
          }
        }
      })
    },
    [DataActionType.SET_DATA_DATA]: (previousState, action: Action<DataActionPayload[DataActionType.SET_DATA_DATA]>) => {
      const key =  action.payload.key
      const dataDataActionType = action.payload.type

      return ({
        ...previousState,
        [dataDataActionType]: {
          ...previousState[dataDataActionType],
          [key]: {
            ...previousState[dataDataActionType][key],
            data: action.payload.data
          }
        }
      })
    },
  },
  initialState,
);