import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Tooltip,
  IconButton,
  useTheme,
  Button,
  Pagination,
  Stack
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'
import { ipData } from '~/api/ipClient'

export default function Users() {
  const theme = useTheme()
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: theme.vars.palette.background.pageHeader,
          borderRadius: '10px',
          p: 3,
          fontWeight: 'bold'
        }}
      >
        <Typography variant='h6' sx={{ mb: 0.5 }}>
          User management
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Link to='/dashBoard' style={{ opacity: 0.7, fontSize: '0.875rem' }}>Dashboard</Link>
          <span style={{ fontSize: '0.875rem' }}>&gt;</span>
          <Typography component='span' variant='body2' fontWeight={500}>
            User management
          </Typography>
        </Box>
      </Box>

      {/* Table Card */}
      <Card
        sx={{
          borderRadius: 3,
          mt: 2,
          mb: 2,
          // boxShadow:
          //   'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.08) 0px 0px 0px 1px',
          overflow: 'hidden',
          boxShadow: 'none'
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Danh sách IP
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Cập nhật: 13/10/2025
              </Typography>
              <Button>
                Create
              </Button>
            </Box>
          </Box>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <TableCell>STT</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>VLAN</TableCell>
                <TableCell>Gateway</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>History</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ipData.ips.map((item, index) => (
                <TableRow
                  key={item.id}
                  className='TableRowTableRow'
                  sx={{
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': { backgroundColor: 'action.hover' }
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.ip_address}</TableCell>
                  <TableCell>{item.hostname}</TableCell>
                  <TableCell>{item.vlan}</TableCell>
                  <TableCell>{item['Ngươi sử dụng']}</TableCell>
                  <TableCell>
                    <Chip
                      label={
                        item.status === 'assigned'
                          ? 'Đang sử dụng'
                          : item.status === 'available'
                            ? 'Chưa cấp'
                            : item.status === 'reserved'
                              ? 'Đã giữ chỗ'
                              : 'Đã chặn'
                      }
                      color={
                        item.status === 'assigned'
                          ? 'success'
                          : item.status === 'available'
                            ? 'warning'
                            : item.status === 'reserved'
                              ? 'info'
                              : 'error'
                      }
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    {new Date(item.updated_at).toLocaleString('vi-VN')}
                  </TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center" gap={1}>
                      <Tooltip title="Sửa">
                        <IconButton size="small" color="primary">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Xóa">
                        <IconButton size="small" color="error">
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <Stack
          spacing={2}
          sx={{
            '& .MuiPagination-root': { justifyContent: 'center', display: 'flex' } }}>
          <Pagination count={10} variant="outlined" />
        </Stack>
      </Card>
    </Box>
  )
}
