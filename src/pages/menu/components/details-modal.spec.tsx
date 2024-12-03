import { render } from '@testing-library/react'
import { vi, expect } from 'vitest'
import { DetailsModal } from './details-modal'
import userEvent from '@testing-library/user-event'
import { MenuContextProvider } from '../../../contexts/menu-provider'
import { DetailsModalContextProvider } from '../../../contexts/details-modal-provider'

const menuItemMock = {
    id: 1,
    image: '',
    name: 'hamburguer',
    description: 'Hamburguer e queijo',
    cost: 10,
    available: true,
    categoryId: 2
}

const menuItemToBeAddedMock = {
    id: 1,
    image: '',
    name: 'hamburguer',
    description: 'Hamburguer e queijo',
    cost: 10,
    available: true
}

const addOrUpdateItem = vi.fn()
const closeModal = vi.fn()

vi.mock('@tanstack/react-query', () => ({
    useQuery: () => ({
        data: menuItemMock,
        isLoading: false,
        isError: false,
    }),
}))

vi.mock('../../../hooks/useDetailsModal', () => ({
    useDetailsModal: () => ({
        isModalOpen: true,
        closeModal: closeModal
    }),
}))

vi.mock('../../../hooks/useCart', () => ({
    useCart: () => ({
        addOrUpdateItem: addOrUpdateItem,
        cartState: [],
    }),
}))

describe('DetailsModal', () => {
    const user = userEvent.setup()

    beforeEach(() => {
        addOrUpdateItem.mockClear()
    })

    it('renders the modal with item details', () => {
        const wrapper = render(
            <MenuContextProvider>
                <DetailsModalContextProvider>
                    <DetailsModal />
                </DetailsModalContextProvider>
            </MenuContextProvider>
        )

        expect(wrapper.getByText(menuItemMock.name)).toBeInTheDocument()
        expect(wrapper.getByText(menuItemMock.description)).toBeInTheDocument()
    })

    it('allows adding an observation', async () => {
        const wrapper = render(<MenuContextProvider>
            <DetailsModalContextProvider>
                <DetailsModal />
            </DetailsModalContextProvider>
        </MenuContextProvider>
        )

        const input = wrapper.getByPlaceholderText('Deseja alguma alteração no prato?')
        await user.type(input, 'No onions')

        expect(input).toHaveValue('No onions')
    })

    it('handles form submission', async () => {
        const wrapper = render(<MenuContextProvider>
            <DetailsModalContextProvider>
                <DetailsModal />
            </DetailsModalContextProvider>
        </MenuContextProvider>
        )

        const input = wrapper.getByPlaceholderText('Deseja alguma alteração no prato?')
        await user.type(input, 'No onions')

        const submitButton = wrapper.getByTestId('modals-add-to-cart-button')
        await user.click(submitButton)

        expect(addOrUpdateItem).toHaveBeenCalledTimes(1)
        expect(addOrUpdateItem).toHaveBeenCalledWith({
            menuItem: menuItemToBeAddedMock,
            foodPreferencies: 'No onions',
            quantity: 1,
        })
        expect(closeModal).toHaveBeenCalled()
    })
})
