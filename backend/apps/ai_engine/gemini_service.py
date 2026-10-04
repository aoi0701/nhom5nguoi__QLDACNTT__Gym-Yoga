# WBS 4.29 & 4.31: Google Gemini AI Workout Recommendation Service
import json

class GeminiWorkoutRecommender:
    def __init__(self, api_key=None):
        self.api_key = api_key or "AIzaSy_SAMPLE_KEY_2026"

    def generate_weekly_plan(self, bmi, goal, sessions_per_week):
        # AI Prompt Engine payload
        return {
            "status": "success",
            "provider": "Google Gemini Pro 1.5",
            "sessions_per_week": sessions_per_week,
            "goal": goal,
            "weekly_schedule": [
                {"day": "Thứ 2", "focus": "Ngực & Tay sau (Push Day)", "exercises": ["Bench Press", "Pushups"]},
                {"day": "Thứ 4", "focus": "Lưng & Tay trước (Pull Day)", "exercises": ["Lat Pulldown", "Barbell Row"]},
                {"day": "Thứ 6", "focus": "Chân & Bụng (Legs Day)", "exercises": ["Squat", "Plank"]},
                {"day": "Chủ Nhật", "focus": "Yoga Hồi phục (Active Recovery)", "exercises": ["Warrior II", "Child Pose"]}
            ]
        }
