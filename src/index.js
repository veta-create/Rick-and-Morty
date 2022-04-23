import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import {rerender} from './rerender'

rerender(store)

reportWebVitals()
