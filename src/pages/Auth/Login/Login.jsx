import { Link, useNavigate, useSearchParams } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE
} from '~/utilities/validators'
import { loginAPI } from '~/api/apiClient'
import { toast } from 'react-toastify'


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
    color: '#000'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    // color: THEME_COLORS.primaryDark,
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

// Password Toggle Button Component
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

function Login() {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors }
  } = useForm()

  const [searchParams] = useSearchParams()
  const verifiedEmail = searchParams.get('verifiedEmail')
  const registeredEmail = searchParams.get('registeredEmail')

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev)
  }

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  const onSubmit = async (data) => {
    const { ...payload } = data
    delete payload.remember

    await toast.promise(
      (async () => {
        try {
          const res = await loginAPI(payload)
          const status = res?.status
          const message = res?.data?.message || res?.message || 'Login successfully'
          const result = res?.result || res?.data?.result || res?.data

          if (status === 200 || status === 201) {
            const { token, user } = result
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/dashboard')
            return message
          } else {
            throw new Error(message)
          }
        } catch (error) {
        // Bắt lỗi HTTP của axios (401, 404, 500,...)
          const status = error?.response?.status
          const message =
          error?.response?.data?.message ||
          (status === 401
            ? 'Email hoặc mật khẩu không đúng!'
            : 'Đăng nhập thất bại!')
          throw new Error(message)
        }
      })(),
      {
        pending: 'Đang đăng nhập...',
        success: {
          render: ({ data }) => data,
          position: 'top-center'
        },
        error: {
          render: ({ data }) => data?.message || data || 'Đăng nhập thất bại!',
          position: 'top-center'
        }
      }
    )
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
            Login
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
              label="Nhập email"
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
              label="Nhập password"
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

            {/* Remember & Forgot Password */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1
              }}
            >
              <FormControlLabel
                control={<Checkbox size="small" {...register('remember')} sx={{ color: 'black' }} />}
                label="Remember me"
              />
              <Link
                to="/auth/forgot-password"
                style={{
                  fontSize: '0.875rem',
                  color: THEME_COLORS.primary,
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Forgot password?
              </Link>
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              startIcon={<IconLogin2 />}
              sx={{ ...BUTTON_STYLES, mt: 2 }}
            >
              Login
            </Button>
          </Box>

          {/* Register Link */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2">
              Don&apos;t have an account?
              <Link
                to="/auth/register"
                style={{
                  color: THEME_COLORS.primary,
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  marginLeft: 2
                }}
              >
                Create account
              </Link>
            </Typography>
          </Box>
        </Card>
      </Zoom>
    </Box>
  )
}

export default Login