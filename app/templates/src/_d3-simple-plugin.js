import {select} from "d3-selection";

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
