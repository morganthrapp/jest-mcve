import 'jest';
import { TestDataEmitter } from '../component';

describe("Test data", () => {
	it("should be able to be referenced in a test", () => {
		const testDataEmitter = new TestDataEmitter();
		expect(testDataEmitter.emit()).toBe(undefined);
	})
})