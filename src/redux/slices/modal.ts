import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type ModalType = null | 'get-recruted' | 'collaborate' | 'events'

interface ModalState {
  activeModal: ModalType
  data: any
  onModalClose?: (() => void) | null
}

const initialState: ModalState = {
  activeModal: null,
  data: null,
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{
        type: ModalType
        onModalClose?: () => void
        data?: any
      }>,
    ) {
      state.activeModal = action.payload.type
      state.onModalClose = action.payload.onModalClose
      state.data = action.payload.data
    },
    closeModal(state) {
      state.activeModal = null
      if (state.onModalClose) {
        state.onModalClose()
        state.onModalClose = null
      }
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
