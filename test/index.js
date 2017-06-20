import test from 'ava';
import devchat from '../';

test('e2e', async (t) => {
  const category = 'jsJabber';

  const podCasts = await devchat.getPodCasts(category);

  const { path } = podCasts[0];

  const podCast = await devchat.getPodCast(category, path);

  console.log(podCast)
});
