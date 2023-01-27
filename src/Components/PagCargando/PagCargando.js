import { Audio } from  'react-loader-spinner'
import './PagCargando';

function PagCargando() {
    return (
        <div className="cargando">
           <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = '#36d7b7'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
             />
        </div>
    )
}

export default PagCargando;