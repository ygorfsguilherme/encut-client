import { faClipboard, faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './OutUrl.css'

function OutUrl(Props:{ newUrl: string }) {
  return (
    <div className='out_url'>
        <input 
          type="text"
          readOnly 
          value={Props.newUrl}       
        />

        <CopyToClipboard 
          text={Props.newUrl}
          onCopy={() => alert('Copiado!')}
        >
          <button type='button'>
              <FontAwesomeIcon icon={faClipboard} />
          </button>
        </CopyToClipboard>

    </div>
  )
}

export default OutUrl