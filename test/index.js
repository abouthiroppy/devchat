import test from 'ava';
import devchat from '../';

test('should return categories', (t) => {
  const categories = devchat.getCategories();

  t.is(typeof categories, 'object');
  t.is(Object.keys(categories).length, 9);

});

test('e2e', async(t) => {
  const category = 'jsJabber';

  const podCasts = await devchat.getPodCasts(category);

  t.not(podCasts.length, 0);

  const podCast = podCasts[0];
  t.not(podCast.num, '');
  t.not(podCast.path, '');
  t.not(podCast.title, '');
  t.not(podCast.duration, '');
  t.not(podCast.publishedDate, '');

  // t.not(podCast.panel, []);

  const { path } = podCast;

  const detail = await devchat.getPodCast(category, path);

  t.not(detail.src, '');
  t.not(detail.uri, '');
  t.not(detail.num, '');
  t.not(detail.title, '');
  t.not(detail.duration, '');
  t.not(detail.publishedDate, '');

  // t.not(detail.panel, []);
  // t.not(detail.downloadLink, '');
});
