import { Audio } from  'react-loader-spinner'


function PagCargando() {
    return (
        <div >
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