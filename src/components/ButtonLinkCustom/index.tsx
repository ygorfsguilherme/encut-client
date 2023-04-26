import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonLinkCustom.css'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import { Dispatch, SetStateAction } from 'react'

function ButtonLinkCustom(Props: {
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>
}
) {
    return (
        <div className='input_url_custom__checkbox'>

            <label htmlFor="check">
                {
                    Props.checked ?
                        <FontAwesomeIcon icon={faSquareCheck} size="2x" style={{color: "#0D9549",}} /> :
                        <FontAwesomeIcon icon={faSquareCheck} size="2x" style={{color: "#94a3bc",}} />
                }
            </label>

            <input
                id='check'
                name='check'
                type="checkbox"
                defaultChecked={false}
                onChange={() => Props.setChecked(!Props.checked)}
            />

            <span>Link Personalizado</span>
        </div>
    )
}

export default ButtonLinkCustom