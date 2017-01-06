import {select} from "d3-selection";

/*eslint-disable */
if (ENV !== 'production') {
	document.write(
	 '<script src="http://' + (location.host || 'localhost').split(':')[0] +
	 ':35729/livereload.js?snipver=1"></' + 'script>'
	);
}
/*eslint-enable */

function textBlock () {
	var label = '';

	function inst (selection) {
		selection.each(function (d) {
			var nLabel = (typeof(label) === 'function' ? label(d) : label),
				element = select(this);

			element
				.append('text')
				.text(nLabel)
				.attr('x', 100)
				.attr('y', 100);
		});
	}

	inst.label = function (value) {
		label = value;
		return inst;
	};

	return inst;
}

export default textBlock;
