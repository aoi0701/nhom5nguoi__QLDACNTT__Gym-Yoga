# Cấu hình Swagger / OpenAPI 3.0 tự động sinh tài liệu API
# WBS 4.44 / Jira: SCRUM-181, SCRUM-182, SCRUM-183, SCRUM-184

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'Bearer': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header'
        }
    },
    'USE_SESSION_AUTH': False,
    'DOC_EXPANSION': 'none',
    'APIS_SORTER': 'alpha'
}
