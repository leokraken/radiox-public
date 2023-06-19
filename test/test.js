import test from 'node:test';
import assert from 'node:assert';
import contrib from '../contrib.json' assert { type: "json" }
import Schema from '../src/model.mjs';

test("check contrib", () => {
    const result = Schema.safeParse(contrib);
    assert.equal(result.success, true, result.error);
})