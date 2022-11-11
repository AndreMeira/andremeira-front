export type Seconds = Number & {readonly _: unique symbol}
export const Seconds = (duration:Number): Seconds => duration as Seconds;