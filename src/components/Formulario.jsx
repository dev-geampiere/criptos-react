import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width:100%;
    padding:10px;
    color: #fff;
    font-weight:700;    
    font-size: 'latto', sans-serif;
    text-transform: uppercase;
    font-size:20px;
    border-radius:5px;
    transition: background-color .3s ease;
    &:hover {
        background-color:#7a7dfe;
        cursor: pointer;
    }

`

const Formulario = () => {

    const [ SelectMonedas ] = useSelectMonedas('Select Monedas')


    return ( 
        <form>
            <SelectMonedas />
            
            <InputSubmit 
                type="submit"  
                value='cotizar'
            />
        </form>
     );
}
 
export default Formulario;