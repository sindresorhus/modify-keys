import test from 'ava';
import fn from './';

test(t => {
	t.true(fn({FOO: true}, x => x.toLowerCase()).foo);
});
