import {HistoryTrans,HeaderTable} from './Transactions/transactionConm';
import data from '../DataJSON/transactions.json'


export const Transactions = () => {
    return (
        <table  style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
        }}> 
            <HeaderTable/>
            <HistoryTrans events={data} />
        </table>
    )
}