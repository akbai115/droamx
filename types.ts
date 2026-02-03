
export type DroamState = 'IDLE' | 'TRANSITIONING' | 'ENTERED';

export interface AppState {
  state: DroamState;
  isIdle: boolean;
  isNight: boolean;
  visitCount: number;
}

export enum Phase {
  ASCENDING = 'ascending',
  VOID = 'void',
  STASIS = 'stasis',
  ECHO = 'echo'
}

export enum Signal {
  PURE = 'pure',
  LOW = 'low',
  HIGH = 'high'
}
