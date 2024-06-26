'use client'

import { useCallback, useState } from 'react'
import { Container, Typography } from "@mui/material"

import { useBoolean } from "src/hooks/use-boolean"

const defaultFilters = {
    category: 'all',
    priceRange: [0, 200],
}

export default function ProductShopView() {
    const openFilters = useBoolean()
    const [filters, setFilters] = useState(defaultFilters)

    // Note: I will need to use this later.
    // First I need to create a filter function.
    const handleFilters = useCallback((name, value) => {
        setFilters((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }, [])

    return (
        <Container sx={{ mb: 15 }}>
            <Typography variant='h4' sx={{ my: { xs: 3, md: 5 } }}>
                Christmas List 2024
            </Typography>
        </Container>
    )
}