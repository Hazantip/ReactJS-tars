/**
 * Created by Khazan on 20.05.2016.
 */
import React from 'react';
import $ from 'jquery';

const ExampleTwo = React.createClass({
	render: function () {
		return <div className="helloExample2">Hi {this.props.name} from example2 module</div>;
	}
});

// ############### ATTENTION ###############
// Я могу сделать рендер тут без проблем
// но если я хочу отрендерить этот компонент в другом файле
// мне нужно использовать конструкцию export
// ############### ATTENTION ###############

//ReactDOM.render(
//	<ExampleTwo name="Hazantip"/>,
//	document.getElementById('container2')
//);


export default ExampleTwo;

// ############### ATTENTION ###############
// Этот компонент ЗНАЕТ о компоненте modules/example/example
console.log( 'example2', $('.helloExample') );
