import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props, { aoDeletar }) => {
    const css = { backgroundColor: props.corSecundaria };

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    console.log(<Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                        aoDeletar={props.aoDeletar}
                    />);
                    return <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section>
        : ''
    );
}

export default Time;