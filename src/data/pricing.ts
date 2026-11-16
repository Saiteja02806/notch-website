/**
 * Single source of truth for the pricing page. Update the numbers here and
 * both the page copy and the schema.org markup follow along.
 */
export const pricing = {
  currency: 'USD',
  earlyBird: {
    price: 3.99,
    label: 'Early bird',
    seats: 50
  },
  standard: {
    price: 9.99,
    label: 'Standard'
  },
  /**
   * How many early-bird licenses have been claimed so far. Shown as a
   * progress meter only when greater than 0, so the page never fakes
   * scarcity out of the box.
   */
  seatsClaimed: 0
} as const

export const seatsLeft = Math.max(pricing.earlyBird.seats - pricing.seatsClaimed, 0)

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`
}
