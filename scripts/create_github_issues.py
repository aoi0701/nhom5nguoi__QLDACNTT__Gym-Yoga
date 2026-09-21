import os, json, time, urllib.request, urllib.error

# Script tự động đẩy 200 Issues lên GitHub qua GitHub REST API
# Sử dụng: export GITHUB_TOKEN="ghp_xxx" && python scripts/create_github_issues.py

REPO_OWNER = os.environ.get("REPO_OWNER", "aoi0701")
REPO_NAME = os.environ.get("REPO_NAME", "nhom5nguoi__QLDACNTT__Gym-Yoga")
TOKEN = os.environ.get("GITHUB_TOKEN")

if not TOKEN:
    print("[!] Vui lòng cung cấp GITHUB_TOKEN qua biến môi trường để chạy script.")
    print("    Ví dụ: export GITHUB_TOKEN='ghp_xxxx' && python scripts/create_github_issues.py")
    exit(1)

with open("scripts/issues_data.json", "r", encoding="utf-8") as f:
    issues = json.load(f)

print(f"[*] Bắt đầu tạo {len(issues)} issues lên repo {REPO_OWNER}/{REPO_NAME}...")

url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues"
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "Antigravity-GymYoga-Script"
}

for iss in issues:
    body = f"### Mô tả công việc\n{iss['description']}\n\n"
    body += f"**Phụ trách:** {iss['assignee']} ({iss['assignee_role']})\n"
    body += f"**Giai đoạn:** {iss['sprint']} | **Độ ưu tiên:** {iss['priority']}\n\n"
    body += "### Tiêu chí nghiệm thu (Acceptance Criteria)\n"
    for ac in iss["acceptance_criteria"]:
        body += f"- [ ] {ac}\n"

    payload = {
        "title": iss["title"],
        "body": body,
        "labels": iss["labels"]
    }

    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"[+] Tạo thành công: #{data['number']} - {iss['title']}")
    except urllib.error.HTTPError as e:
        print(f"[-] Lỗi khi tạo issue {iss['id']}: {e.code} - {e.read().decode('utf-8')}")
        time.sleep(2)

    time.sleep(0.5) # rate-limit safe
