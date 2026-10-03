# WBS 4.08 / SCRUM-144 & WBS 4.09 / SCRUM-145: JWT Token Management Service
from rest_framework_simplejwt.tokens import RefreshToken

def generate_user_jwt_tokens(user):
    refresh = RefreshToken.for_user(user)
    refresh['role'] = user.role
    refresh['username'] = user.username
    return {
        'access_token': str(refresh.access_token),
        'refresh_token': str(refresh),
        'expires_in': 3600
    }
