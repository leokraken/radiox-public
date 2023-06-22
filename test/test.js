import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import split from 'split2';
import Schema from '../src/model.mjs';
import _ from 'lodash';

const contribFile = './contrib.json'
test("check contrib", async () => {
    return new Promise((resolve) => {
        fs.createReadStream(contribFile)
            .pipe(split())
            .on('data', validate)
            .on('end', resolve)
    });
});

test("check contrib check unique ids", async () => {
    unique('id')
})

test("check contrib check unique urls", async () => {
    unique('url')
})

function unique(path){
    const data = fs.readFileSync(contribFile)
        .toString()
        .split('\n')
        .filter(d => d !== '')
        .map(JSON.parse);
    const repeated = _.chain(data)
        .map(r => r[path])
        .groupBy((k) => k)
        .mapValues()
        .filter(g => g.length > 1)
        .map(r => _.head(r))
        .uniq()
        .value();
    assert.equal(0, repeated.length, `repeated identifiers: ${JSON.stringify(repeated)}`)
}

function validate(data) {
    const json = parseJSON(data);
    assert.ok(json, `invalid json check it ${data}`)
    const result = Schema.safeParse(json);
    assert.equal(result.success, true, `check data ${data} \n\n` + result.error);
}

function parseJSON(data) {
    try {
        return JSON.parse(data)
    } catch (e) {
        return null
    }
}

