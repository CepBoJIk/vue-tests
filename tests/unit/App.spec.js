import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('toggleSavedData is work', () => {
    const savedData = [
      { id: 1 },
      { id: 2 },
    ];

    const wrapper = shallowMount(App, {
      savedData,
    });

    wrapper.vm.toggleSavedData({ id: 1 });

    expect(wrapper.vm.savedData.length).to.equal(1);

    wrapper.vm.toggleSavedData({ id: 3 });

    expect(wrapper.vm.savedData.length).to.equal(2);
  });
});
