
import { Field } from 'formik'
import './InputUrlCustom.css'

function InputUrlCustom(
  Props: {
    checked: boolean
  }
) {

  return (

    <div className='input_url_custom'>
      <Field
        className='input_url_custom__field'
        type={Props.checked ? 'text' : 'hidden'}
        name="urlPath"
        placeholder="Defina o caminho personalizado"
        disabled={!Props.checked}
      />
    </div>
  )
}

export default InputUrlCustom