import React from 'react'

export const Score = ({ value }) => {
  const { xScore, oScore } = value;

  return (
    <div className="score">
      <span className={`score x-score`}>X - {xScore}</span>
      <span className={`score o-score`}>O - {oScore}</span>
    </div>
  )
}
