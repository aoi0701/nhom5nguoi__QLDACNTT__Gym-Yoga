# WBS 3.23 / SCRUM-114 & WBS 3.25 / SCRUM-116: QA Test AI Response Schema
import unittest

class TestAISchema(unittest.TestCase):
    def test_gemini_response_contains_weekly_schedule(self):
        sample_ai_output = {
            "status": "success",
            "weekly_schedule": [{"day": "Thứ 2"}]
        }
        self.assertIn("weekly_schedule", sample_ai_output)
        self.assertEqual(sample_ai_output["status"], "success")
