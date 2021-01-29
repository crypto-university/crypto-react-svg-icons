import React, { memo } from 'react';

/* 
  Source
  Creator: CorelDRAW 2019
  Website: https://cryptologos.cc/ethereum
*/

export interface EthereumProps {
  className?: string
  size?: number
  onClick?: () => void
}

export function Ethereum({ className, size = 50, onClick }: EthereumProps) {
  return (
    <svg width={size} height={size} className={className} onClick={onClick} viewBox="0 0 784.37 1277.39">
      <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
      <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
      <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
      <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
      <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
      <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "/>
  </svg>
  )
}

export default memo(Ethereum)