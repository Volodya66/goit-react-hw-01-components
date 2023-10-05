import css from './table.module.css'

function HeaderTable() {

    const header = (
        <thead className={css.thead}>
            <tr>
                <th className={css.ThName}>Type</th>
                <th className={css.ThResult}>Amount</th>
                <th className={css.ThResult}>Currency</th>
            </tr>
        </thead>
    );
    return header;
}

 function HistoryTrans({ events }) {
    console.log(events)
    const table = (<tbody className={css.body}>
    {events.map(({amount,currency,id,type }) => (
    <tr key={id} className={css.tr}>
        <td className={css.TdName}>{type}</td>
        <td className={css.TdResult}>{amount}</td>
        <td className={css.TdResult}>{currency}</td>
    </tr>
))}
</tbody>)
 return table

}

export {HeaderTable, HistoryTrans}