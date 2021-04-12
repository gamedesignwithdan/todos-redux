import React/*, { useState }*/ from "react";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers/index'

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
)


// function App(props: AppProps) {
//     const [counter, setCount] = useState(0);
//     const onIncrement = () => setCount(counter + 1)
//     const onDecrement = () => setCount(counter - 1)

//     return (
//         <div>
//             <button onClick={onIncrement}>Increment</button>
//             <button onClick={onDecrement}>Decrement</button>
//             {counter}
//         </div>
//     )
// }