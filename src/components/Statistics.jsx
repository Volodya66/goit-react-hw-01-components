import { CreateMarkup,TitleStatics } from './StatisticsSection/MarkupStatistics'
import statisticData from '../DataJSON/data.json';


export const Statistics = () => {
    return (
    <section className="statistics">
            {/* <h2 className="title">Upload stats</h2> */}
           < TitleStatics title="Upload stats" />
       
                
        <CreateMarkup events={statisticData} />
    
    
    </section>
    )
}