import { RouterProvider } from 'react-router-dom'
import router from './router'
// import BasicButtons from './Components/ButtunMui'
// import TextFieldMui from './Components/TextFieldMui'

function App() {

  return (
    <>
    {/* <BasicButtons/> */}
    {/* <TextFieldMui/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
