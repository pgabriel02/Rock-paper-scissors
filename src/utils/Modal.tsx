import {AiOutlineClose} from 'react-icons/ai'

const ModalContainer = (props: any) => {
    return (
        <div className='ModalContainer'>
            <div className='modal'>
                <div className='modal__header'>
                    <h2>{props.title}</h2>
                    <AiOutlineClose className='icon' onClick={props.onClose} />
                </div>
                <div className='modal__body'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ModalContainer