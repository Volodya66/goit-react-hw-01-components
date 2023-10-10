import css from './TransactionHistory.module.css'


export default function TransactionHistory({ items }) {
 
return (
        <>
            <table className={css.table}>
                <thead className={css.thead}>
                    <tr>
                        <th className={css.ThName}>Type</th>
                        <th className={css.ThResult}>Amount</th>
                        <th className={css.ThResult}>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.body}>
                    {items.map(({ amount, currency, id, type }) => (
                        <tr key={id} className={css.tr}>
                            <td className={css.TdName}>{type}</td>
                            <td className={css.TdResult}>{amount}</td>
                            <td className={css.TdResult}>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

