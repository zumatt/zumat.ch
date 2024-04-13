import React from "react";
import ReactDOM from "react-dom";

const headRoot = document.head;

export default class Head extends React.Component {
    render() {
        return ReactDOM.createPortal(this.props.children, headRoot);
    }
}
