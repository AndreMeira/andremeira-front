export type Seconds = number & {readonly _: unique symbol}
export const Seconds = (duration: number): Seconds => duration as Seconds;