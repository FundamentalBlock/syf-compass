# Syf Compass Mobile Demo Plan

## 1. Short verdict

Yes, this is doable as a hackathon demo. It is also a real problem worth solving.

The weak point is not the idea itself; the weak point is trying to make it feel like a true in-app Amazon experience inside the Amazon app. That is not realistic without a merchant partnership or a controlled webview experience. For the demo, the better approach is to make the user feel like they are moving from a shopping moment into a Synchrony decision experience.

## 2. What the mobile demo should actually show

The mobile demo should focus on one core promise:

Help a first-time credit card user understand the real cost of a purchase before they buy.

The experience should answer three questions quickly:
- What will this purchase cost me over time?
- What payment option is best for me?
- How will this affect my credit use and monthly budget?

## 3. Recommended demo flow

### Screen 1: Welcome / onboarding
- Short intro explaining that Compass helps users understand credit decisions before they spend.
- Keep this very short; the demo should move fast.

### Screen 2: Amazon-style product mockup
- Show a mock item, such as a laptop, phone, or headphones.
- The user taps a "Buy with Synchrony" or "See Compass" button.

### Screen 3: Purchase simulation
- Show the item price.
- Show the estimated APR.
- Show the estimated monthly payment.
- Show total interest and total repayment amount.
- Show credit utilization impact.

### Screen 4: Payment option comparison
- Compare:
  - Minimum payment option
  - Fixed monthly plan
  - Promotional financing option, if available
- Visualize the tradeoffs simply.

### Screen 5: Decision confirmation
- Show the user’s best option.
- Keep the decision simple and confidence-building.

### Screen 6: Post-purchase support
- Show a small follow-up card with:
  - payment reminders
  - credit health tips
  - alert settings

## 4. What to include in the MVP

Focus on a narrow, high-impact version.

### Must-have features
- Purchase cost simulation
- APR explanation
- Monthly payment estimate
- Credit utilization view
- Simple payment plan comparison

### Nice-to-have features
- Personalized recommendations
- Reminder alerts
- Budget impact chart
- Savings or payoff plan suggestions

## 5. What to avoid in the first version

Do not try to build all of this at once:
- Full Amazon integration
- Real credit approval logic
- Actual financial account data
- Too many screens or too much financial jargon

The first version should feel clear, fast, and understandable.

## 6. Recommended build approach

Use a simple mobile app prototype with mock data.

### Suggested stack
- React Native with Expo for fast prototyping
- Or Flutter if your team prefers it

### Demo data strategy
- Use realistic but fictional numbers.
- Example values:
  - Purchase amount: $450
  - APR: 24.99%
  - Monthly payment options: $25, $45, or promotional plan

## 7. Week-of-hackathon action plan

### Day 1: Story and screens
- Finalize the core user flow
- Define the top 5 screens
- Write the exact demo script

### Day 2: UI shell
- Build the app structure
- Create the welcome, product, and simulation screens

### Day 3: Core Compass experience
- Add APR, monthly payment, interest, and utilization visuals
- Implement payment options comparison

### Day 4: Polish and demo flow
- Improve copy and visual hierarchy
- Make the experience feel trustworthy and simple

### Day 5: Rehearsal
- Test the flow end to end
- Record a short demo video
- Prepare backup screenshots in case the app has issues

## 8. Demo success criteria

The demo should clearly show that:
- The user understands the cost of borrowing
- The user can compare options without confusion
- The experience feels safer than a blind purchase decision

## 9. Honest product recommendation

This is a strong hackathon concept because it solves a real user pain point.

It is not a strong production concept if it tries to mimic a full merchant-native checkout experience too literally. The better version is a companion experience inside the Synchrony app that helps users make better credit decisions before they commit to a purchase.
