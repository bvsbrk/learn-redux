import React from 'react';
import {connect} from "react-redux";
import {buyCake} from "../redux/cake/cakeAction";

const CakeContainer = (props) => (<div>
    <h2>Number of cakes: {props.cakes}</h2>
    <button onClick={props.buy}>Buy cake</button>
</div>);

const mapStateToProps = state => {
    // Now cakes will be a part of props
    return {cakes: state.numCakes}
};

const mapDispatchToProps = dispatch => {
    // Now buy will be a part of props
    return {
        buy: () => {
            dispatch(buyCake());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);