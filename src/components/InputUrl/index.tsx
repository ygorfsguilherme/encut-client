import { Field } from 'formik'
import './InputUrl.css'

function InputUrl() {
  return (
    <div className='input_url'>
        <label htmlFor="url">URL</label>
        <Field name="urlOrigin" type="text" placeholder='https://www.seu_link.com'/>
    </div>
  )
}

export default InputUrl