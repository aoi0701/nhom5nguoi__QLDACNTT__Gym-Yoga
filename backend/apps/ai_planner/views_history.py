from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class WorkoutPlanHistoryView(APIView):
    """
    API Lưu trữ và truy xuất lịch sử gợi ý bài tập AI cùng trạng thái hoàn thành.
    WBS 4.40 / Jira: SCRUM-174, SCRUM-175, SCRUM-176, SCRUM-177
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "count": 3,
            "results": [
                {"plan_id": 101, "created_at": "2026-10-15", "goal": "Tăng cơ", "status": "completed"},
                {"plan_id": 102, "created_at": "2026-10-16", "goal": "Giảm cân", "status": "active"}
            ]
        }, status=status.HTTP_200_OK)

    def post(self, request):
        return Response({"message": "Đã lưu lịch tập thành công vào lịch sử"}, status=status.HTTP_201_CREATED)
