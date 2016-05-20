'use strict';

/**
 * How to React with Tars:
 * 1. npm install --save react react-dom babel-preset-react babel-loader babel-core
 * 2. open .babelrc  -->  "presets": ["es2015", "react"]
 * {@link https://facebook.github.io/react/docs/package-management.html}
 */

/*
 This file can be used as entry point for webpack!
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Example from 'modules/example/example';
import ExampleTwo from 'modules/example2/example2';

// JSX
var Main = React.createClass({
	render: function () {

		return <div className="hello">Hi {this.props.name}</div>;
	}
});

ReactDOM.render(
	<div>
		<Main name="Hazantip"/>
		<Example name="Hazantip"/>
		<ExampleTwo name="Hazantip"/>
	</div>,
	document.getElementById('container1')
);
