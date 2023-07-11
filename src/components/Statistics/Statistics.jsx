

const Statistics = ({ statistics, title }) => {
    return <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {statistics.map(({ id, label, percentage }) => (
                <li key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            ))}
        </ul>
    </section>
};


export default Statistics;

