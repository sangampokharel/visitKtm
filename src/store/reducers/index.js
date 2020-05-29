import { combineReducers } from 'redux';
import MallsReducer from './MallsReducer';
import AttractionReducer from './AttractionReducer';
import FoodReducer from './FoodReducer';
import HotelReducer from './HotelReducer'
export default combineReducers({
    malls: MallsReducer,
    attractions: AttractionReducer,
    foods: FoodReducer,
    hotels: HotelReducer
})