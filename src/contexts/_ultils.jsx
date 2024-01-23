import { toast } from 'react-toastify'

export const renderErrors = (err) => {
  // Console Log for debugging purposes
  console.log(err.response) // eslint-disable-line

  switch (err.response.status) {
    case 401: {
      toast.error(err?.response?.data?.message || 'You are not authorized to view this')
      break
    }
    case 404: {
      toast.error(err.response.data.message)
      break
    }
    case 406: {
      err.response.data.errors.forEach((error) => {
        toast.error(error.msg)
      })
      break
    }
    default: {
      toast.error('Something is wrong with the server')
    }
  }
}
