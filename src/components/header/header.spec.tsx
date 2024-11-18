import { vi } from 'vitest'
import * as ReactResponsive from 'react-responsive'
import { Header } from '../header'
import { MenuContextProvider } from '../../contexts/menu-provider.tsx'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { MenuCategory } from '../../@types/menu'

const closeSearch = vi.fn()

const headersLinks = [
    { id: 1, name: 'hamburguers' },
    { id: 2, name: 'Pizzas' }
]

const menuMock: MenuCategory[] =
    [
        {
            id: 1,
            name: 'hamburguers',
            items: [
                {
                    id: 1,
                    image: '',
                    name: 'hamburguer 01',
                    description: 'hamburguer',
                    cost: 3.50,
                    available: true
                },
                {
                    id: 2,
                    image: '',
                    name: 'hamburguer 02',
                    description: 'hamburguer, queijo',
                    cost: 4.00,
                    available: true
                },
                {
                    id: 3,
                    image: '',
                    name: 'hamburguer 03',
                    description: 'hamburguer, queijo, presunto',
                    cost: 3.50,
                    available: true
                },
            ]
        },
        {
            id: 2,
            name: 'Pizzas',
            items: [
                {
                    id: 1,
                    image: '',
                    name: 'Pizza de mussarela',
                    description: 'mussarela',
                    cost: 3.50,
                    available: true
                },
                {
                    id: 2,
                    image: '',
                    name: 'Pizza de calabresa',
                    description: 'mussarela e calabresa',
                    cost: 4.00,
                    available: true
                },

            ]
        }
    ]


vi.mock('../../hooks/useMenu', () => ({
    useMenu: () => ({
        closeSearch: closeSearch,
        menu: menuMock
    }),
}))

vi.mock('react-responsive', () => ({
    useMediaQuery: vi.fn()
}))

describe('Header Component', () => {
    const user = userEvent.setup()

    afterEach(() => {
        cleanup()
    });

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
        const wrapper = render(<MenuContextProvider><Header /></MenuContextProvider>,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        expect(wrapper.queryByPlaceholderText('mobile-search-button')).not.toBeInTheDocument()
    })

    it('should close the mobile search bar and call closeSearch when close button is clicked', async () => {
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

        const closeButton = wrapper.getByTestId('close-search-button')
        await user.click(closeButton)

        expect(closeSearch).toHaveBeenCalled()
        expect(wrapper.queryByPlaceholderText('Buscar por item')).not.toBeInTheDocument()
    })

    it('should not display the mobile search bar when close button is clicked', async () => {
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

        const closeButton = wrapper.getByTestId('close-search-button')
        await user.click(closeButton)

        expect(wrapper.queryByPlaceholderText('Buscar por item')).not.toBeInTheDocument()
    })

    it('should render shopping cart icon and user icon in non-mobile view', () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(false)
        const wrapper = render(<MenuContextProvider><Header /></MenuContextProvider>,
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
    })

    it('should render search icon in mobile view', () => {
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

        expect(wrapper.getByTestId('mobile-search-button')).toBeInTheDocument()
    })

    it('should render all links from headersLinks in larger screen size', () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(false)
        const wrapper = render(<MenuContextProvider><Header /></MenuContextProvider>,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        headersLinks.map(link => {
            const linkElement = wrapper.getByText(link.name)
            expect(linkElement).toBeInTheDocument()
        })
    })

    it('should render all links from headersLinks in mobile screen size', async () => {
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

        headersLinks.forEach(link => {
            const linkElement = wrapper.getByText(link.name)
            expect(linkElement).toBeInTheDocument()
        })
    })

    it('should display search component in non-mobile view', () => {
        vi.spyOn(ReactResponsive, 'useMediaQuery').mockReturnValue(false)
        const wrapper = render(<MenuContextProvider><Header /></MenuContextProvider>,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/', '/cart']}>{children}</MemoryRouter>
                    )
                },
            }
        )

        expect(wrapper.queryByPlaceholderText('Buscar por item')).toBeInTheDocument()
    })
})
