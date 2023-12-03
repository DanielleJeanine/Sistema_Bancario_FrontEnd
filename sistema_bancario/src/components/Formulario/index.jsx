import './style.css';

export default function Formulario(props) {

    return (
        <>
            <div className='container'>
                <label>{props.label}</label>
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    required={props.required}
                />

            </div>
        </>

    );

}