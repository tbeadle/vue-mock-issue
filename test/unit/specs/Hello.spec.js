import HelloWorld from '@/components/HelloWorld';
import router from '@/router';
import { mount } from 'vue-test-utils';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const route = { path: '/some-made-up-path' };
    const wrapper = mount(
      HelloWorld,
      {
        router,
        mocks: { $route: route },
      },
    );
    expect(wrapper.find('h1').text())
      .to.equal('Welcome to Your Vue.js App');
    expect(wrapper.$route.path).to.equal(route.path);
  });
});
