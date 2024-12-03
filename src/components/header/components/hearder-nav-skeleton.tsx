import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export function HeaderNavSkeleton() {
    return (
        <>
            <NavSkeleton />
            <NavSkeleton />
            <NavSkeleton />
            <NavSkeleton />
            <NavSkeleton />
            <NavSkeleton />
        </>
    )
}

const NavSkeleton = styled(Skeleton)`
    width: 10rem;
    height: 1rem;
`