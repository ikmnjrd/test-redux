import React from "react";
import { connect } from "react-redux";
import Count from './Count';
import Count2 from './Count2';
import store from './store/index'

const App: React.VFC<any> = ({count, increase, decrease}) => {
  console.log("count:", count);
  console.log("store", store)
  return (
    <div>
      <h1>Redux Learn</h1>
      {/* <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <p>Count:{count}</p> */}
      <Count/>
      <Count2/>
    </div>
  );
}

// interface IState {
//   count: number
// }

// interface ownProps {
//   count: number
// }

// const mapStateToProps = (state:IState) => {
//   return { count: state.count };
// };

// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     increase: () => dispatch({ type: "INCREASE_COUNT" }),
//     decrease: () => dispatch({ type: "DECREASE_COUNT" }),
//   };
// };

// type Props = ownProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
// type Props = ownProps & ReturnType<typeof mapStateToProps>

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;