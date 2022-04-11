import React from 'react';

import GotchiSvg from 'components/Gotchi/GotchiImage/GotchiSvg';

import ethersApi from 'api/ethers.api';
import { traitValues } from 'data/traitValues.data';
import itemUtils from 'utils/itemUtils';

import styles from './styles';

export default function GotchiPreview({ gotchi }) {
    const classes = styles();

    return (
        <>
            <div className={classes.previewWrapper}>
                <div>
                    <div>Rarity score: ({gotchi.modifiedRarityScore}) {gotchi.baseRarityScore}</div>
                    {
                        gotchi.numericTraits.map((trait, index) => {
                            const traitIcon = itemUtils.getTraitIconByName(traitValues[index].key);

                            return (
                                <div key={index} style={{ display: 'flex' }}>
                                    <img src={traitIcon} style={{ width: 21 }} alt={traitValues[index].key} />
                                    <div>{traitValues[index].name}:</div>
                                    <div>{gotchi.modifiedNumericTraits[index]}</div>
                                    <div>({trait})</div>
                                </div>
                            );
                        })
                    }
                </div>

                <div>
                    <div style={{ textAlign: 'center' }}>{gotchi.name}</div>
                    <GotchiSvg id={gotchi.id} size={288} hideWareables={false} />
                    <div>GotchiId: {gotchi.id} (H{gotchi.hauntId})</div>
                </div>

                <div>
                    <div>Kinship: {gotchi.kinship}</div>
                    <div>Experience: {gotchi.experience}</div>
                    <div>Current Experience Level: {gotchi.level}</div>
                    <div>Experience to next Level: {gotchi.toNextLevel} (XP)</div>
                    <div>Collateral: {gotchi.collateral}</div>
                    <div>Minimum Stake: {ethersApi.fromWei(gotchi.minimumStake)}</div>
                    <div>Staked Amount: {ethersApi.fromWei(gotchi.stakedAmount)}</div>
                </div>
            </div>

        </>
    );
}
