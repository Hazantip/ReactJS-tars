/**
 *
 * Created by Khazan on 21.05.2016.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Example from '../example/example'

var myStyles = {
	color: '#4477aa',
	padding: '15px'
};

const ExampleThree = React.createClass({
	render: function () {
		return <div className="wrapper helloExample3" style={myStyles}>
			<div>Hi {this.props.name} from example 3</div>
			<Example name="Example1 inside Example3"/>
		</div>
	}
});

// я могу отрендерить как тут так и в main.js. главное импортировать этот модуль
if (document.getElementById('exampleBuild')) {

	ReactDOM.render(
		<div>
			<ExampleThree name="ExampleThree"/>
		</div>,
		document.getElementById('container2')
	);

}

console.log( 'example3', $('.helloExample').html(), $('.helloExample2').html() );

export default ExampleThree;
