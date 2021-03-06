/*

yarn tsn ./src/test/memo.decorator.bench.ts

 */
/* tslint:disable:no-unused-variable */

import * as Benchmark from 'benchmark'
import { memo } from '..'

let c = 0

class C0 {
  constructor (private inc?: number) {}

  work () {
    // c += this.inc
    c++
  }
}

class C1 {
  // getC0 (inc?: number) {
  getC0 () {
    return new C0()
  }
}

class C2 {
  @memo()
  getC0 () {
    // getC0 (inc?: number) {
    return new C0()
  }
}

const c1 = new C1()
const c2 = new C2()
const c0 = c1.getC0()

// const key = {a: 'b'}
// const key = 'a'
const key = 2
// const key = undefined

const suite = new Benchmark.Suite()

suite
  .add('f1', () => {
    // c1.getC0(key as any).work()
    c1.getC0().work()
    // let a = JSON.stringify({a: 'b'})
  })
  .add('f2', () => {
    // let a = JSON.stringify(undefined)
    // (c2 as any).getC0('abc').work()
    // c2.getC0(key as any).work()
    c2.getC0().work()
    // c0.work()
  })
  // add listeners
  .on('cycle', (event: any) => {
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ async: true })
