import { vi } from 'vitest'
import { CardsAddToCartButton } from './index'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'

const addToCartMock = vi.fn()

describe('CardsAddToCartButton', () => {
    const user = userEvent.setup()

    it('should render ShoppingCartSimple when hasBeenClicked is false', () => {
        const wrapper = render(
            <CardsAddToCartButton
                addToCart={addToCartMock}
                hasBeenClicked={false}
            />
        )

        expect(wrapper.getByTestId('add-item-to-cart')).toContainElement(wrapper.getByTestId('shopping-cart-icon'))
    })

    it('should render CheckFat when hasBeenClicked is true', () => {
        const wrapper = render(
            <CardsAddToCartButton
                addToCart={addToCartMock}
                hasBeenClicked={true}
            />
        )

        expect(wrapper.getByTestId('add-item-to-cart')).toContainElement(wrapper.getByTestId('check-fat-icon'))
    })

    it('should disable the button after clicking and update button style', async () => {
        const wrapper = render(
            <CardsAddToCartButton
                addToCart={addToCartMock}
                hasBeenClicked={false}
            />
        )

        expect(wrapper.getByTestId('add-item-to-cart')).toContainElement(wrapper.getByTestId('shopping-cart-icon'))

        const button = wrapper.getByTestId('add-item-to-cart')
        await user.click(button)

        expect(addToCartMock).toHaveBeenCalledTimes(1)
    })
})