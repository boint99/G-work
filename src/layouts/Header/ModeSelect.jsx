import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import {
  IconBrightnessUp,
  IconBrightnessFilled,
  IconMoonFilled
} from '@tabler/icons-react'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl size="small" sx={{ minWidth: 130, mr: 2 }}>
      <InputLabel
        id="label-select-dark-mode"
        sx={{
          color: 'text.primary',
          '&.Mui-focused': {
            color: 'primary.main'
          }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-mode"
        id="select-dark-mode"
        value={mode || 'light'}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'text.primary',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'divider'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            // borderColor: 'primary.main'
            borderColor: (theme) => theme.palette.primary.main
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main'
          },
          '.MuiSvgIcon-root': {
            color: 'text.primary'
          }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconBrightnessUp size="21" stroke="1.5" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconMoonFilled size="21" stroke="1.5" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconBrightnessFilled size="21" stroke="1.5" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect