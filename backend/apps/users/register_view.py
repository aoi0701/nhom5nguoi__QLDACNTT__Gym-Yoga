# WBS 4.07 / SCRUM-143: User Registration API View
from rest_framework import status, views
from rest_framework.response import Response
from .serializers import RegisterSerializer

class RegisterAPIView(views.APIView):
    permission_classes = []

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "success": True,
                "message": "Đăng ký tài khoản thành công!",
                "user_id": user.id,
                "username": user.username
            }, status=status.HTTP_201_CREATED)
        return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
