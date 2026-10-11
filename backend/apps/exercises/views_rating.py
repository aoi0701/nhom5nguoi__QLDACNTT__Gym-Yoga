from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Avg, Count

class ExerciseRatingAnalyticsView(APIView):
    """
    API tính điểm đánh giá trung bình và thống kê sao của bài tập.
    WBS 4.35 / Jira: SCRUM-164
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, exercise_id):
        # Demo aggregated calculation for exercise ratings
        return Response({
            "exercise_id": exercise_id,
            "average_rating": 4.8,
            "total_reviews": 128,
            "star_breakdown": {
                "5_star": 98,
                "4_star": 22,
                "3_star": 6,
                "2_star": 1,
                "1_star": 1
            }
        }, status=status.HTTP_200_OK)
