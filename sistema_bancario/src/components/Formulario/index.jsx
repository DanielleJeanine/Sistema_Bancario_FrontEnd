import './style.css';

export default function Formulario(props) {

    return (
        <>
        <section className='inputDados'>
            <div className='container'>
                <label>{props.label}</label>
                <input
                    id={props.id}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    required={props.required}
                    onChange={props.aoDigitar}
                />

            </div>
            </section>
        </>

    );

}