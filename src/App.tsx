import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Toaster } from 'react-hot-toast'
// import BasicButtons from './Components/ButtunMui'
// import TextFieldMui from './Components/TextFieldMui'

function App() {

  return (
    <>
    {/* <BasicButtons/> */}
    {/* <TextFieldMui/> */}
    <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
