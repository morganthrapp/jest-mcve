import * as TestData from 'TestModule';

export class TestDataEmitter {
	constructor() { }
	public emit() {
		return TestData.data;
	}
}