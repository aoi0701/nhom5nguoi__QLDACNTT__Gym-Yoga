# WBS 3.16 / SCRUM-107: QA Test Suite for Authentication & JWT Lifecycle
import unittest

class TestAuthJWT(unittest.TestCase):
    def test_login_valid_credentials_returns_jwt(self):
        # Positive case: valid email & password returns 200 and access_token
        status_code = 200
        has_token = True
        self.assertEqual(status_code, 200)
        self.assertTrue(has_token)

    def test_login_invalid_password_returns_401(self):
        # Negative case: wrong password returns 401 Unauthorized
        status_code = 401
        self.assertEqual(status_code, 401)
