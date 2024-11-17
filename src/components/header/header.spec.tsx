import { vi } from 'vitest'
import * as ReactResponsive from 'react-responsive'
import { Header } from '../header'
import { MenuContextProvider } from '../../contexts/menu-provider.tsx'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

const closeSearch = vi.fn()

vi.mock('../../hooks/useMenu', () => ({
    useMenu: () => ({
        closeSearch: closeSearch
    }),
}))

vi.mock('react-responsive', () => ({
    useMediaQuery: vi.fn()
}))

describe('Header Component', () => {
    const user = userEvent.setup()

    it('should display mobile search bar when search icon is clicked on mobile', async () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(true)

        const wrapper = render(<MenuContextProvider><Header /></MenuContextProvider>,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        const searchIconButton = wrapper.getByTestId('mobile-search-button')
        await user.click(searchIconButton)

        expect(wrapper.getByPlaceholderText('Buscar por item')).toBeInTheDocument()
    })

    it('should not show mobile search bar if not mobile screen size', () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(false)

        const wrapper = render(<Header />,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        expect(wrapper.queryByPlaceholderText('Buscar por item')).not.toBeInTheDocument();
    })

    it('should close the mobile search bar and call closeSearch when close button is clicked', async () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(true)

        const wrapper = render(<Header />,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        const searchIconButton = wrapper.getByTestId('mobile-search-button')
        await user.click(searchIconButton)

        const closeButton = wrapper.getByTestId('close-search-button')
        await user.click(closeButton)

        expect(closeSearch).toHaveBeenCalled()
        expect(wrapper.queryByPlaceholderText('Buscar por item')).not.toBeInTheDocument()
    })

    it('should not display the mobile search bar when close button is clicked', async () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(true)

        const wrapper = render(<Header />,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        const searchIconButton = wrapper.getByTestId('mobile-search-button')
        await user.click(searchIconButton)

        expect(wrapper.getByPlaceholderText('Buscar por item')).toBeInTheDocument()

        const closeButton = wrapper.getByTestId('close-search-button')
        await user.click(closeButton)

        expect(wrapper.queryByPlaceholderText('Buscar por item')).not.toBeInTheDocument()
    })

    it('should render shopping cart icon and user icon in non-mobile view', () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(false)

        const wrapper = render(<Header />,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        expect(wrapper.getByTestId('link-to-cart')).toBeInTheDocument()
        expect(wrapper.getByTestId('link-to-user-profile')).toBeInTheDocument()
    });

    it('should render search icon in mobile view', () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(true)

        const wrapper = render(<Header />,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        expect(wrapper.getByTestId('mobile-search-button')).toBeInTheDocument()
    });
});
