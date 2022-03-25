import React from 'react';
import classNames from 'classnames';

import gotchiUtils from 'utils/gotchiUtils';
import commonUtils from 'utils/commonUtils';
import { traitsEffects } from 'data/traits';

import { GotchiTraitsStyles } from './styles';

export default function GotchiTraits({ gotchi, collateral }) {
    const classes = GotchiTraitsStyles();
    const formattedTraits = commonUtils.formatTraits(gotchi.modifiedNumericTraits);

    const isMythHighShape = (key, value) => {
        return key === 'EYS' && value >= 98;
    };

    const isMythLowShape = (key, value) => {
        return key === 'EYS' && value <= 1;
    };

    const isExactCollateral = (effectCollaterals) => {
        return effectCollaterals.indexOf(collateral) !== -1 ? true : false;
    };

    const isExactHaunt = (effectHaunt) => {
        return effectHaunt.indexOf(gotchi.hauntId) !== -1 ? true : false;
    };

    const getTraitEffect = (trait) => {
        let key = trait[0];
        let value = trait[1];

        return traitsEffects[key].filter((item) => {
            return commonUtils.inRange(value, item.range[0], item.range[1])
        })[0];
    };

    return (
        <div className={classes.traitsEffects}>
            <span>🧡 boost: {gotchiUtils.getKinChanneling(gotchi.kinship)}x</span>
            {
                Object.entries(formattedTraits).map((trait, i) => {
                    let traitKey = trait[0];
                    let traitVal = trait[1];
                    let effect = getTraitEffect(trait);

                    return effect ? (
                        <div className={classNames(classes.traitsEffect, traitKey)} key={i}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                <span style={{ fontSize: '12px',fontWeight: 'bold', color: traitKey === 'EYC' ? 'orange' : 'white', whiteSpace: 'nowrap'}}>
                                    {gotchiUtils.getTraitEmoji(traitKey)}
                                    <span style={{ marginLeft: '2px'}}>{effect.type}</span>
                                </span>

                                <div style={{ fontSize: '11px', textAlign: 'right' }}>
                                    {
                                        effect.increase?.map((e, i) => {
                                            if ((isMythHighShape(traitKey, traitVal) && isExactCollateral(e.collateral)) || (isMythLowShape(traitKey, traitVal) && isExactHaunt(e.haunt))) {
                                                return <div style={{ color: 'lime' }} key={i}>
                                                    + {e.trait?.name}
                                                </div>
                                            } else if (isMythHighShape(traitKey, traitVal) || isMythLowShape(traitKey, traitVal)) {
                                                return null;
                                            }

                                            return <div style={{ color: 'lime' }} key={i}>
                                                + {e.trait?.name}
                                            </div>
                                        })
                                    }
                                    {
                                        effect.decrease?.map((e, i) => {
                                            return <div style={{ color: '#ff5454' }} key={i}>
                                                + {e.trait?.name}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                })
            }
        </div>
    );
}
