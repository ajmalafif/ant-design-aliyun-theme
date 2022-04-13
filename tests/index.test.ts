/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import less from 'less';
import bargTheme from '..';

interface Vars {
  [key: string]: string;
}

describe('ant-design-aliyun-theme', () => {
  it('less compile without errors', () => {
    less
      .render('', {
        modifyVars: bargTheme as Vars,
      })
      .catch((e) => {
        console.error(e);
        expect(() => {
          throw e;
        }).not.toThrow();
      });
  });
});
