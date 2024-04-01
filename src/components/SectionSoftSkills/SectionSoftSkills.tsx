import styles from './SectionSoftSkills.module.scss';

export default function SectionSoftSkills() {
    return (
        <section className={styles.container}>
            <div className={styles.containerSoftSkills}>
                <h2>Soft Skills</h2>
                <ul>
                    <li>Comunicação</li>
                    <li>Flexibilidade e resiliência</li>
                    <li>Trabalho em equipe</li>
                    <li>Disciplina</li>
                    <li>Empatia</li>
                </ul>
            </div>

            <div className={styles.containerDadosPessoais}>
                <h2><span>Nascimento:</span> 06/05/199</h2>
                <h2><span>Estado civil:</span> Solteiro</h2>
                <h2><span>Nacionalidade:</span> Brasileiro</h2>
                <h2><span>Contato:</span> (92) 98254-1621</h2>
                <h2><span>E-mail:</span> mateusvpdl@outlook.com</h2>
            </div>
        </section>
    )
}