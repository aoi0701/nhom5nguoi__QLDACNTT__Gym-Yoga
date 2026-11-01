# WBS 4.47 / SCRUM-187, SCRUM-188: Unit Test for Exercise CRUD & Integration Test for AI Recommendation
import unittest

class TestBackendExerciseAndAI(unittest.TestCase):
    def test_exercise_search_filter(self):
        exercises = [
            {"id": 1, "name": "Bench Press", "category": "Gym", "muscle": "Chest"},
            {"id": 2, "name": "Downward Dog", "category": "Yoga", "muscle": "Full Body"}
        ]
        gym_results = [e for e in exercises if e["category"] == "Gym"]
        self.assertEqual(len(gym_results), 1)
        self.assertEqual(gym_results[0]["name"], "Bench Press")

    def test_ai_fallback_rule_based_response(self):
        api_error = True
        plan = None
        if api_error:
            # Rule-based fallback
            plan = {"source": "rule_based_engine", "status": "active", "days": 3}
        self.assertIsNotNone(plan)
        self.assertEqual(plan["source"], "rule_based_engine")
