import './input.css';

export default function Input(props) {

    return (
        <>
        <section className='inputDados'>
            <div className='container'>
                <label className='input_label'>{props.label}</label>
                <input
                    className='inputbox'
                    id={props.id}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={props.aoDigitar}
                    required
                />

            </div>
            </section>
        </>

    );

}