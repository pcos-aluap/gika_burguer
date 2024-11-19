import { useContext } from "react";
import { DetailsModalContext } from "../contexts/details-modal-provider";

export function useDetailsModal() {
    return useContext(DetailsModalContext)
}