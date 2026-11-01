from rest_framework import serializers

class ExerciseRatingSubmissionSerializer(serializers.Serializer):
    """
    Serializer tiếp nhận đánh giá 1-5 sao và bình luận bài tập.
    WBS 4.35 / Jira: SCRUM-163, SCRUM-164
    """
    exercise_id = serializers.IntegerField(required=True)
    rating = serializers.IntegerField(min_value=1, max_value=5, required=True)
    comment = serializers.CharField(max_length=500, required=False, allow_blank=True)
