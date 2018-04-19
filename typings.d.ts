declare interface TestInterface {
	id: number;
	data: string;
}

declare module 'TestModule' {
	const testData: TestInterface;
	export = testData;
}