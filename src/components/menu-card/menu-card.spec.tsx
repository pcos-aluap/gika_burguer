import { render } from '@testing-library/react'
import { MenuCard } from '.'
import { vi, expect } from 'vitest'
import { DetailsModalContextProvider } from '../../contexts/details-modal-provider'
import { CartContextProvider } from '../../contexts/cart-provider'
import userEvent from '@testing-library/user-event'

const openModal = vi.fn()
const addOrUpdateItem = vi.fn()

vi.mock('../../hooks/useDetailsModal', () => ({
    useDetailsModal: () => ({
        openModal: openModal,
    }),
}))

vi.mock('../../hooks/useCart', () => ({
    useCart: () => ({
        addOrUpdateItem: addOrUpdateItem,
        cartState: [],
    }),
}))

const menuItemMock = {
    id: 1,
    name: 'hamburguer',
    description: 'Hamburguer e queijo',
    price: 10,
    available: true,
    categoryId: 2
}

describe('MenuCard', () => {
    const user = userEvent.setup()

    it('should render menu item details correctly', () => {
        const wrapper = render(
            <CartContextProvider>
                <DetailsModalContextProvider>
                    <MenuCard
                        id={menuItemMock.id}
                        image={''}
                        name={menuItemMock.name}
                        description={menuItemMock.description}
                        price={menuItemMock.price}
                        available={menuItemMock.available}
                        categoryId={menuItemMock.categoryId}
                    />
                </DetailsModalContextProvider>
            </CartContextProvider>
        )

        expect(wrapper.getByText(menuItemMock.name)).toBeInTheDocument()
        expect(wrapper.getByText(menuItemMock.description)).toBeInTheDocument()
        expect(wrapper.getByText('10,00')).toBeInTheDocument()
    })

    it('should open modal when clicking the card', async () => {
        const wrapper = render(
            <CartContextProvider>
                <DetailsModalContextProvider>
                    <MenuCard
                        id={menuItemMock.id}
                        image={''}
                        name={menuItemMock.name}
                        description={menuItemMock.description}
                        price={menuItemMock.price}
                        available={menuItemMock.available}
                        categoryId={menuItemMock.categoryId}
                    />
                </DetailsModalContextProvider>
            </CartContextProvider>
        )

        await user.click(wrapper.getByText(menuItemMock.name))
        expect(openModal).toHaveBeenCalledWith(menuItemMock.id)
    })

    it('should show the form when the "show add to cart form button" button is clicked', async () => {
        const wrapper = render(
            <CartContextProvider>
                <DetailsModalContextProvider>
                    <MenuCard
                        id={menuItemMock.id}
                        image={''}
                        name={menuItemMock.name}
                        description={menuItemMock.description}
                        price={menuItemMock.price}
                        available={menuItemMock.available}
                        categoryId={menuItemMock.categoryId}
                    />
                </DetailsModalContextProvider>
            </CartContextProvider>
        )

        expect(wrapper.queryByTestId('add-to-cart-card-form')).not.toBeInTheDocument()

        const showAddToCartFormButton = wrapper.getByText('adicionar ao carrinho')
        await user.click(showAddToCartFormButton)

        expect(wrapper.getByTestId('add-to-cart-card-form')).toBeInTheDocument()
    })

    it('should update quantity when incrementing or decrementing', async () => {
        const wrapper = render(
            <CartContextProvider>
                <DetailsModalContextProvider>
                    <MenuCard
                        id={menuItemMock.id}
                        image={''}
                        name={menuItemMock.name}
                        description={menuItemMock.description}
                        price={menuItemMock.price}
                        available={menuItemMock.available}
                        categoryId={menuItemMock.categoryId}
                    />
                </DetailsModalContextProvider>
            </CartContextProvider>
        )

        const showAddToCartFormButton = wrapper.getByText('adicionar ao carrinho')
        await user.click(showAddToCartFormButton)

        const incrementButton = wrapper.getByTestId('increment-quanity-button')
        const decrementButton = wrapper.getByTestId('decrement-quanity-button')

        await user.click(incrementButton)
        expect(wrapper.getByText('1')).toBeInTheDocument()

        await user.click(decrementButton)
        expect(wrapper.queryByTestId('add-to-cart-card-form')).not.toBeInTheDocument()
    })

    it('should call addOrUpdateItem when the "show add to cart form button" button inside the form is clicked', async () => {
        const wrapper = render(
            <CartContextProvider>
                <DetailsModalContextProvider>
                    <MenuCard
                        id={menuItemMock.id}
                        image={''}
                        name={menuItemMock.name}
                        description={menuItemMock.description}
                        price={menuItemMock.price}
                        available={menuItemMock.available}
                        categoryId={menuItemMock.categoryId}
                    />
                </DetailsModalContextProvider>
            </CartContextProvider>
        )

        await user.click(wrapper.getByText('adicionar ao carrinho'))

        expect(wrapper.queryByTestId('add-to-cart-card-form')).toBeInTheDocument()

        await user.click(wrapper.getByTestId('increment-quanity-button'))

        const addButton = wrapper.getByTestId('add-item-to-cart')
        await user.click(addButton)

        expect(addOrUpdateItem).toHaveBeenCalledWith({
            menuItem: {
                id: menuItemMock.id,
                image: '',
                name: menuItemMock.name,
                description: menuItemMock.description,
                cost: menuItemMock.price,
                available: menuItemMock.available,
            },
            quantity: 1,
            foodPreferencies: '',
        })
    })

    it('should not show the form if the item is not available', () => {
        const unavailableProps = { ...menuItemMock, available: false }

        const wrapper = render(
            <CartContextProvider>
                <DetailsModalContextProvider>
                    <MenuCard
                        id={unavailableProps.id}
                        image={''}
                        name={unavailableProps.name}
                        description={unavailableProps.description}
                        price={unavailableProps.price}
                        available={unavailableProps.available}
                        categoryId={unavailableProps.categoryId}
                    />
                </DetailsModalContextProvider>
            </CartContextProvider>
        )

        expect(wrapper.getByText('adicionar ao carrinho')).toBeDisabled()
    })
})
