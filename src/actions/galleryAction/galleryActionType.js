
import { createActionTypeMap } from '../../utils'
import defaultActionTypes from '../defaultActionTypes'

// creatring specefic names for Gallery actions
export default createActionTypeMap('CATEGORY', [
  ...defaultActionTypes
])
