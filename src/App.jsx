import './App.css'
import CustomHooks from './component/CustomHooks/CustomHooks'
import DefaultFrom from './component/defaultFrom/DefaultFrom'
import FromSubmit from './component/fromSubmit/FromSubmit'
import GetSubmit from './component/getSubmit/GetSubmit'
import ProductManagement from './component/TableUse/ProductManagement'
import UncontrolForm from './component/UncontrolFrom/UncontrolForm'

function App() {


  return (
    <>
      <h1>From With React</h1>
      {/* <FromSubmit></FromSubmit> */}
      {/* <GetSubmit></GetSubmit> */}
      {/* <DefaultFrom></DefaultFrom> */}
      {/* <UncontrolForm></UncontrolForm>     */}
      {/* <CustomHooks></CustomHooks> */}
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
