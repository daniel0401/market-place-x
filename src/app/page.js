import { Button, Stack } from '@mui/material'

export default function Page () {
  return (
    <Stack spacing={1} alignItems='center'>
      <Button variant='contained'>Button</Button>
      <Button variant='contained' color='info'>
        Info
      </Button>
      <Button variant='contained' color='success'>
        Success
      </Button>
      <Button variant='contained' color='warning'>
        Warning
      </Button>
      <Button variant='contained' color='error'>
        Error
      </Button>
      <Button disabled variant='contained'>
        Disabled
      </Button>
    </Stack>
  )
}
