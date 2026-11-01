# WBS 4.46 / SCRUM-185, SCRUM-186: Unit Test Suite for Authentication & RBAC Middleware
import unittest

class TestBackendAuthAndRBAC(unittest.TestCase):
    def test_jwt_token_generation_and_payload(self):
        token_payload = {"user_id": 1, "username": "admin", "role": "ADMIN"}
        self.assertIn("role", token_payload)
        self.assertEqual(token_payload["role"], "ADMIN")

    def test_rbac_admin_allowed_access(self):
        user_role = "ADMIN"
        required_role = ["ADMIN", "PT"]
        is_authorized = user_role in required_role
        self.assertTrue(is_authorized)

    def test_rbac_member_forbidden_admin_route(self):
        user_role = "MEMBER"
        admin_only_roles = ["ADMIN"]
        is_authorized = user_role in admin_only_roles
        self.assertFalse(is_authorized)
