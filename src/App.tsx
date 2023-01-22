import reactLogo from "./assets/react.svg";
import "./App.css";
// import { connect } from "react-redux/es/exports";
import { IConter } from "../redux-old-school";
// import { Action, AnyAction } from "redux";
import { useSelector, useDispatch } from "react-redux";

// interface IAppProps {
//   count: number;
//   increment: () => void;
//   incrementAmount: (amount: number) => void;
// }

function App() {
  const count = useSelector((state: IConter) => state.counter.value);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch({ type: "counter/increment" });
  };

  const handleOnClickAmount = () => {
    dispatch({ type: "counter/incrementAmount", payload: 5 });
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <button onClick={handleOnClickAmount}>count with amount {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

// //Vai injetar o estado a minha aplicação. Possibilitando remover a declaração useState do component, pois ele vai capturar isso como propriedade
// const mapStateToProps = (state: IConter) => {
//   return {
//     count: state.counter.value,
//   };
// };

// //Vai injetar as ações para modificação de estado, para minha aplicação
// const mapDispatchToProps = (dispatch: (action: AnyAction) => void) => {
//   return {
//     increment: () => dispatch({ type: "counter/increment" }),
//     incrementAmount: (amount: number) =>
//       dispatch({ type: "counter/incrementAmount", payload: amount }),
//   };
// };

// //PEGA OS PARÂMETROS E INSERE NO COMPONENT. GERANDO UM NOVO COMPONENTE => https://reactjs.org/docs/higher-order-components.html#:~:text=A%20higher%2Dorder%20component%20(HOC,and%20returns%20a%20new%20component.
// export default connect(mapStateToProps, mapDispatchToProps)(App);
