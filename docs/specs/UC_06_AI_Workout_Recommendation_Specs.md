# WBS 2.24 & 2.25 / SCRUM-85, SCRUM-86: AI Workout Recommendation Specs & Prompt Rules
- **Objective:** Generate customized 7-day workout routine using Google Gemini 1.5 API.
- **Inputs Required:**
  - BMI Index (Underweight / Normal / Overweight).
  - Target Goal: Weight Loss, Muscle Mass, Core Strength, Flexibility.
  - Weekly Availability: 3, 4, or 5 days per week.
  - Injury / Health Warning flags (e.g., knee pain, lumbar spine).
- **Safety Constraints & Validation:**
  - If user flags lumbar spine issues, eliminate heavy Barbell Deadlifts and Squats.
  - Output must conform to strict JSON format validated against Schema.
