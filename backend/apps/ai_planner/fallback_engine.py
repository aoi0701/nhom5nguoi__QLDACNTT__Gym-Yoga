import logging

logger = logging.getLogger(__name__)

class RuleBasedFallbackEngine:
    """
    Thuật toán Rule-based dự phòng khi Gemini AI timeout hoặc lỗi quota.
    WBS 4.39 / Jira: SCRUM-171, SCRUM-172, SCRUM-173
    """
    def __init__(self):
        self.preset_templates = {
            "Giam_Mo": ["HIIT Cardio", "Plank", "Jumping Jack", "Burpees", "Vinyasa Yoga"],
            "Tang_Co": ["Bench Press", "Squat", "Deadlift", "Overhead Press", "Barbell Row"],
            "Thu_Gian": ["Child Pose", "Cat-Cow Stretch", "Downward Dog", "Corpse Pose"]
        }

    def generate_fallback_schedule(self, goal="Giam_Mo"):
        exercises = self.preset_templates.get(goal, self.preset_templates["Giam_Mo"])
        return {
            "mode": "rule_based_fallback",
            "message": "Kích hoạt cơ chế dự phòng an toàn (Fallback) do API AI quá tải.",
            "recommended_exercises": exercises
        }
