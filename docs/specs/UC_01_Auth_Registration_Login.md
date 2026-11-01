# WBS 2.07 / SCRUM-68: Use Case Specification - UC01 Authentication
- **Actors:** Member, Trainer (PT), Administrator
- **Pre-conditions:** User has a valid network connection to the system.
- **Main Flow (Registration):**
  1. User enters Email, Password, Full Name, Height, and Weight.
  2. System validates format and ensures unique email.
  3. System hashes password with bcrypt (cost factor >= 12).
  4. System issues initial JWT token and redirects to Fitness Profile.
- **Post-conditions:** User record created in database with default 'member' role.
