import os, sys, json, time, urllib.request, urllib.error

REPO_OWNER = os.environ.get("REPO_OWNER", "aoi0701")
REPO_NAME = os.environ.get("REPO_NAME", "nhom5nguoi__QLDACNTT__Gym-Yoga")
TOKEN = os.environ.get("GITHUB_TOKEN")

if not TOKEN:
    print("[!] Vui lòng cung cấp GITHUB_TOKEN qua biến môi trường để chạy script.")
    sys.exit(1)

script_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(script_dir, "issues_data.json")

with open(json_path, "r", encoding="utf-8") as f:
    issues = json.load(f)

print(f"[*] Bắt đầu đẩy {len(issues)} issues lên repository: {REPO_OWNER}/{REPO_NAME}")

url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues"
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "Antigravity-GymYoga-Script"
}

success_count = 0

for iss in issues:
    body = f"### 📌 Mô tả công việc\n{iss['description']}\n\n"
    body += f"- **Epic:** {iss['epic']}\n"
    body += f"- **Phụ trách:** **{iss['assignee']}** ({iss['assignee_role']})\n"
    body += f"- **Giai đoạn:** `{iss['sprint']}` | **Độ ưu tiên:** `{iss['priority']}`\n\n"
    body += "### 🎯 Tiêu chí nghiệm thu (Acceptance Criteria)\n"
    for ac in iss["acceptance_criteria"]:
        body += f"- [ ] {ac}\n"

    # Add sprint and priority into labels
    labels = list(set(iss["labels"] + [iss["sprint"].lower().replace(" ", "-"), f"prio:{iss['priority'].lower()}"]))

    payload = {
        "title": iss["title"],
        "body": body,
        "labels": labels
    }

    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    
    retries = 3
    while retries > 0:
        try:
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                issue_num = data.get("number")
                success_count += 1
                print(f"[{success_count}/{len(issues)}] ✅ Tạo thành công: #{issue_num} - {iss['title']}")
                break
        except urllib.error.HTTPError as e:
            err_body = e.read().decode('utf-8')
            if e.code == 403 and "secondary rate limit" in err_body.lower():
                print(f"[!] Chạm ngưỡng secondary rate limit, tạm dừng 10s...")
                time.sleep(10)
                retries -= 1
            else:
                print(f"[-] Lỗi HTTP {e.code} ở issue #{iss['id']}: {err_body}")
                break
        except Exception as ex:
            print(f"[-] Lỗi ngoại lệ: {ex}")
            time.sleep(3)
            retries -= 1

    time.sleep(0.7) # Nghỉ 0.7s giữa các request để đảm bảo an toàn rate-limit

print(f"\n🎉 HOÀN THÀNH: Đã tạo thành công {success_count}/{len(issues)} issues!")
