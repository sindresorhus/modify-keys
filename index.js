export default function modifyKeys(object, transformer) {
	return Object.fromEntries(Object.entries(object).map(([key, value]) => [transformer(key), value]));
}
