import { createContext, ReactNode, useState } from "react"

interface DetailsModalContextType {
    isModalOpen: boolean
    menuItemId: number | null
    openModal: (menuItemId: number) => void
    closeModal: () => void
}

interface DetailsModalContextProviderProps {
    children: ReactNode
}

export const DetailsModalContext = createContext({} as DetailsModalContextType);

export function DetailsModalContextProvider({ children }: DetailsModalContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [menuItemId, setMenuItemId] = useState<number | null>(null)

    function openModal(menuItemId: number) {
        setMenuItemId(menuItemId)
        setIsModalOpen(true)
    }
    function closeModal() {
        setMenuItemId(null)
        setIsModalOpen(false)
    }

    return (
        <DetailsModalContext.Provider 
            value={{
                isModalOpen,
                menuItemId,
                openModal,
                closeModal
            }}
        >
            {children}
        </DetailsModalContext.Provider>
    )
}