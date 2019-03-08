import { parse } from '@babel/core';
import plugin from '../src/';

const example = `
  /**
    * @desc just a example
    */
  function demo(a) {
    // line1
    if (!a) return 0;
    return /*block1*/a++;//line2
  }
    //line3
  `;

const testPlugin = (remove) => {


  const { code } = parse(example, { plugins: [[plugin, { remove }]] });

  //未完成
  return code;
};

it('params use none', () => {
  expect(testPlugin('none')).toMatchSnapshot();
});
it('params use all', () => {
  expect(testPlugin('all')).toMatchSnapshot();
});
it('params use CommentLine', () => {
  expect(testPlugin('CommentLine')).toMatchSnapshot();
});
it('params use line', () => {
  expect(testPlugin('line')).toMatchSnapshot();
});
it('params use CommentBlock', () => {
  expect(testPlugin('CommentBlock')).toMatchSnapshot();
});
it('params use block', () => {
  expect(testPlugin('block')).toMatchSnapshot();
});

