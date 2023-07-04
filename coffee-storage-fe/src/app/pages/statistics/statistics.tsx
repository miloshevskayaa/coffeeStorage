import React from 'react';
import { useGetStatisticsQuery } from 'app/store/statistics';

import './styles.scss';

export const Statistics: React.FC = () => {
  const { data: statistics = [] } = useGetStatisticsQuery({});

  console.log(statistics);

  return (
    <div className="statistics">
      {statistics.map((statistic: any) => (
        <div key={statistic.id} className="statistics__one">
          <div className="statistics__one__date">
            date: <span>{statistic.date.slice(0, 10)}</span>
          </div>
          <div className="statistics__one__time">
            time: <span>{statistic.date.slice(11, 16)}</span>
          </div>
          <div className="statistics__one__result">
            result: <span>{statistic.result}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
