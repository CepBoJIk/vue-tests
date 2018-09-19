import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import RepositoryDisplay from '@/components/RepositoryDisplay.vue';

describe('App.vue', () => {
  it('isSavedRepository is work', () => {
    const wrapper = shallowMount(RepositoryDisplay, {
      propsData: {
        savedData: [
          { id: 1 },
          { id: 2 },
        ],
      },
    });

    expect(wrapper.vm.isSavedRepository({ id: 1 })).to.be.equal(true);

    expect(wrapper.vm.isSavedRepository({ id: 3 })).to.be.equal(false);
  });

  it('changeStarsNumber is work', () => {
    const wrapper = shallowMount(RepositoryDisplay);

    expect(wrapper.vm.changeStarsNumber(123)).to.be.equal('123');
    expect(wrapper.vm.changeStarsNumber(120000)).to.be.equal('120k');
  });
});
