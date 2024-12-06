import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CartItemCard } from '.'; // Adjust the import based on your file structure
import userEvent from '@testing-library/user-event';

describe('CartItemCard', () => {
    const user = userEvent.setup()
  it('renders the component with initial props', () => {
    const wrapper = render(
      <CartItemCard 
        name="Test Item" 
        image="test-image.jpg" 
        quantity={2} 
        price={100} 
      />
    );

    // Check if name, price, and quantity are rendered correctly
    expect(wrapper.getByText('Test Item')).toBeInTheDocument();
    expect(wrapper.getByText('100,00')).toBeInTheDocument();
    expect(wrapper.getByText(2)).toBeInTheDocument(); // Quantity input should be 2
  });

  it('increments the quantity when the increment button is clicked', async () => {
    const wrapper = render(
      <CartItemCard 
        name="Test Item" 
        image="test-image.jpg" 
        quantity={2} 
        price={100} 
      />
    );

    // Find the increment button and simulate a click
    const incrementButton = wrapper.getByTestId('increment-quanity-button')
    await user.click(incrementButton)

    // Verify if the quantity is updated to 3
    expect(wrapper.getByText(3)).toBeInTheDocument();
  });

  it('decrements the quantity when the decrement button is clicked', async () => {
    const wrapper = render(
      <CartItemCard 
        name="Test Item" 
        image="test-image.jpg" 
        quantity={2} 
        price={100} 
      />
    );

    // Find the decrement button and simulate a click
    const decrementButton = wrapper.getByTestId('decrement-quanity-button')
    await user.click(decrementButton)

    // Verify if the quantity is updated to 1
    expect(wrapper.getByText(1)).toBeInTheDocument();
  });

  it('does not decrement the quantity below 1', async () => {
    const wrapper = render(
      <CartItemCard 
        name="Test Item" 
        image="test-image.jpg" 
        quantity={1} 
        price={100} 
      />
    );

    // Find the decrement button and simulate a click
    const decrementButton = wrapper.getByTestId('decrement-quanity-button')
    await user.click(decrementButton)

    // Verify the quantity stays 1 and doesn't go below it
    expect(wrapper.getByText(1)).toBeInTheDocument();
  });
});
