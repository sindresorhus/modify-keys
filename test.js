import test from 'ava';
import modifyKeys from './index.js';

test('main', t => {
	t.true(modifyKeys({FOO: true}, x => x.toLowerCase()).foo);
});
