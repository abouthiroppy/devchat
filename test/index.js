import test from 'ava';
import devchat from '../';

test('foo', async (t) => {
  const res = await devchat.getPodCasts('jsJabber');

  console.log(res)
});
