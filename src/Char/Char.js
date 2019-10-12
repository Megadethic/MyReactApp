import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Char.css';

class Char extends Component {
    removeCounterHandler = () => {
        this.props.onIncrementCounter();
        this.props.removeHandler();
    };

    render() {
        return <div className={classes.Char}
                    onClick={this.removeCounterHandler}
                    title={this.props.counterTitle}>
            {this.props.charElement}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        counterTitle: "Total removed chars = " + state.totalRemovedCharsCounter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT', value: 'hello'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Char);
