import { render } from '@testing-library/react'
import { MenuContextProvider } from '../../contexts/menu-provider'
import { SearchBarComponent } from './'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

const filterMenuItemsForSearch = vi.fn()
const handleCloseSearchBarComponent = vi.fn()

vi.mock('../../hooks/useMenu', () => ({
    useMenu: () => ({
      filterMenuItemsForSearch: filterMenuItemsForSearch
    })
}))

describe('SearchBarComponent', () => {
    const user = userEvent.setup()

    it('should render the component correctly', () => {
        const wrapper = render(
            <SearchBarComponent handleCloseSearchBarComponent={handleCloseSearchBarComponent} />
        )

        expect(wrapper.getByPlaceholderText('Buscar por item')).toBeInTheDocument()
        expect(wrapper.getByRole('button')).toBeInTheDocument()
    })

    it('should update searchedName on input change', async () => {
        const wrapper = render(
            <SearchBarComponent handleCloseSearchBarComponent={handleCloseSearchBarComponent} />,
            {
                wrapper: ({ children }) => {
                    return (<MenuContextProvider>{children}</MenuContextProvider>)
                }
            }
        )

        const input = wrapper.getByPlaceholderText('Buscar por item')
        await user.type(input, 'test search')

        expect(input).toHaveValue('test search')
        expect(filterMenuItemsForSearch).toHaveBeenCalledWith('test search')
    })

    it('should call handleCloseSearchBarComponent when button is clicked', async () => {
        const wrapper = render(
            <SearchBarComponent handleCloseSearchBarComponent={handleCloseSearchBarComponent} />
        )

        const button = wrapper.getByRole('button')
        await user.click(button)

        expect(handleCloseSearchBarComponent).toHaveBeenCalledTimes(1)
    })
});