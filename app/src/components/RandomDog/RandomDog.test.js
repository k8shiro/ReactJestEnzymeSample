import RandomDog from '.';

import { act } from 'react-dom/test-utils';
import { waitFor, render, screen } from '@testing-library/react';
import { mount} from 'enzyme';
import axios from 'axios';

test('test RandomDog with mount and waitFor', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({"data": {"message":"https://example.com/test_image.jpg", "status":"success"}});

  let wrapper;
  wrapper = mount(<RandomDog />);

  await waitFor(() => {
    wrapper.update();
    expect(wrapper.find('img').props().src).toBe('https://example.com/test_image.jpg');
  });
});

test('test RandomDog with render and waitFor ', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({"data": {"message":"https://example.com/test_image.jpg", "status":"success"}});
  render(<RandomDog />);

  await waitFor(() => {
    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe('https://example.com/test_image.jpg');
  });
});

test('test RandomDog with mount and act and setTimeout', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({"data": {"message":"https://example.com/test_image.jpg", "status":"success"}});
  let wrapper;
  await act(async () => {
    wrapper = mount(<RandomDog />);
    await new Promise((r) => setTimeout(r, 2000));
  });

  wrapper.update()
  expect(wrapper.find('img').props().src).toBe('https://example.com/test_image.jpg');
});