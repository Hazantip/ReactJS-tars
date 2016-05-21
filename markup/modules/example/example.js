/**
 *
 * Created by Khazan on 20.05.2016.
 */

import React, { Component } from 'react';
import $ from 'jquery';

class Example extends Component {
	render() {
		return (
			<div className="helloExample">Hi {this.props.name} from example with es6 class</div>
		);
	}
}

export default Example;


// ############### ATTENTION ###############
// Этот компонент НЕ знает о компоненте modules/example2/example2
console.log( 'example', $('.helloExample2').html(), $('.helloExample3').html() );

