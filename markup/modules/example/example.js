/**
 *
 * Created by Khazan on 20.05.2016.
 */

import React, { Component } from 'react';
import $ from 'jquery';


// TODO: разобраться как общаться исп-ть друг друга двум компонентам из разных файлов.
// TODO: render one module inside other
//import ExampleTwo from '../example2/example2';
//console.log(ExampleTwo);


class Example extends Component {
	render() {
		return (
			<div className="helloExample">Hi {this.props.name} from example with es6 class</div>
			//<ExampleTwo name="Hazantipppp"/>
		);
	}
}

export default Example;


// ############### ATTENTION ###############
// Этот компонент НЕ знает о компоненте modules/example2/example2
console.log( 'example1', $('.helloExample2').html() );
