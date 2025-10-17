
import { useSearchParams } from 'react-router-dom'
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  Alert,
  Zoom,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { IconEye, IconEyeOff, IconLogin2 } from '@tabler/icons-react'
import { useState } from 'react'
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE
} from '~/utilities/validators'

// Constants
const THEME_COLORS = {
  primary: '#1976d2',
  primaryDark: '#115293',
  primaryLight: '#42a5f5',
  accent: '#2196f3'
}

const CARD_STYLES = {
  width: 400,
  p: 4,
  borderRadius: 4,
  backdropFilter: 'blur(10px)',
  background: THEME_COLORS.background,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const INPUT_STYLES = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '25px',
    // backgroundColor: '#e3f2fd',
    '&.Mui-focused': {
      // backgroundColor: '#ffffff'
    }
  }
}

const EMAIL_INPUT_STYLES = {
  ...INPUT_STYLES,
  '& .MuiInputLabel-root': {
    color: 'rgb(0,0,0)'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: THEME_COLORS.primaryDark
  },
  '& .MuiOutlinedInput-root': {
    ...INPUT_STYLES['& .MuiOutlinedInput-root'],
    '&.Mui-focused': {
      backgroundColor: '#ffffff'
    },
    // 🎯 Thêm phần này
    '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #ffffff inset',
      WebkitTextFillColor: '#000',
      transition: 'background-color 5000s ease-in-out 0s'
    }
  }
}


const BUTTON_STYLES = {
  borderRadius: '25px',
  fontWeight: 600,
  textTransform: 'uppercase',
  background: (theme) =>
    `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  '&:hover': {
    background: (theme) =>
      `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
  },
  color: 'white'
}


// Alert Component
const AlertMessage = ({ severity, email, message }) => (
  <Alert
    severity={severity}
    sx={{
      mb: 2,
      width: '100%',
      '.MuiAlert-message': { overflow: 'hidden' }
    }}
  >
    {message} <b>{email}</b>
    {severity === 'success' ? ' has been verified!' : '. Please verify!'}
  </Alert>
)

const PasswordToggle = ({ showPassword, onToggle }) => (
  <InputAdornment position="end">
    <IconButton
      onClick={onToggle}
      edge="end"
      aria-label="toggle password visibility"
      sx={{ color: '#000' }}
    >
      {showPassword ? <IconEyeOff /> : <IconEye />}
    </IconButton>
  </InputAdornment>
)
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [searchParams] = useSearchParams()
  const verifiedEmail = searchParams.get('verifiedEmail')
  const registeredEmail = searchParams.get('registeredEmail')

  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev)
  }

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    // TODO: Implement login logic
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <Zoom in={true} style={{ transitionDelay: '300ms', position: 'absolute', top: '10%' }}>
        <Card elevation={6} sx={CARD_STYLES}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              textTransform: 'uppercase',
              color: THEME_COLORS.primaryDark
            }}
          >
            Register
          </Typography>

          {/* Alerts */}
          {verifiedEmail && (
            <AlertMessage
              severity="success"
              email={verifiedEmail}
              message="Your email"
            />
          )}
          {registeredEmail && (
            <AlertMessage
              severity="info"
              email={registeredEmail}
              message="An email has been sent to"
            />
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              placeholder="example@gmail.com"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register('email', {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: EMAIL_RULE,
                  message: EMAIL_RULE_MESSAGE
                }
              })}
              sx={EMAIL_INPUT_STYLES}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              placeholder="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register('password', {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: PASSWORD_RULE,
                  message: PASSWORD_RULE_MESSAGE
                }
              })}
              sx={EMAIL_INPUT_STYLES}
              InputProps={{
                endAdornment: (
                  <PasswordToggle
                    showPassword={showPassword}
                    onToggle={handleTogglePassword}
                  />
                )
              }}
            />
            <TextField
              fullWidth
              label="Confirm password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              placeholder="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register('password', {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: PASSWORD_RULE,
                  message: PASSWORD_RULE_MESSAGE
                }
              })}
              sx={EMAIL_INPUT_STYLES}
              InputProps={{
                endAdornment: (
                  <PasswordToggle
                    showPassword={showPassword}
                    onToggle={handleTogglePassword}
                  />
                )
              }}
            />
            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{ ...BUTTON_STYLES, mt: 2 }}
            >
             Register
            </Button>
          </Box>
        </Card>
      </Zoom>
    </Box>
  )
}

export default Register