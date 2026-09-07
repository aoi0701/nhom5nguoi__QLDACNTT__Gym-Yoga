import os, sys, json, time, urllib.request, urllib.error

TOKEN = os.environ.get("GITHUB_TOKEN", "")
PROJECT_ID = "PVT_kwHODirVKs4BkJ7i"

FIELD_STATUS = "PVTSSF_lAHODirVKs4BkJ7izhi7hV4"
OPT_STATUS = {"Done": "98236657", "In Progress": "47fc9ee4", "To Do": "f75ad846"}

FIELD_SPRINT = "PVTSSF_lAHODirVKs4BkJ7izhi7hko"
OPT_SPRINT = {"Sprint 1": "7286294f", "Sprint 2": "7dd1fee6", "Sprint 3": "43b25d13", "Sprint 4": "b6a6a158"}

FIELD_ROLE = "PVTSSF_lAHODirVKs4BkJ7izhi7hpI"
OPT_ROLE = {
    "Nguyễn Phan Ngọc Trưởng": "876c4ffd",
    "Lê Quốc Anh": "4368cafa",
    "Đỗ Minh Nhật": "70db1b6e",
    "Bùi Nguyễn Công Nghiệp": "1a58e6e4",
    "Nguyễn Chí Nhân": "44da6a85"
}

def graphql(q):
    req = urllib.request.Request(
        "https://api.github.com/graphql",
        data=json.dumps({"query": q}).encode("utf-8"),
        headers={"Authorization": f"Bearer {TOKEN}", "User-Agent": "Python"}
    )
    retries = 3
    while retries > 0:
        try:
            with urllib.request.urlopen(req) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            err = e.read().decode('utf-8')
            if e.code == 403 and "secondary rate limit" in err.lower():
                print("[!] Secondary rate limit, tạm dừng 10s...")
                time.sleep(10)
                retries -= 1
            else:
                print(f"[-] HTTP Error {e.code}: {err}")
                return None
        except Exception as ex:
            print(f"[-] Lỗi ngoại lệ: {ex}")
            time.sleep(3)
            retries -= 1
    return None

# 1. Load local issues data
script_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(script_dir, "issues_data.json"), "r", encoding="utf-8") as f:
    issues_meta = {item["id"]: item for item in json.load(f)}

print(f"[*] Đã tải metadata của {len(issues_meta)} issues.")

# 2. Fetch all 200 issue node IDs from GitHub
def get_issues(cursor=None):
    after_clause = f', after: "{cursor}"' if cursor else ''
    q = f'''
    query {{
      repository(owner: "aoi0701", name: "nhom5nguoi__QLDACNTT__Gym-Yoga") {{
        issues(first: 100{after_clause}, orderBy: {{field: CREATED_AT, direction: ASC}}) {{
          pageInfo {{ hasNextPage endCursor }}
          nodes {{ id number title }}
        }}
      }}
    }}
    '''
    res = graphql(q)
    return res["data"]["repository"]["issues"]

all_repo_issues = []
p1 = get_issues()
all_repo_issues.extend(p1["nodes"])
if p1["pageInfo"]["hasNextPage"]:
    p2 = get_issues(p1["pageInfo"]["endCursor"])
    all_repo_issues.extend(p2["nodes"])

print(f"[*] Đã tìm thấy {len(all_repo_issues)} issues trên repository.")

# 3. Add to Project & update fields
count = 0
for iss in all_repo_issues:
    num = iss["number"]
    meta = issues_meta.get(num, {})
    status_val = meta.get("status", "To Do")
    sprint_val = meta.get("sprint", "Sprint 1")
    role_val = meta.get("assignee", "Nguyễn Phan Ngọc Trưởng")

    opt_status_id = OPT_STATUS.get(status_val, OPT_STATUS["To Do"])
    opt_sprint_id = OPT_SPRINT.get(sprint_val, OPT_SPRINT["Sprint 1"])
    opt_role_id = OPT_ROLE.get(role_val, OPT_ROLE["Nguyễn Phan Ngọc Trưởng"])

    # Mutation: add item & update fields
    m = f'''
    mutation {{
      add: addProjectV2ItemById(input: {{
        projectId: "{PROJECT_ID}",
        contentId: "{iss['id']}"
      }}) {{
        item {{ id }}
      }}
    }}
    '''
    res_add = graphql(m)
    if not res_add or "data" not in res_add or not res_add["data"]["add"]:
        print(f"[-] Không thể thêm issue #{num}")
        continue

    item_id = res_add["data"]["add"]["item"]["id"]

    # Update 3 fields
    m_up = f'''
    mutation {{
      u_status: updateProjectV2ItemFieldValue(input: {{
        projectId: "{PROJECT_ID}",
        itemId: "{item_id}",
        fieldId: "{FIELD_STATUS}",
        value: {{ singleSelectOptionId: "{opt_status_id}" }}
      }}) {{ projectV2Item {{ id }} }}

      u_sprint: updateProjectV2ItemFieldValue(input: {{
        projectId: "{PROJECT_ID}",
        itemId: "{item_id}",
        fieldId: "{FIELD_SPRINT}",
        value: {{ singleSelectOptionId: "{opt_sprint_id}" }}
      }}) {{ projectV2Item {{ id }} }}

      u_role: updateProjectV2ItemFieldValue(input: {{
        projectId: "{PROJECT_ID}",
        itemId: "{item_id}",
        fieldId: "{FIELD_ROLE}",
        value: {{ singleSelectOptionId: "{opt_role_id}" }}
      }}) {{ projectV2Item {{ id }} }}
    }}
    '''
    res_up = graphql(m_up)
    count += 1
    if count % 10 == 0 or count == len(all_repo_issues):
        print(f"[{count}/{len(all_repo_issues)}] Đã thêm & phân loại thẻ cho Issue #{num}: {iss['title'][:40]}... (Status: {status_val}, Sprint: {sprint_val})")

    time.sleep(0.4)

print(f"\n🎉 HOÀN TẤT: Đã đưa đầy đủ {count} thẻ bài tập vào bảng Kanban Project!")
print(f"🔗 Link Project: https://github.com/users/chinhanxt/projects/2")
