import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, LoadingStatus } from '../../types'

export interface UserState {
  data: IUser | undefined
  status: LoadingStatus
}

const initialState: UserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
}

type InitialStateType = typeof initialState

export enum UserActionsType {
  FETCH_SIGN_IN = 'fetchSignIn',
  AUTH_ME = 'authMe',
  SET_USER_DATA = 'setUserData',
  SET_LOADING_STATE = 'setLoadingState',
  LOG_OUT = 'logOut',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [UserActionsType.SET_USER_DATA](state: InitialStateType, action: PayloadAction<any>) {
      let subset
      if (action.payload) {
        const { name, email } = action.payload
        subset = { name, email }
      }
      return { ...state, data: subset }
    },
    [UserActionsType.SET_LOADING_STATE](state: InitialStateType, action: PayloadAction<any>) {
      return { ...state, status: action.payload }
    },
    [UserActionsType.LOG_OUT](state: InitialStateType, action: PayloadAction<any>) {
      return { ...state, data: undefined, status: LoadingStatus.LOADING }
    },
  },
})

export const { setUserData, setLoadingState, logOut } = userSlice.actions

export default userSlice.reducer

// ASYNC ACTION / redux-thunk
// const fetchUsers = () => async (dispatch) => {
//   dispatch(usersLoading())
//   const response = await usersAPI.fetchAll()
//   dispatch(usersReceived(response.data))
// }

//git test
