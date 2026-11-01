from django.core.cache import cache
import logging

logger = logging.getLogger(__name__)

class ExerciseCacheService:
    """
    Dịch vụ Cache Redis cho danh mục bài tập tĩnh và nhóm cơ ít thay đổi.
    WBS 4.42 / Jira: SCRUM-178, SCRUM-179, SCRUM-180
    """
    CACHE_KEY = "all_muscle_groups"
    TIMEOUT = 3600  # 1 hour

    @classmethod
    def get_cached_muscle_groups(cls):
        data = cache.get(cls.CACHE_KEY)
        if not data:
            data = ["Ngực", "Lưng xô", "Vai", "Tay trước", "Tay sau", "Chân mông", "Bụng", "Yoga Toàn thân"]
            cache.set(cls.CACHE_KEY, data, cls.TIMEOUT)
        return data
