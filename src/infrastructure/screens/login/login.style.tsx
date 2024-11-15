import { styled } from '@/stitches.config'

export const ProductListRoot = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    padding: '24px',
})

export const ProductListProductContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '50%',
})