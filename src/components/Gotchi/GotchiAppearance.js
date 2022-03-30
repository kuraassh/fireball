import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import gotchiUtils from 'utils/gotchiUtils';
import commonUtils from 'utils/commonUtils';
import { traitsEffects } from 'data/traits';

import { GotchiTraitsStyles, CustomTooltipStyles } from './styles';
import fireballApi from 'api/fireball.api';
import { Link, Tooltip } from '@mui/material';

export default function GotchiAppearance({ id }) {
    const classes = {
        ...GotchiTraitsStyles(),
        ...CustomTooltipStyles()
    };
    const [dataLoading, setDataLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        let controller = new AbortController();

        setDataLoading(true);

        fireballApi.getFireGotchiById(id)
            .then((response)=> {
                if (!controller.signal.aborted) {
                    setDataLoading(false);
                    setData(response);
                    console.log('🤖', response)
                }
            }).catch((error) => {
                console.log(error);
            });

        return () => controller?.abort(); // cleanup on destroy

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className={classes.traitsEffects}>
            {!dataLoading ? (
                <Tooltip
                    title={
                        <div style={{ textAlign: 'center' }}>
                            <p>{data?.related?.length > 0 ? 'Twins:' : 'UNIQUE!'}</p>
                            {data?.related?.length ? (
                                data.related.map((gotchi, index) => {
                                    return <span key={index}>
                                        {gotchi.is_summoned ? (
                                            <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>G: </span>
                                        ) : (
                                            <span style={{ fontWeight: 'bold', color: 'red' }}>P: </span>
                                        )}
                                        <Link
                                            href={`https://app.aavegotchi.com/${gotchi.is_summoned ? 'gotchi' : 'portal'}/${gotchi.true_id[0]}`}
                                            target='_blank'
                                            underline='none'
                                            className={classes.link}
                                        >
                                            {gotchi.true_id[0]}
                                        </Link>
                                        <br />
                                        {/* {index === (data.holders.length - 1) ? '' : ', '} */}
                                    </span>
                                })
                            ) : (
                                null
                            )}
                        </div>
                    }
                    classes={{ tooltip: classes.customTooltip }}
                    enterTouchDelay={0}
                    placement='top'
                >
                    <div style={{ color: data?.related?.length > 0 ? 'orange' : 'lightgreen' }}>1 / {data?.related?.length}</div>
                </Tooltip>
            ) : !dataLoading && !data ? (
                <span style={{ color: 'red' }}>undefined</span>
            ) :
            (
                <span>...</span>
            )}
        </div>
    );
}
