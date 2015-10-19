import { Pinyin } from '../lib/JSPinyin';

var pinyin = new Pinyin();
export class PinYinSort {
	static compare(s1,s2) {
		if( s1 == s2 ) { return 0; }
		if( s1.length == 0 ) { return 1; }
		if( s2.length == 0 ) { return -1; }

		var py1 = pinyin.getCamelChars(s1);
		console.log(s1 + " : " + py1);
		var py2 = pinyin.getCamelChars(s2);
		console.log(s2 + " : " + py2);

		var count = py1.length > py2.length ? py2.length : py1.length;

		for( var i=0; i < count; ++i) {
			if( py1[i] > py2[i] ) {
				return 1;
			} else if( py1[i] < py2[i] ) {
				return -1;
			}
		}
		return s1.length > s2.length ? 1 : -1;
	}

	static keyCompare(o1,o2,getKey) {
		return PinYinSort.compare(getKey(o1,o2));
	}

	static keySort(arr,getKey) {
		return arr.sort( function() {
			return function(a,b) {
				return PinYinSort.compare(getKey(a),getKey(b));
			}
		}());
	}
}
