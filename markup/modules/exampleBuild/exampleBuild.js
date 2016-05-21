/**
 * This build contain thee example modules
 *
 * Created by Khazan on 21.05.2016.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Example from 'modules/example/example';
import ExampleTwo from 'modules/example2/example2';
import ExampleThree from 'modules/example3/example3';

//var ExampleThree = require('modules/example3/example3'); // don't know how to use

// JSX
var ExampleBuild = React.createClass({
	render: function () {
		return <div className="hello">Hi {this.props.name}.</div>;
	}
});

if (document.getElementById('exampleBuild')) {

	ReactDOM.render(
		<div>
			<ExampleBuild name="ExampleBuild"/>
			<Example name="Example"/>
			<ExampleTwo name="ExampleTwo"/>
			<ExampleThree name="ExampleThree"/>
		</div>,
		document.getElementById('container1')
	);

}

// ############### ATTENTION ###############
// я ничего не экспортирую!!!
// при этом если я под любым именем в main.js
// сделаю импорт этого файла, то всё отрисуется
